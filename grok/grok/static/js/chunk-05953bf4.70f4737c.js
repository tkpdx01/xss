(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05953bf4"],{"151d":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-game1"},[r("Header"),r("div",{staticClass:"game1-warp"},[r("div",{staticClass:"back-row"},[r("div",{staticClass:"icon-back",on:{click:function(e){return t.$router.back()}}}),r("div",{staticClass:"record",on:{click:function(e){return t.$router.push("/battle-record")}}},[r("i",{staticClass:"icon-battle-record"}),t._v(" "+t._s(t.$t("game.game1.ritqvp"))+" ")])]),r("div",{staticClass:"warp-box"},[r("div",{staticClass:"tabs"},t._l(t.tabs,(function(e,i){return r("div",{key:e.value,class:["tab-item",{"active-tab":t.currentTab.id===e.id}]},[r("div",{class:"img img"+e.id},[r("img",{attrs:{src:e.img,alt:""}}),0!==i?r("div",{staticClass:"game-lock"}):t._e()])])})),0),r("div",{staticClass:"flex-center"},[r("div",{staticClass:"bg-box"},[r("div",{staticClass:"title"},[t._v(t._s(t.$t("game.game1.d8a579")))]),r("div",{staticClass:"img"},[r("div",{staticClass:"top-filter filter-search"},[r("div",{staticClass:"item"},[r("van-popover",{attrs:{trigger:"click",placement:"bottom-end","get-container":"#list"},scopedSlots:t._u([{key:"reference",fn:function(){return[r("div",{staticClass:"filter",class:{unfold:t.showLevelPopover}},[r("span",[t._v(t._s(t.currentFilterLevel.name))]),r("i",{staticClass:"icon-caret1"})])]},proxy:!0}]),model:{value:t.showLevelPopover,callback:function(e){t.showLevelPopover=e},expression:"showLevelPopover"}},[r("ul",{staticClass:"filter-list"},t._l(t.filterLevelOptions,(function(e){return r("li",{key:e.id,class:{active:t.currentFilterLevel.id===e},on:{click:function(r){return t.onSelectLevel(e)}}},[t._v(" "+t._s(e.name)+" ")])})),0)])],1)]),r("img",{attrs:{src:t.currentTab.img,alt:""}}),r("div",{staticClass:"question"},[t.checkedCard?r("img",{attrs:{src:t.checkedCard&&t.checkedCard.card.image,alt:""}}):r("span",{staticClass:"tip"})])]),r("div",{staticClass:"infos"},[t.checkedCard?[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("i",{staticClass:"icon-xin"}),t._v(" "+t._s(t.$t("game.game1.xc6qme"))+"："+t._s(t.checkedCard.energy)+" ")]),r("div",{staticClass:"col"},[r("i",{staticClass:"icon-jian"}),t._v(" "+t._s(t.$t("game.game1.xur2sr"))+"："+t._s(t.checkedCard.strength)+" ")])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("i",{staticClass:"icon-dun"}),t._v(" "+t._s(t.$t("game.game1.nehz2s"))+"："+t._s(t.checkedCard.defense)+" ")]),r("div",{staticClass:"col"},[r("i",{staticClass:"icon-xie"}),t._v(" "+t._s(t.$t("game.game1.z66kwi"))+"："+t._s(t.checkedCard.agile))])])]:r("p",{staticClass:"tips"},[t._v(t._s(t.$t("game.game1.9pzmkk"))+"~")])],2),r("div",{staticClass:"tiao"},[t._v(" "+t._s(t.$t("game.game1.o94smg"))+": "),t.checkedCard?r("span",[t._v(t._s(t.checkedCard.last_combat))]):r("span",[t._v("?")])])])]),t.needCurrency?r("div",{staticClass:"money"},[r("i",{staticClass:"icon-money"}),r("span",[t._v(t._s(t.needCurrency.amount)+" "+t._s(t.needCurrency.name)+" ")])]):t._e()]),r("div",{staticClass:"bottom-opt"},[r("van-button",{attrs:{type:"warn"},on:{click:t.onShowSelectCard}},[t._v(t._s(t.$t("game.game1.c9i3t9"))+"NFT")]),r("van-button",{attrs:{type:"primary",disabled:!t.checkedCard,loading:t.loading},on:{click:t.onTiaoZhan}},[t._v(t._s(t.$t("game.game1.k6ruyr")))])],1)]),r("van-popup",{staticClass:"popup-select-card",attrs:{position:"bottom"},model:{value:t.isShowSelectCard,callback:function(e){t.isShowSelectCard=e},expression:"isShowSelectCard"}},[r("SelectSpristList",{attrs:{limit:1},on:{setCheckedCard:t.setCheckedCard},scopedSlots:t._u([{key:"searchRight",fn:function(){return[r("div",{staticClass:"button",on:{click:t.onDoneSelect}},[t._v(t._s(t.$t("blindBox.o8bpeu")))])]},proxy:!0}])})],1)],1)},s=[],n=r("5530"),a=r("1da1"),c=(r("b0c0"),r("99af"),r("96cf"),r("0418")),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"con-select-card-list"},[r("div",{staticClass:"tab-content"},[r("div",{staticClass:"top-filter filter-search"},[r("div",{staticClass:"item filter"},[r("van-popover",{attrs:{trigger:"click",placement:"bottom-end","get-container":"#list"},scopedSlots:t._u([{key:"reference",fn:function(){return[r("div",{staticClass:"filter",class:{unfold:t.showLevelPopover}},[r("span",[t._v(t._s(t.currentFilterLevel.label))]),r("i",{staticClass:"icon-caret1"})])]},proxy:!0}]),model:{value:t.showLevelPopover,callback:function(e){t.showLevelPopover=e},expression:"showLevelPopover"}},[r("ul",{staticClass:"filter-list"},t._l(t.filterLevelOptions,(function(e){return r("li",{key:e.value,class:{active:t.currentFilterLevel.value===e},on:{click:function(r){return t.onSelectLevel(e)}}},[t._v(" "+t._s(e.label)+" ")])})),0)])],1),r("div",{staticClass:"item filter"},[r("van-popover",{attrs:{trigger:"click",placement:"bottom-end","get-container":"#list"},scopedSlots:t._u([{key:"reference",fn:function(){return[r("div",{staticClass:"filter",class:{unfold:t.showFilterPopover}},[r("span",[t._v(t._s(t.currentFilterOrder.label))]),r("i",{staticClass:"icon-caret1"})])]},proxy:!0}]),model:{value:t.showFilterPopover,callback:function(e){t.showFilterPopover=e},expression:"showFilterPopover"}},[r("ul",{staticClass:"filter-list"},t._l(t.filterOptions,(function(e){return r("li",{key:e.value,class:{active:t.currentFilterOrder.value===e},on:{click:function(r){return t.onSelectSellOrder(e)}}},[t._v(" "+t._s(e.label)+" ")])})),0)])],1),r("div",{staticClass:"right-info"},[t._t("searchRight")],2)]),t.cardList.length>0?r("van-grid",{staticClass:"card-list",attrs:{"column-num":3}},t._l(t.cardList,(function(e,i){return r("van-grid-item",{key:e.id,staticClass:"card-item",on:{click:function(r){return t.onClickCard(e,i)}}},[r("div",{staticClass:"img"},[r("img",{attrs:{src:e.card.image,alt:""}}),r("div",{staticClass:"meng"},[r("p",[t._v("总属性值: "+t._s(e.total_attribute))]),r("p",[t._v("能量: "+t._s(e.energy))]),r("p",[t._v("算力: "+t._s(e.power))]),r("p",[t._v("剩余次数: "+t._s(e.last_combat))])]),e.checked?r("div",{staticClass:"checkd-img"},[r("van-icon",{attrs:{name:"success",color:"#46ba73",size:"40"}})],1):t._e()]),r("div",{staticClass:"token-id"},[t._v(t._s(t._f("filterAds")(e.token_id,3)))])])})),1):r("van-empty")],1)])},l=[],u=(r("a9e3"),r("4de4"),r("159b"),r("2f62")),d=r("4ec3"),h={props:{limit:{type:Number,default:3}},data:function(){return{showLevelPopover:!1,filterLevelOptions:[],currentFilterLevel:{},showFilterPopover:!1,filterOptions:[],currentFilterOrder:{},cardList:[],checkedCards:[]}},watch:{"$i18n.locale":function(){this.initData()}},mounted:function(){this.initData(),this.getCardData()},beforeDestroy:function(){},computed:Object(n["a"])({},Object(u["b"])(["userInfo"])),methods:{initData:function(){this.filterOptions=[{label:this.$t("island.bag.nvw5oh"),value:""},{label:this.$t("island.bag.p4nvag"),value:1},{label:this.$t("cardList.kr38gh"),value:3},{label:this.$t("island.bag.8prhsa"),value:4},{label:this.$t("island.bag.ckg0bj"),value:5},{label:this.$t("CardList.zkm4cr"),value:6}],this.filterLevelOptions=[{label:this.$t("island.bag.nvw5oh"),value:""},{label:"LV1",value:1},{label:"LV2",value:2},{label:"LV3",value:3},{label:"LV4",value:4},{label:"LV5",value:5}],this.currentFilterLevel=this.filterLevelOptions[0],this.currentFilterOrder=this.filterOptions[1]},onSelectLevel:function(t){this.currentFilterLevel=t,this.showFilterPopover=!1,this.getCardData()},onSelectSellOrder:function(t){this.currentFilterOrder=t,this.showLevelPopover=!1,this.getCardData()},getCardData:function(){var t=this,e=this.$toast.loading();Object(d["myCardList"])({page:1,size:1e4,grade:this.currentFilterLevel.value,status:this.currentFilterOrder.value}).then((function(r){t.cardList=r.data.list,e.clear()}))},onClickCard:function(t,e){if(1===t.status){var r=JSON.parse(JSON.stringify(this.cardList));this.checkedCards=[];var i=r.filter((function(t){return t.checked}));i.length!==this.limit||t.checked||(r.forEach((function(t){i[0].id===t.id&&(t.checked=!1)})),this.cardList=r),this.$set(this.cardList,e,Object(n["a"])(Object(n["a"])({},t),{},{checked:!t.checked})),this.checkedCards=this.cardList.filter((function(t){return t.checked})),this.$emit("setCheckedCard",this.checkedCards)}else this.$router.push("/card-detail?id=".concat(t.id))}}},f=h,v=(r("3592"),r("2877")),p=Object(v["a"])(f,o,l,!1,null,null,null),m=p.exports,g=r("df5d"),b={components:{Header:c["a"],SelectSpristList:m},data:function(){return{tabs:[],currentTab:{},showLevelPopover:!1,currentFilterLevel:{},filterLevelOptions:[],isShowSelectCard:!1,checkedCard:null,needCurrency:null,loading:!1,timer1:null,timer2:null,combatResult:null}},watch:{"$i18n.locale":function(){this.initData()}},mounted:function(){this.initData()},methods:{initData:function(){this.tabs=[{label:this.$t("game.Tribe.g2mdbm"),value:1},{label:this.$t("game.Tribe.johx9t"),value:2},{label:this.$t("game.Tribe.45ldlz"),value:3}],this.currentTab=this.tabs[0]},onSelectLevel:function(t){this.currentFilterLevel=t,this.getAmount()},getScene:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.$toast.loading(),e.next=3,Object(d["combatSceneList"])({scene_id:t.$route.query.sceneId});case 3:i=e.sent,t.tabs=i.data,t.currentTab=i.data[0],r.clear(),t.filterLevelOptions=i.data,t.currentFilterLevel=t.filterLevelOptions[0];case 9:case"end":return e.stop()}}),e)})))()},onShowSelectCard:function(){this.isShowSelectCard=!0},setCheckedCard:function(t){0===t[0].last_combat?this.$toast(this.$t("game.game1.o94smg1")):this.checkedCard=t[0]},onDoneSelect:function(){this.checkedCard&&(this.isShowSelectCard=!1,this.getAmount())},onTiaoZhan:function(){var t=this;clearTimeout(this.timer1),this.loading=!0;try{var e=this.needCurrency,r=e.name,i=e.contract_address,s=e.precision,n="combat@".concat(this.checkedCard.id,"@").concat(this.needCurrency.key,"@").concat(this.currentFilterLevel.id),a={coinName:r,ads:i,amount:this.needCurrency.amount,precision:s,remarks:n};Object(g["a"])(a).then((function(e){e&&(t.$toast(t.$t("withdraw.afuexq")),t.timer1=setTimeout((function(){t.onCombat()}),2e3))}))}finally{this.loading=!1}},onCombat:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loadingFun(100),r=null,i=t,s=setInterval((function(){r?(clearInterval(s),thiss.$toast.clear()):Object(d["combatGetResult"])({key:i.needCurrency.key}).then((function(t){200===t.code&&(localStorage.setItem("combatResult",JSON.stringify(t.data)),r=t.data,i.$router.push("/battle"),clearInterval(s))}))}),1e4);case 4:case"end":return e.stop()}}),e)})))()},getAmount:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["combatGetAmount"])({scene_id:t.currentFilterLevel.id});case 2:r=e.sent,t.needCurrency=Object(n["a"])(Object(n["a"])({},r.data),r.data.currency);case 4:case"end":return e.stop()}}),e)})))()},loadingFun:function(t){var e=this,r=(this.$toast.loading({duration:0,forbidClick:!0,message:"正在获取对战信息..."}),t),i=setInterval((function(){r--,r||(clearInterval(i),e.$toast.clear())}),1e3)}}},C=b,w=(r("f644"),Object(v["a"])(C,i,s,!1,null,null,null));e["default"]=w.exports},"331f":function(t,e,r){},3592:function(t,e,r){"use strict";r("f77d")},"9dcd":function(t,e,r){var i;(function(s){"use strict";var n,a=20,c=1,o=1e6,l=1e6,u=-7,d=21,h=!1,f="[big.js] ",v=f+"Invalid ",p=v+"decimal places",m=v+"rounding mode",g=f+"Division by zero",b={},C=void 0,w=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function k(){function t(e){var r=this;if(!(r instanceof t))return e===C?k():new t(e);if(e instanceof t)r.s=e.s,r.e=e.e,r.c=e.c.slice();else{if("string"!==typeof e){if(!0===t.strict)throw TypeError(v+"number");e=0===e&&1/e<0?"-0":String(e)}_(r,e)}r.constructor=t}return t.prototype=b,t.DP=a,t.RM=c,t.NE=u,t.PE=d,t.strict=h,t.roundDown=0,t.roundHalfUp=1,t.roundHalfEven=2,t.roundUp=3,t}function _(t,e){var r,i,s;if(!w.test(e))throw Error(v+"number");for(t.s="-"==e.charAt(0)?(e=e.slice(1),-1):1,(r=e.indexOf("."))>-1&&(e=e.replace(".","")),(i=e.search(/e/i))>0?(r<0&&(r=i),r+=+e.slice(i+1),e=e.substring(0,i)):r<0&&(r=e.length),s=e.length,i=0;i<s&&"0"==e.charAt(i);)++i;if(i==s)t.c=[t.e=0];else{for(;s>0&&"0"==e.charAt(--s););for(t.e=r-i-1,t.c=[],r=0;i<=s;)t.c[r++]=+e.charAt(i++)}return t}function L(t,e,r,i){var s=t.c;if(r===C&&(r=t.constructor.RM),0!==r&&1!==r&&2!==r&&3!==r)throw Error(m);if(e<1)i=3===r&&(i||!!s[0])||0===e&&(1===r&&s[0]>=5||2===r&&(s[0]>5||5===s[0]&&(i||s[1]!==C))),s.length=1,i?(t.e=t.e-e+1,s[0]=1):s[0]=t.e=0;else if(e<s.length){if(i=1===r&&s[e]>=5||2===r&&(s[e]>5||5===s[e]&&(i||s[e+1]!==C||1&s[e-1]))||3===r&&(i||!!s[0]),s.length=e--,i)for(;++s[e]>9;)s[e]=0,e--||(++t.e,s.unshift(1));for(e=s.length;!s[--e];)s.pop()}return t}function y(t,e,r){var i=t.e,s=t.c.join(""),n=s.length;if(e)s=s.charAt(0)+(n>1?"."+s.slice(1):"")+(i<0?"e":"e+")+i;else if(i<0){for(;++i;)s="0"+s;s="0."+s}else if(i>0)if(++i>n)for(i-=n;i--;)s+="0";else i<n&&(s=s.slice(0,i)+"."+s.slice(i));else n>1&&(s=s.charAt(0)+"."+s.slice(1));return t.s<0&&r?"-"+s:s}b.abs=function(){var t=new this.constructor(this);return t.s=1,t},b.cmp=function(t){var e,r=this,i=r.c,s=(t=new r.constructor(t)).c,n=r.s,a=t.s,c=r.e,o=t.e;if(!i[0]||!s[0])return i[0]?n:s[0]?-a:0;if(n!=a)return n;if(e=n<0,c!=o)return c>o^e?1:-1;for(a=(c=i.length)<(o=s.length)?c:o,n=-1;++n<a;)if(i[n]!=s[n])return i[n]>s[n]^e?1:-1;return c==o?0:c>o^e?1:-1},b.div=function(t){var e=this,r=e.constructor,i=e.c,s=(t=new r(t)).c,n=e.s==t.s?1:-1,a=r.DP;if(a!==~~a||a<0||a>o)throw Error(p);if(!s[0])throw Error(g);if(!i[0])return t.s=n,t.c=[t.e=0],t;var c,l,u,d,h,f=s.slice(),v=c=s.length,m=i.length,b=i.slice(0,c),w=b.length,k=t,_=k.c=[],y=0,O=a+(k.e=e.e-t.e)+1;for(k.s=n,n=O<0?0:O,f.unshift(0);w++<c;)b.push(0);do{for(u=0;u<10;u++){if(c!=(w=b.length))d=c>w?1:-1;else for(h=-1,d=0;++h<c;)if(s[h]!=b[h]){d=s[h]>b[h]?1:-1;break}if(!(d<0))break;for(l=w==c?s:f;w;){if(b[--w]<l[w]){for(h=w;h&&!b[--h];)b[h]=9;--b[h],b[w]+=10}b[w]-=l[w]}for(;!b[0];)b.shift()}_[y++]=d?u:++u,b[0]&&d?b[w]=i[v]||0:b=[i[v]]}while((v++<m||b[0]!==C)&&n--);return _[0]||1==y||(_.shift(),k.e--,O--),y>O&&L(k,O,r.RM,b[0]!==C),k},b.eq=function(t){return 0===this.cmp(t)},b.gt=function(t){return this.cmp(t)>0},b.gte=function(t){return this.cmp(t)>-1},b.lt=function(t){return this.cmp(t)<0},b.lte=function(t){return this.cmp(t)<1},b.minus=b.sub=function(t){var e,r,i,s,n=this,a=n.constructor,c=n.s,o=(t=new a(t)).s;if(c!=o)return t.s=-o,n.plus(t);var l=n.c.slice(),u=n.e,d=t.c,h=t.e;if(!l[0]||!d[0])return d[0]?t.s=-o:l[0]?t=new a(n):t.s=1,t;if(c=u-h){for((s=c<0)?(c=-c,i=l):(h=u,i=d),i.reverse(),o=c;o--;)i.push(0);i.reverse()}else for(r=((s=l.length<d.length)?l:d).length,c=o=0;o<r;o++)if(l[o]!=d[o]){s=l[o]<d[o];break}if(s&&(i=l,l=d,d=i,t.s=-t.s),(o=(r=d.length)-(e=l.length))>0)for(;o--;)l[e++]=0;for(o=e;r>c;){if(l[--r]<d[r]){for(e=r;e&&!l[--e];)l[e]=9;--l[e],l[r]+=10}l[r]-=d[r]}for(;0===l[--o];)l.pop();for(;0===l[0];)l.shift(),--h;return l[0]||(t.s=1,l=[h=0]),t.c=l,t.e=h,t},b.mod=function(t){var e,r=this,i=r.constructor,s=r.s,n=(t=new i(t)).s;if(!t.c[0])throw Error(g);return r.s=t.s=1,e=1==t.cmp(r),r.s=s,t.s=n,e?new i(r):(s=i.DP,n=i.RM,i.DP=i.RM=0,r=r.div(t),i.DP=s,i.RM=n,this.minus(r.times(t)))},b.plus=b.add=function(t){var e,r,i,s=this,n=s.constructor;if(t=new n(t),s.s!=t.s)return t.s=-t.s,s.minus(t);var a=s.e,c=s.c,o=t.e,l=t.c;if(!c[0]||!l[0])return l[0]||(c[0]?t=new n(s):t.s=s.s),t;if(c=c.slice(),e=a-o){for(e>0?(o=a,i=l):(e=-e,i=c),i.reverse();e--;)i.push(0);i.reverse()}for(c.length-l.length<0&&(i=l,l=c,c=i),e=l.length,r=0;e;c[e]%=10)r=(c[--e]=c[e]+l[e]+r)/10|0;for(r&&(c.unshift(r),++o),e=c.length;0===c[--e];)c.pop();return t.c=c,t.e=o,t},b.pow=function(t){var e=this,r=new e.constructor("1"),i=r,s=t<0;if(t!==~~t||t<-l||t>l)throw Error(v+"exponent");for(s&&(t=-t);;){if(1&t&&(i=i.times(e)),t>>=1,!t)break;e=e.times(e)}return s?r.div(i):i},b.prec=function(t,e){if(t!==~~t||t<1||t>o)throw Error(v+"precision");return L(new this.constructor(this),t,e)},b.round=function(t,e){if(t===C)t=0;else if(t!==~~t||t<-o||t>o)throw Error(p);return L(new this.constructor(this),t+this.e+1,e)},b.sqrt=function(){var t,e,r,i=this,s=i.constructor,n=i.s,a=i.e,c=new s("0.5");if(!i.c[0])return new s(i);if(n<0)throw Error(f+"No square root");n=Math.sqrt(i+""),0===n||n===1/0?(e=i.c.join(""),e.length+a&1||(e+="0"),n=Math.sqrt(e),a=((a+1)/2|0)-(a<0||1&a),t=new s((n==1/0?"5e":(n=n.toExponential()).slice(0,n.indexOf("e")+1))+a)):t=new s(n+""),a=t.e+(s.DP+=4);do{r=t,t=c.times(r.plus(i.div(r)))}while(r.c.slice(0,a).join("")!==t.c.slice(0,a).join(""));return L(t,(s.DP-=4)+t.e+1,s.RM)},b.times=b.mul=function(t){var e,r=this,i=r.constructor,s=r.c,n=(t=new i(t)).c,a=s.length,c=n.length,o=r.e,l=t.e;if(t.s=r.s==t.s?1:-1,!s[0]||!n[0])return t.c=[t.e=0],t;for(t.e=o+l,a<c&&(e=s,s=n,n=e,l=a,a=c,c=l),e=new Array(l=a+c);l--;)e[l]=0;for(o=c;o--;){for(c=0,l=a+o;l>o;)c=e[l]+n[o]*s[l-o-1]+c,e[l--]=c%10,c=c/10|0;e[l]=c}for(c?++t.e:e.shift(),o=e.length;!e[--o];)e.pop();return t.c=e,t},b.toExponential=function(t,e){var r=this,i=r.c[0];if(t!==C){if(t!==~~t||t<0||t>o)throw Error(p);for(r=L(new r.constructor(r),++t,e);r.c.length<t;)r.c.push(0)}return y(r,!0,!!i)},b.toFixed=function(t,e){var r=this,i=r.c[0];if(t!==C){if(t!==~~t||t<0||t>o)throw Error(p);for(r=L(new r.constructor(r),t+r.e+1,e),t=t+r.e+1;r.c.length<t;)r.c.push(0)}return y(r,!1,!!i)},b.toJSON=b.toString=function(){var t=this,e=t.constructor;return y(t,t.e<=e.NE||t.e>=e.PE,!!t.c[0])},b.toNumber=function(){var t=Number(y(this,!0,!0));if(!0===this.constructor.strict&&!this.eq(t.toString()))throw Error(f+"Imprecise conversion");return t},b.toPrecision=function(t,e){var r=this,i=r.constructor,s=r.c[0];if(t!==C){if(t!==~~t||t<1||t>o)throw Error(v+"precision");for(r=L(new i(r),t,e);r.c.length<t;)r.c.push(0)}return y(r,t<=r.e||r.e<=i.NE||r.e>=i.PE,!!s)},b.valueOf=function(){var t=this,e=t.constructor;if(!0===e.strict)throw Error(f+"valueOf disallowed");return y(t,t.e<=e.NE||t.e>=e.PE,!0)},n=k(),n["default"]=n.Big=n,i=function(){return n}.call(e,r,e,t),void 0===i||(t.exports=i)})()},f644:function(t,e,r){"use strict";r("331f")},f77d:function(t,e,r){}}]);