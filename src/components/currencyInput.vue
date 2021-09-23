<template>
  <div class="w-full h-24 relative text-lg lg:w-5/12">
    <div class="w-full border-2 rounded-xl bg-gray-100 flex relative">
      <input
        v-bind:value="amountValue"
        :placeholder="
          inputPosition == 'left' ? 'Enter the amount' : 'Estimated'
        "
        class="
          w-7/12
          lg:w-6/12
          xl:w-7/12
          h-24
          bg-transparent
          outline-none
          px-8
          border-r-2
          amount
        "
        :data-position="inputPosition"
        @input="$emit('enter', $event.target.value)"
      />
      <div
        v-if="selectedCurrencyObject"
        class="
          w-5/12
          lg:w-6/12
          xl:w-5/12
          pr-24
          h-24
          flex
          items-center
          md:justify-center
          cursor-pointer
        "
        @click="openCurrenciesList"
      >
        <div class="flex items-center">
          <img :src="selectedCurrencyObject?.image" class="px-6" />
          <div class="uppercase max-w-1/2 overflow-hidden">
            {{ selectedCurrencyObject.ticker }}
          </div>
        </div>
      </div>

      <span
        v-if="inputPosition == 'left'"
        class="absolute hidden top-24 left-4 text-gray-400 minimal"
        >min: <slot></slot
      ></span>
    </div>

    <div
      class="
        absolute
        border-2 border-blue-400
        w-full
        top-0
        left-0
        bg-gray-100
        rounded-xl
      "
      :class="isInputFocused ? 'transform scale-y-100' : 'transform scale-y-0'"
      @click="openCurrenciesList"
    >
      <input
        :data-position="inputPosition + 'second'"
        v-model="searchValue"
        placeholder="Search"
        class="w-full h-24 bg-transparent border-b outline-none px-8"
        @click.stop
      />

      <div class="max-h-72 overflow-scroll currList">
        <div
          v-for="currency of filteredCurrenciesList"
          :key="currency.ticker"
          :data-ticker="currency.ticker"
          class="
            w-full
            h-24
            border-t
            flex
            items-center
            hover:bg-gray-200
            cursor-pointer
          "
          @click="selectCurrency"
        >
          <img :src="currency?.image" class="px-6" />
          <span class="pr-6 uppercase">{{ currency.ticker }}</span>
          <span class="text-gray-400">{{ currency.name }}</span>
        </div>
        <div
          v-if="filteredCurrenciesList.length === 0"
          class="h-24 w-full flex items-center justify-center"
        >
          Ничего не найдено
        </div>
      </div>
    </div>
    <div
      :class="isInputFocused ? 'rotate-90' : '-rotate-90'"
      class="
        absolute
        top-3
        right-4
        p-4
        transform
        transition-all
        duration-300
        cursor-pointer
      "
      @click="openCurrenciesList"
    >
      <svg viewBox="0 0 32 32" class="h-12 w-12 chevron">
        <path
          d="M20,25a1,1,0,0,1-.71-.29l-8-8a1,1,0,0,1,0-1.42l8-8a1,1,0,1,1,1.42,1.42L13.41,16l7.3,7.29a1,1,0,0,1,0,1.42A1,1,0,0,1,20,25Z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrencyInput",
  props: {
    currenciesList: {
      type: Array,
      required: true,
    },
    ticker: {
      type: String,
      required: true,
    },

    inputPosition: {
      type: String,
      required: true,
    },

    value: {
      type: String,
      required: false,
    },

    excludeCurrency: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      selectedCurrencyTicker: this.ticker,

      searchValue: "",

      isInputFocused: false,
    };
  },

  computed: {
    filteredCurrenciesList() {
      return this.currenciesList.filter((item) => {
        return (
          item.ticker !== this.excludeCurrency &&
          (item.ticker.toLowerCase().includes(this.searchValue.toLowerCase()) ||
            item.name.toLowerCase().includes(this.searchValue.toLowerCase()))
        );
      });
    },

    selectedCurrencyObject() {
      for (let curr of this.currenciesList) {
        if (curr.ticker === this.selectedCurrencyTicker) return curr;
      }
      return this.currenciesList[0];
    },

    amountValue() {
      return this.value;
    },
  },

  methods: {
    openCurrenciesList() {
      if (window.innerWidth >= 1024) {
        document
          .querySelector(`[data-position=${this.inputPosition + "second"}]`)
          .focus();
      }
      this.isInputFocused = !this.isInputFocused;
      this.searchValue = "";
      document
        .querySelectorAll(".currList")
        .forEach((item) => (item.scrollTop = 0));
    },

    selectCurrency(event) {
      this.selectedCurrencyTicker =
        event.currentTarget.getAttribute("data-ticker");
      this.$emit("select", {
        ticker: this.selectedCurrencyTicker,
        input: this.inputPosition,
        name: this.selectedCurrencyObject.name,
      });
    },
  },

  mounted() {
    if (this.inputPosition === "right") {
      document.querySelector('[data-position="right"]').disabled = true;
    }
  },
};
</script>

<style>
</style>
