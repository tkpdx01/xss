(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54b78113"],{e52f:function(t,e,a){"use strict";a("efce")},efce:function(t,e,a){},f935:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-common-record page-battle-recrod"},[a("Header"),a("div",{staticClass:"icon-back",on:{click:function(e){return t.$router.back()}}}),a("div",{staticClass:"record-title"},[t._v(t._s(t.$t("battle.battleRecord.ir11rl")))]),a("div",{staticClass:"row"},[a("div",{staticClass:"item"},[a("div",{staticClass:"val"},[t._v(t._s(t.recordObj.totalCfc))]),t._m(0)]),a("div",{staticClass:"item"},[a("div",{staticClass:"val"},[t._v(t._s(t.recordObj.totalSeed))]),t._m(1)]),a("div",{staticClass:"item"},[a("div",{staticClass:"val"},[t._v(t._s(t.recordObj.totalKey))]),a("div",{staticClass:"key"},[a("i",{staticClass:"icon-key"}),t._v(t._s(t.$t("battle.battleRecord.b6kav2")))])])]),a("div",{staticClass:"tc"},[a("van-button",{attrs:{type:"warn"},on:{click:t.onRevice}},[t._v(t._s(t.$t("battle.battleRecord.142pgm")))])],1),t.recordList.length>0?a("div",{staticClass:"record-list"},t._l(t.recordList,(function(e){return a("div",{key:e.id,staticClass:"record-item"},[1===e.status?a("div",{staticClass:"img-success"},[a("span",[t._v(t._s(t.$t("battle.battleRecord.ojf8tj")))])]):t._e(),2===e.status?a("div",{staticClass:"img-fail"},[a("span",[t._v(t._s(t.$t("battle.battleRecord.5moyex")))])]):t._e(),a("div",{staticClass:"border-0"},[a("div",{staticClass:"item-row"},[a("img",{staticClass:"card-img",attrs:{src:e.image,alt:""}}),a("div",{staticClass:"info"},[a("van-cell",{attrs:{title:e.sceneName}}),a("van-cell",{attrs:{title:e.name}}),a("van-cell",{attrs:{title:"NFT ID："+e.token_id}})],1),e.receive_status?t._e():a("van-button",{attrs:{type:"warn"},on:{click:function(a){return t.onRevice(e)}}},[t._v(t._s(t.$t("battle.battleRecord.w0w0fg")))]),e.receive_status?a("van-button",{attrs:{type:"warn",disabled:""}},[t._v(t._s(t.$t("battle.battleRecord.umk8ux")))]):t._e()],1),a("p",[t._v(t._s(t.$t("battle.battleRecord.71obwi"))+t._s(e.monster_text))]),a("p",[t._v(t._s(t.$t("battle.battleRecord.tmzoof"))+t._s(e.cfc)+" GROK/ "+t._s(e.seed)+"SEED/ "+t._s(t.$t("battle.battleRecord.b6kav2"))+t._s(e.key))])])])})),0):a("van-empty")],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"key"},[a("i",{staticClass:"icon-money"}),t._v("GROK")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"key"},[a("i",{staticClass:"icon-money"}),t._v("SEED")])}],i=a("1da1"),r=a("5530"),n=(a("96cf"),a("d81d"),a("b0c0"),a("0418")),o=a("2f62"),l=a("4ec3"),d={components:{Header:n["a"]},data:function(){return{recordObj:{},recordList:[]}},watch:{"$i18n.locale":function(){}},mounted:function(){this.getData()},computed:Object(r["a"])({},Object(o["b"])(["userInfo"])),methods:{getData:function(){var t=this,e=this.$toast.loading();Object(l["combatLog"])({page:1,size:100}).then((function(a){t.recordObj=a.data,t.recordList=a.data.list.map((function(t){return Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},t),t.card),t.card.card),{},{id:t.id,sceneName:t.scene.name})})),e.clear()}))},onRevice:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s,c,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=e.$toast.loading(),c={},t&&t.id?(c.type=1,c.id=t.id):c.type=2,a.next=5,Object(l["combatReceive"])(c);case 5:i=a.sent,s.clear(),200===i.code?(e.$toast("领取成功"),e.getData()):e.$toast(i.msg);case 8:case"end":return a.stop()}}),a)})))()},rendTribeType:function(t){switch(t){case 1:return this.$t("battle.battleRecord.ohdn4u");case 2:return this.$t("battle.battleRecord.i0dn2a");default:break}}}},v=d,b=(a("e52f"),a("2877")),u=Object(b["a"])(v,s,c,!1,null,null,null);e["default"]=u.exports}}]);