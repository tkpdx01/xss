(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f73c5832"],{"0525":function(t,s,i){t.exports=i.p+"static/img/sprite3.d7e0c9a1.gif"},"1cba":function(t,s,i){t.exports=i.p+"static/img/monster1.5dfc4776.gif"},"1e02":function(t,s,i){t.exports=i.p+"static/img/sprite1.56c3737b.gif"},"48c5":function(t,s,i){t.exports=i.p+"static/img/monster2.76235a9c.gif"},4951:function(t,s,i){t.exports=i.p+"static/img/monster3.15a387ab.gif"},"514e":function(t,s,i){t.exports=i.p+"static/img/monster5.4ddfbdfc.gif"},"64ca":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{class:["page-battle",{battle1:!0}]},[a("Header"),a("div",{staticClass:"icon-back",on:{click:function(s){return t.$router.back()}}}),a("div",{staticClass:"info-meng"},[a("div",{staticClass:"name"},[t._v(t._s(t.$t("battle.index.q6179c")))]),a("van-swipe",{staticClass:"my-swipe11",attrs:{loop:!1,autoplay:t.logTime,"show-indicators":!1,vertical:!0},on:{change:t.onChangeLog}},[a("van-swipe-item",[a("div",{staticClass:"desc"},[t._v(t._s(t.$t("battle.index.tt79cy",{val:10})))])])],1)],1),a("div",{staticClass:"battle-box"},[a("van-swipe",{staticClass:"my-swipe12",attrs:{loop:!1,autoplay:5e3,"show-indicators":!1},on:{change:t.onChangeBattle}},[a("van-swipe-item",[a("img",{attrs:{src:i("1e02"),alt:""}}),a("i",{staticClass:"icon-vs"}),a("img",{attrs:{src:i("1cba"),alt:""}})]),a("van-swipe-item",[a("img",{attrs:{src:i("b54f"),alt:""}}),a("i",{staticClass:"icon-vs"}),a("img",{attrs:{src:i("48c5"),alt:""}})]),a("van-swipe-item",[a("img",{attrs:{src:i("0525"),alt:""}}),a("i",{staticClass:"icon-vs"}),a("img",{attrs:{src:i("4951"),alt:""}})]),a("van-swipe-item",[a("img",{attrs:{src:i("be5d"),alt:""}}),a("i",{staticClass:"icon-vs"}),a("img",{attrs:{src:i("7e24"),alt:""}})]),a("van-swipe-item",[a("img",{attrs:{src:i("6f25"),alt:""}}),a("i",{staticClass:"icon-vs"}),a("img",{attrs:{src:i("514e"),alt:""}})])],1)],1),a("div",{staticClass:"battle-meng"},[a("div",{staticClass:"item"},[a("div",{staticClass:"val"},[t._v(t._s(t.result.cfc||0))]),t._m(0)]),a("div",{staticClass:"item"},[a("div",{staticClass:"val"},[t._v(t._s(t._f("formatNum1")(t.result.seed,3)))]),t._m(1)]),a("div",{staticClass:"item"},[a("div",{staticClass:"val"},[t._v(t._s(t.result.key||0))]),a("div",{staticClass:"key"},[a("i",{staticClass:"icon-key"}),t._v(" "+t._s(t.$t("battle.index.zbswl6")))])])]),a("div",{staticClass:"progress-box"},[a("div",{staticClass:"progress-item pro-me"},[a("div",{staticClass:"pro-info"},[a("div",{staticClass:"name-info"},[a("div",{staticClass:"name"},[t._v(t._s(t.cardInfo.name))]),a("div",{staticClass:"shu"},[a("i",{staticClass:"icon-book2"}),t._v(" "+t._s(t.$t("battle.index.njnp2g"))+"："+t._s(t.cardVal||0))])]),a("div",{staticClass:"a"})]),a("div",{staticClass:"pro-box"},[a("div",{staticClass:"b-item"},[a("i",{staticClass:"icon-neng"}),t._v(" "+t._s(t.$t("battle.index.m6hby4"))+"："+t._s(t.cardInfo.live||0))]),a("div",{staticClass:"b-item"},[a("i",{staticClass:"icon-dun"}),t._v(" "+t._s(t.$t("battle.index.zgea9n"))+"："+t._s(t.cardInfo.defense||0)+" ")]),a("div",{staticClass:"b-item"},[a("i",{staticClass:"icon-jian"}),t._v(" "+t._s(t.$t("battle.index.rl8qno"))+"："+t._s(t.cardInfo.attack||0)+" ")]),a("div",{staticClass:"b-item"},[a("i",{staticClass:"icon-xie"}),t._v(" "+t._s(t.$t("battle.index.z8u2jj"))+"："+t._s(t.cardInfo.agile||0))])])]),a("div",{staticClass:"progress-item pro-other"},[a("div",{staticClass:"pro-info"},[a("div",{staticClass:"name-info"},[a("div",{staticClass:"name"},[t._v(t._s(t.curMonster.name))]),a("div",{staticClass:"shu"},[a("i",{staticClass:"icon-book2"}),t._v(" "+t._s(t.$t("battle.index.njnp2g"))+"："+t._s(t.monsterVal||0))])]),a("div",{staticClass:"a"})]),a("div",{staticClass:"pro-box"},[a("div",{staticClass:"b-item"},[a("i",{staticClass:"icon-neng"}),t._v(" "+t._s(t.$t("battle.index.m6hby4"))+"："+t._s(t.curMonster.live||0)+" ")]),a("div",{staticClass:"b-item"},[a("i",{staticClass:"icon-dun"}),t._v(" "+t._s(t.$t("battle.index.zgea9n"))+"："+t._s(t.curMonster.defense||0)+" ")]),a("div",{staticClass:"b-item"},[a("i",{staticClass:"icon-jian"}),t._v(" "+t._s(t.$t("battle.index.rl8qno"))+"："+t._s(t.curMonster.attack||0)+" ")]),a("div",{staticClass:"b-item"},[a("i",{staticClass:"icon-xie"}),t._v(" "+t._s(t.$t("battle.index.z8u2jj"))+"："+t._s(t.curMonster.agile||0)+" ")])])])]),a("van-dialog",{class:["dialog-battle",{"dialog-success":1===t.battleType},{"dialog-fail":2===t.battleType}],attrs:{closeOnClickOverlay:!0,showConfirmButton:!1},model:{value:t.showResultDialog,callback:function(s){t.showResultDialog=s},expression:"showResultDialog"}},[a("div",{staticClass:"battle-dialog-box"},[a("div",{staticClass:"item"},[a("i",{staticClass:"icon-money"}),t._v(" "+t._s(t.result.seed)+" SEED")]),a("div",{staticClass:"item"},[a("i",{staticClass:"icon-money"}),t._v(" "+t._s(t.result.cfc)+" GROK")]),a("div",{staticClass:"item"},[a("i",{staticClass:"icon-key"}),t._v(" "+t._s(t.result.key))])]),a("div",{staticClass:"button",on:{click:function(s){return t.$router.back()}}},[t._v(t._s(t.$t("battle.index.t48cyx")))])])],1)},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"key"},[i("i",{staticClass:"icon-money"}),t._v(" GROK")])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"key"},[i("i",{staticClass:"icon-money"}),t._v(" SEED")])}],n=i("0418"),c={components:{Header:n["a"]},data:function(){return{logTime:3e3,stepTime:1e4,showResultDialog:!1,battleType:0,cardInfo:{},monsters:[],curMonster:{},logs:[],timer:null,result:{},monsterVal:"",cardVal:""}},beforeDestroy:function(){clearTimeout(this.timer)},mounted:function(){var t,s,i,a=JSON.parse(localStorage.getItem("combatResult"));this.cardInfo=(null===a||void 0===a?void 0:a.cardInfo)||{},this.cardVal=null===a||void 0===a||null===(t=a.cardInfo)||void 0===t?void 0:t.total,this.monsters=(null===a||void 0===a?void 0:a.monsters)||[],this.curMonster=(null===a||void 0===a?void 0:a.monsters[0])||[],this.monsterVal=null===(s=this.curMonster)||void 0===s?void 0:s.total,this.logs=(null===(i=this.curMonster)||void 0===i?void 0:i.log)||[],this.stepTime=this.logs.length*this.logTime,this.result=a.result},methods:{onChangeBattle:function(t){},onChangeLog:function(t){var s=this.logs[t];1===s.type?this.monsterVal=this.monsterVal-s.value:4===s.type&&(this.cardVal=this.cardVal-s.value)},showDialog:function(){var t=this;this.timer=setTimeout((function(){t.result.status?t.battleType=1:t.battleType=2,t.showResultDialog=!0}),this.stepTime)},rendType:function(t){switch(t){case 1:return this.$t("battle.index.3z2pwh");case 2:return this.$t("battle.index.30bcbp");case 3:return"".concat(this.$t("battle.index.30nlpv")," Miss");case 4:return this.$t("battle.index.3tziy1");case 5:return this.$t("battle.index.2xr6vi");case 6:return"".concat(this.$t("battle.index.u00an9")," miss")}}}},l=c,o=(i("f1b9"),i("2877")),r=Object(o["a"])(l,a,e,!1,null,null,null);s["default"]=r.exports},"6f25":function(t,s,i){t.exports=i.p+"static/img/sprite5.0d6febb4.gif"},"7e24":function(t,s,i){t.exports=i.p+"static/img/monster4.5cacb69c.gif"},b54f:function(t,s,i){t.exports=i.p+"static/img/sprite2.78312a29.gif"},be5d:function(t,s,i){t.exports=i.p+"static/img/sprite4.74d57961.gif"},e109:function(t,s,i){},f1b9:function(t,s,i){"use strict";i("e109")}}]);