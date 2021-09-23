(function(e){function t(t){for(var n,s,a=t[0],u=t[1],o=t[2],d=0,p=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&p.push(c[s][0]),c[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,o||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==c[u]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},c={app:0},i=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/Exchange-UI/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var o=0;o<a.length;o++)t(a[o]);var l=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"08ff":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),c={class:"main-container px-8 w-full min-h-screen lg:min-h-0"},i=Object(n["e"])("h1",{class:"text-sl mt-32 lg:text-big"},"Crypto Exchange",-1),s=Object(n["e"])("h2",{class:"text-xl mt-8"},"Exchange fast and easy",-1),a={class:"flex flex-wrap justify-end lg:justify-between lg:items-center lg:mt-28"},u=Object(n["e"])("div",{class:"mt-10 lg:mt-0"},[Object(n["e"])("svg",{height:"48",viewBox:"0 0 48 48",width:"48",xmlns:"http://www.w3.org/2000/svg",class:"transform rotate-0 lg:rotate-90"},[Object(n["e"])("path",{class:"rotate-45",fill:"#11b3fe",d:"M32 34.02V20h-4v14.02h-6L30 42l8-7.98h-6zM18 6l-8 7.98h6V28h4V13.98h6L18 6z"}),Object(n["e"])("path",{d:"M0 0h48v48H0z",fill:"none"})])],-1),o={key:0,class:"text-lg mt-12 border border-red-300 text-red-400 text-center py-2 lg:mt-24"},l={key:1,class:"text-lg mt-12 border border-red-300 text-red-400 text-center py-2 lg:mt-24"},d={class:"text-lg mt-16 lg:mt-32"},p=Object(n["e"])("div",{class:"mt-4 text-lg flex flex-wrap justify-between"},[Object(n["e"])("input",{class:"w-full h-24 bg-gray-100 border rounded-xl outline-none px-8 lg:w-8/12"}),Object(n["e"])("button",{class:"w-full h-24 bg-blue-400 rounded-xl text-white font-bold mt-8 lg:w-3/12 lg:mt-0"}," Exchange ")],-1);function h(e,t,r,h,b,f){var m=Object(n["l"])("currency-input");return Object(n["i"])(),Object(n["d"])("div",c,[i,s,Object(n["e"])("div",a,[Object(n["g"])(m,{currenciesList:b.currenciesList,value:b.minimalExchange,excludeCurrency:b.currencyTwo,inputPosition:"left",ticker:"btc",class:"z-10 mt-28 lg:mt-0",onSelect:f.loadMinExchange,onEnter:f.loadEstimatedExchange},{default:Object(n["o"])((function(){return[Object(n["f"])(Object(n["m"])(b.minimalExchange),1)]})),_:1},8,["currenciesList","value","excludeCurrency","onSelect","onEnter"]),u,Object(n["g"])(m,{currenciesList:b.currenciesList,value:b.estimatedExchange,excludeCurrency:b.currencyOne,inputPosition:"right",ticker:"eth",class:"z-0 mt-10 lg:mt-0",onSelect:f.loadMinExchange},null,8,["currenciesList","value","excludeCurrency","onSelect"])]),b.isPairActive?Object(n["c"])("",!0):(Object(n["i"])(),Object(n["d"])("p",o," This pair is not active ")),b.isNumbersEntered?Object(n["c"])("",!0):(Object(n["i"])(),Object(n["d"])("p",l," Enter numbers ")),Object(n["e"])("p",d,"Your "+Object(n["m"])(b.addressName)+" address",1),p])}var b=r("1da1"),f=(r("96cf"),r("d3b7"),r("b0c0"),r("25f0"),r("a9e3"),{class:"w-full h-24 relative text-lg lg:w-5/12"}),m={class:"w-full border-2 rounded-xl bg-gray-100 flex relative"},g=["value","placeholder","data-position"],y={class:"flex items-center"},j=["src"],O={class:"uppercase max-w-1/2 overflow-hidden"},x={key:1,class:"absolute hidden top-24 left-4 text-gray-400 minimal"},v=Object(n["f"])("min: "),w=["data-position"],k={class:"max-h-72 overflow-scroll currList"},C=["data-ticker"],E=["src"],L={class:"pr-6 uppercase"},S={class:"text-gray-400"},P={key:0,class:"h-24 w-full flex items-center justify-center"},T=Object(n["e"])("svg",{viewBox:"0 0 32 32",class:"h-12 w-12 chevron"},[Object(n["e"])("path",{d:"M20,25a1,1,0,0,1-.71-.29l-8-8a1,1,0,0,1,0-1.42l8-8a1,1,0,1,1,1.42,1.42L13.41,16l7.3,7.29a1,1,0,0,1,0,1.42A1,1,0,0,1,20,25Z"})],-1),q=[T];function M(e,t,r,c,i,s){var a;return Object(n["i"])(),Object(n["d"])("div",f,[Object(n["e"])("div",m,[Object(n["e"])("input",{value:s.amountValue,placeholder:"left"==r.inputPosition?"Enter the amount":"Estimated",class:"w-7/12 lg:w-6/12 xl:w-7/12 h-24 bg-transparent outline-none px-8 border-r-2 amount","data-position":r.inputPosition,onInput:t[0]||(t[0]=function(t){return e.$emit("enter",t.target.value)})},null,40,g),s.selectedCurrencyObject?(Object(n["i"])(),Object(n["d"])("div",{key:0,class:"w-5/12 lg:w-6/12 xl:w-5/12 pr-24 h-24 flex items-center md:justify-center cursor-pointer",onClick:t[1]||(t[1]=function(){return s.openCurrenciesList&&s.openCurrenciesList.apply(s,arguments)})},[Object(n["e"])("div",y,[Object(n["e"])("img",{src:null===(a=s.selectedCurrencyObject)||void 0===a?void 0:a.image,class:"px-6"},null,8,j),Object(n["e"])("div",O,Object(n["m"])(s.selectedCurrencyObject.ticker),1)])])):Object(n["c"])("",!0),"left"==r.inputPosition?(Object(n["i"])(),Object(n["d"])("span",x,[v,Object(n["k"])(e.$slots,"default")])):Object(n["c"])("",!0)]),Object(n["e"])("div",{class:Object(n["h"])(["absolute border-2 border-blue-400 w-full top-0 left-0 bg-gray-100 rounded-xl",i.isInputFocused?"transform scale-y-100":"transform scale-y-0"]),onClick:t[5]||(t[5]=function(){return s.openCurrenciesList&&s.openCurrenciesList.apply(s,arguments)})},[Object(n["p"])(Object(n["e"])("input",{"data-position":r.inputPosition+"second","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.searchValue=e}),placeholder:"Search",class:"w-full h-24 bg-transparent border-b outline-none px-8",onClick:t[3]||(t[3]=Object(n["q"])((function(){}),["stop"]))},null,8,w),[[n["n"],i.searchValue]]),Object(n["e"])("div",k,[(Object(n["i"])(!0),Object(n["d"])(n["a"],null,Object(n["j"])(s.filteredCurrenciesList,(function(e){return Object(n["i"])(),Object(n["d"])("div",{key:e.ticker,"data-ticker":e.ticker,class:"w-full h-24 border-t flex items-center hover:bg-gray-200 cursor-pointer",onClick:t[4]||(t[4]=function(){return s.selectCurrency&&s.selectCurrency.apply(s,arguments)})},[Object(n["e"])("img",{src:null===e||void 0===e?void 0:e.image,class:"px-6"},null,8,E),Object(n["e"])("span",L,Object(n["m"])(e.ticker),1),Object(n["e"])("span",S,Object(n["m"])(e.name),1)],8,C)})),128)),0===s.filteredCurrenciesList.length?(Object(n["i"])(),Object(n["d"])("div",P," Ничего не найдено ")):Object(n["c"])("",!0)])],2),Object(n["e"])("div",{class:Object(n["h"])([i.isInputFocused?"rotate-90":"-rotate-90","absolute top-3 right-4 p-4 transform transition-all duration-300 cursor-pointer"]),onClick:t[6]||(t[6]=function(){return s.openCurrenciesList&&s.openCurrenciesList.apply(s,arguments)})},q,2)])}var V=r("b85c"),A=(r("159b"),r("4de4"),r("caad"),r("2532"),{name:"CurrencyInput",props:{currenciesList:{type:Array,required:!0},ticker:{type:String,required:!0},inputPosition:{type:String,required:!0},value:{type:String,required:!1},excludeCurrency:{type:String,required:!0}},data:function(){return{selectedCurrencyTicker:this.ticker,searchValue:"",isInputFocused:!1}},methods:{openCurrenciesList:function(){document.querySelector("[data-position=".concat(this.inputPosition+"second","]")).focus(),this.isInputFocused=!this.isInputFocused,this.searchValue="",document.querySelectorAll(".currList").forEach((function(e){return e.scrollTop=0}))},selectCurrency:function(e){this.selectedCurrencyTicker=e.currentTarget.getAttribute("data-ticker"),this.$emit("select",{ticker:this.selectedCurrencyTicker,input:this.inputPosition,name:this.selectedCurrencyObject.name})}},computed:{filteredCurrenciesList:function(){var e=this;return this.currenciesList.filter((function(t){return t.ticker!==e.excludeCurrency&&(t.ticker.toLowerCase().includes(e.searchValue.toLowerCase())||t.name.toLowerCase().includes(e.searchValue.toLowerCase()))}))},selectedCurrencyObject:function(){var e,t=Object(V["a"])(this.currenciesList);try{for(t.s();!(e=t.n()).done;){var r=e.value;if(r.ticker===this.selectedCurrencyTicker)return r}}catch(n){t.e(n)}finally{t.f()}return this.currenciesList[0]},amountValue:function(){return this.value}},mounted:function(){"right"===this.inputPosition&&(document.querySelector('[data-position="right"]').disabled=!0)}}),_=r("6b0d"),I=r.n(_),N=I()(A,[["render",M]]),R={name:"App",components:{CurrencyInput:N},data:function(){return{currenciesList:[],currencyOne:"btc",currencyTwo:"eth",minimalExchange:"",estimatedExchange:"",isPairActive:!0,isNumbersEntered:!0,addressName:"Ethereum",apiKey:"c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd",startUrl:"https://api.changenow.io/v1/"}},methods:{loadCurrenciesList:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.changenow.io/v1/currencies?active=true");case 2:return r=t.sent,t.next=5,r.json();case 5:e.currenciesList=t.sent,e.loadMinExchange({input:"left",ticker:"btc"});case 7:case"end":return t.stop()}}),t)})))()},loadMinExchange:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:"left"==e.input?t.currencyOne=e.ticker:(t.currencyTwo=e.ticker,t.addressName=e.name),document.querySelector(".minimal").classList.remove("hidden"),fetch(t.startUrl+"min-amount/"+t.currencyOne+"_"+t.currencyTwo+"?api_key="+t.apiKey).then((function(e){return e.json()})).then((function(e){t.isPairActive=!0,t.minimalExchange=e.minAmount.toString(),t.loadEstimatedExchange(t.minimalExchange)})).catch((function(){t.isPairActive=!1,t.estimatedExchange="---"}));case 3:case"end":return r.stop()}}),r)})))()},loadEstimatedExchange:function(e){var t=this;if(""===e&&(e=0),Number(e)<Number(this.minimalExchange))return console.log("Мало денег "+e),document.querySelector(".minimal").classList.add("text-red-500"),void(this.estimatedExchange="---");document.querySelector(".minimal").classList.remove("text-red-500"),fetch(this.startUrl+"exchange-amount/"+e+"/"+this.currencyOne+"_"+this.currencyTwo+"?api_key="+this.apiKey).then((function(e){return e.json()})).then((function(e){t.isNumbersEntered=!0,t.estimatedExchange=e.estimatedAmount.toString()})).catch((function(){t.isNumbersEntered=!1,t.estimatedExchange="---"}))}},created:function(){this.loadCurrenciesList()},mounted:function(){return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},z=I()(R,[["render",h]]);r("08ff");Object(n["b"])(z).mount("#app")}});
//# sourceMappingURL=app.1d1ba19f.js.map