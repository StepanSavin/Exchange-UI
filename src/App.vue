<template>
  <div class="main-container px-8 w-full min-h-screen lg:min-h-0">
    <h1 class="text-sl mt-32 lg:text-big">Crypto Exchange</h1>
    <h2 class="text-xl mt-8">Exchange fast and easy</h2>

    <div
      class="
        flex flex-wrap
        justify-end
        lg:justify-between
        lg:items-center
        lg:mt-28
      "
    >
      <currency-input
        :currenciesList="currenciesList"
        :value="minimalExchange"
        :excludeCurrency="currencyTwo"
        inputPosition="left"
        ticker="btc"
        class="z-10 mt-28 lg:mt-0"
        @select="loadMinExchange"
        @enter="loadEstimatedExchange"
        >{{ minimalExchange }}
      </currency-input>

      <div class="mt-10 lg:mt-0">
        <svg
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
          class="transform rotate-0 lg:rotate-90"
        >
          <path
            class="rotate-45"
            fill="#11b3fe"
            d="M32 34.02V20h-4v14.02h-6L30 42l8-7.98h-6zM18 6l-8 7.98h6V28h4V13.98h6L18 6z"
          />
          <path d="M0 0h48v48H0z" fill="none" />
        </svg>
      </div>

      <currency-input
        :currenciesList="currenciesList"
        :value="estimatedExchange"
        :excludeCurrency="currencyOne"
        inputPosition="right"
        ticker="eth"
        class="z-0 mt-10 lg:mt-0"
        @select="loadMinExchange"
      >
      </currency-input>
    </div>

    <p
      v-if="!isPairActive"
      class="
        text-lg
        mt-12
        border border-red-300
        text-red-400 text-center
        py-2
        lg:mt-24
      "
    >
      This pair is not active
    </p>
    <p
      v-if="!isNumbersEntered"
      class="
        text-lg
        mt-12
        border border-red-300
        text-red-400 text-center
        py-2
        lg:mt-24
      "
    >
      Enter numbers
    </p>

    <p class="text-lg mt-16 lg:mt-32">Your {{ addressName }} address</p>

    <div class="mt-4 text-lg flex flex-wrap justify-between">
      <input
        class="
          w-full
          h-24
          bg-gray-100
          border
          rounded-xl
          outline-none
          px-8
          lg:w-8/12
        "
      />
      <button
        class="
          w-full
          h-24
          bg-blue-400
          rounded-xl
          text-white
          font-bold
          mt-8
          lg:w-3/12
          lg:mt-0
        "
      >
        Exchange
      </button>
    </div>
  </div>
</template>
<script>
import CurrencyInput from "./components/currencyInput.vue";

export default {
  name: "App",

  components: {
    CurrencyInput,
  },

  data() {
    return {
      currenciesList: [],

      currencyOne: "btc",
      currencyTwo: "eth",

      minimalExchange: "",
      estimatedExchange: "",

      isPairActive: true,
      isNumbersEntered: true,

      addressName: "Ethereum",

      apiKey:
        "c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd",
      startUrl: "https://api.changenow.io/v1/",
    };
  },

  methods: {
    async loadCurrenciesList() {
      const response = await fetch(
        "https://api.changenow.io/v1/currencies?active=true"
      );
      this.currenciesList = await response.json();
      this.loadMinExchange({input:'left', ticker:'btc'});
    },

    async loadMinExchange(obj) {
      if (obj.input == "left") {
        this.currencyOne = obj.ticker;
      } else {
        this.currencyTwo = obj.ticker;
        this.addressName = obj.name;
      }

      document.querySelector(".minimal").classList.remove("hidden");

      fetch(
        this.startUrl +
          "min-amount/" +
          this.currencyOne +
          "_" +
          this.currencyTwo +
          "?api_key=" +
          this.apiKey
      )
        .then((response) => response.json())
        .then((result) => {
          this.isPairActive = true;
          this.minimalExchange = result.minAmount.toString();
          this.loadEstimatedExchange(this.minimalExchange);
        })
        .catch(() => {
          this.isPairActive = false;
          this.estimatedExchange = "---";
        });
    },

    loadEstimatedExchange(value) {
      if (value === "") value = 0;
      if (Number(value) < Number(this.minimalExchange)) {
        console.log("Мало денег " + value);
        document.querySelector(".minimal").classList.add("text-red-500");
        this.estimatedExchange = "---";
        return;
      }

      document.querySelector(".minimal").classList.remove("text-red-500");
      fetch(
        this.startUrl +
          "exchange-amount/" +
          value +
          "/" +
          this.currencyOne +
          "_" +
          this.currencyTwo +
          "?api_key=" +
          this.apiKey
      )
        .then((response) => response.json())
        .then((result) => {
          this.isNumbersEntered = true;
          this.estimatedExchange = result.estimatedAmount.toString();
        })
        .catch(() => {
          this.isNumbersEntered = false;
          this.estimatedExchange = "---";
        });
    },
  },

  created() {
    this.loadCurrenciesList();
  },

  async mounted() {},
};
</script>

<style>
</style>
