(function(t){function e(e){for(var i,a,r=e[0],c=e[1],l=e[2],f=0,d=[];f<r.length;f++)a=r[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},s=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("446e")},"2c2e":function(t,e,n){},3650:function(t,e,n){"use strict";n("ffbe")},"3dc0":function(t,e,n){"use strict";n("9077")},"3ffb":function(t,e,n){},"446e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("editor-main")],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"editor-main"}},[n("h2",{staticClass:"title"},[t._v("tech-training-camp-frontend")]),n("div",{staticClass:"border"},[n("tool-bar"),n("container"),n("footer-bar")],1)])},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("edit-area"),n("display-area")],1)},l=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"edit"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],ref:"editor",staticClass:"markArea",domProps:{value:t.text},on:{input:[function(e){e.target.composing||(t.text=e.target.value)},function(e){t.updateData(),t.updateObj()}]}})])},f=[],d={name:"EditArea",data:function(){return{text:this.$store.state.htmltext,obj:this.$refs.editor}},mounted:function(){this.obj=this.$refs.editor},methods:{updateData:function(){var t=this.$refs.editor.value;this.$store.commit("update",t)},updateObj:function(){this.$store.commit("updateObj",this.obj)}}},m=d,v=(n("a899"),n("0c7c")),p=Object(v["a"])(m,u,f,!1,null,"08580a11",null),h=p.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"display"},[n("p",{staticClass:"show",domProps:{innerHTML:t._s(t.convert)}})])},C=[],g=(n("159b"),n("1487")),_=n.n(g),y=(n("7437"),function(){var t=document.querySelectorAll("pre code");t.forEach((function(t){_.a.highlightBlock(t)}))}),k=n("362d"),$=n("54f6"),x=n("7ba6"),O=n("5121"),j=n("e6f9"),S=n("cf2b"),w=n("4bb9"),E=n("be03"),L=n("2d46"),H=n("5316"),B=n("d4cd")({html:!0,linkify:!0,typographer:!0}).use(k).use(x).use($).use(O).use(j).use(S).use(w).use(H).use(E).use(L),M={name:"DisplayArea",data:function(){return{}},computed:{convert:function(){var t=B.render(this.$store.state.htmltext);return t}},mounted:function(){y()},updated:function(){y()}},P=M,T=(n("3dc0"),Object(v["a"])(P,b,C,!1,null,null,null)),A=T.exports,D={name:"Container",components:{EditArea:h,DisplayArea:A}},X=D,q=(n("c8d9"),Object(v["a"])(X,c,l,!1,null,"1b2e8f94",null)),F=q.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tool-bar"},[n("div",{staticClass:"toolbar-left"},[n("div",{staticClass:"headerOptions"},[t._m(0),n("ul",{staticClass:"lis",attrs:{id:"lis"}},t._l(t.headers,(function(e,i){return n("li",{key:i,on:{click:function(n){return t.SetHeader(e)}}},[t._v(" "+t._s(e.name)+" ")])})),0)]),n("div",{staticClass:"bold",attrs:{title:"粗体"},on:{click:t.Bold}},[n("em",{staticClass:"iconfont logo"},[t._v("")])]),n("div",{staticClass:"italic",attrs:{title:"斜体"},on:{click:t.Italic}},[n("em",{staticClass:"iconfont logo"},[t._v("")])]),n("div",{staticClass:"underline",attrs:{title:"下划线"},on:{click:t.Underline}},[n("em",{staticClass:"iconfont logo"},[t._v("")])]),n("div",{staticClass:"strike",attrs:{title:"删除线"},on:{click:t.Strike}},[n("em",{staticClass:"iconfont logo"},[t._v("")])]),n("div",{staticClass:"mark",attrs:{title:"分割线"},on:{click:t.Mark}},[n("em",{staticClass:"iconfont logo"},[t._v("")])]),n("div",{staticClass:"sub",attrs:{title:"上标"},on:{click:t.Sub}},[n("em",{staticClass:"iconfont logo"},[t._v("")])]),n("div",{staticClass:"sup",attrs:{title:"下标"},on:{click:t.Sup}},[n("em",{staticClass:"iconfont logo"},[t._v("")])]),n("div",{staticClass:"orderedList",attrs:{title:"有序列表"},on:{click:t.orderedList}},[n("em",{staticClass:"iconfont logo"},[t._v(" ")])]),n("div",{staticClass:"unorderedList",attrs:{title:"无序列表"},on:{click:t.unorderedList}},[n("em",{staticClass:"iconfont logo"},[t._v("")])]),n("div",{staticClass:"taskList",attrs:{title:"任务列表"},on:{click:t.taskList}},[n("em",{staticClass:"iconfont logo"},[t._v("")])]),n("div",{staticClass:"link",attrs:{title:"连接"},on:{click:t.Link}},[n("em",{staticClass:"iconfont logo"},[t._v(" ")])]),n("div",{staticClass:"quote",attrs:{title:"引用"},on:{click:t.Quote}},[n("em",{staticClass:"iconfont logo"},[t._v("")])]),n("div",{staticClass:"codeBlock",attrs:{title:"代码块"},on:{click:t.codeBlock}},[n("em",{staticClass:"iconfont logo"},[t._v("")])]),n("div",{staticClass:"inlineCode",attrs:{title:"行内代码"},on:{click:t.inlineCode}},[n("em",{staticClass:"iconfont logo"},[t._v("")])])]),n("div",{staticClass:"toolbar-right"})])},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"drop",attrs:{title:"标题"}},[n("em",{staticClass:"iconfont logo"},[t._v("")])])}],Q={name:"ToolBar",data:function(){return{headers:[{name:"H1 一级标题",value:"# "},{name:"H2 二级标题",value:"## "},{name:"H3 三级标题",value:"### "},{name:"H4 四级标题",value:"#### "},{name:"H5 五级标题",value:"##### "},{name:"H6 六级标题",value:"###### "}]}},methods:{SetHeader:function(t){this.showHeaderOptions=!0,this.$store.commit("modify",[t.value,""])},Bold:function(){this.$store.commit("modify",["**","**"])},Italic:function(){this.$store.commit("modify",["*","*"])},Underline:function(){this.$store.commit("modify",["<u>","</u>"])},Strike:function(){this.$store.commit("modify",["~~","~~"])},Mark:function(){this.$store.commit("modify",["==","=="])},Sub:function(){this.$store.commit("modify",["^","^"])},Sup:function(){this.$store.commit("modify",["~","~"])},orderedList:function(){this.$store.commit("modify",["1. ","\n"])},unorderedList:function(){this.$store.commit("modify",["* ","\n"])},taskList:function(){this.$store.commit("modify",["- [ ] ","\n"])},Quote:function(){this.$store.commit("modify",["> ","\n"])},Figure:function(){this.$store.commit("modify",["![","]()"])},Link:function(){this.$store.commit("modify",["[","]()"])},codeBlock:function(){this.$store.commit("modify",["```\n","\n```"])},inlineCode:function(){this.$store.commit("modify",["`","`"])},Separate:function(){this.$store.commit("modify",["\n---","\n"])}}},U=Q,N=(n("3650"),Object(v["a"])(U,I,J,!1,null,"068f6f02",null)),z=N.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"foot"},[n("span",[t._v("字数："+t._s(this.$store.state.htmltext.length)+" 行数："+t._s(this.$store.state.htmltext.split("\n").length))])])])},K=[],R={name:"Footer"},V=R,W=(n("fa98"),Object(v["a"])(V,G,K,!1,null,"4626520e",null)),Y=W.exports,Z={name:"editorMain",components:{ToolBar:z,Container:F,FooterBar:Y}},tt=Z,et=(n("e2cc0"),Object(v["a"])(tt,a,r,!1,null,"441c0ae3",null)),nt=et.exports,it={name:"app",components:{EditorMain:nt}},ot=it,st=(n("034f"),Object(v["a"])(ot,o,s,!1,null,null,null)),at=st.exports,rt=n("2f62"),ct="@[toc](目录)\n\n---\n\n> # 辛弃疾\n\n> `辛弃疾` *（1140年5月28日－1207年10月3日）*，~~原字坦夫~~，后改字**幼安**，号**稼轩**。\n\n> 南宋<u>豪放派词人</u>、将领，有 ==“词中之龙”== 之称。\n\n> 与苏轼合称“苏辛”，与李清照并称“济南二安”。\n\n# 人物介绍\n|人物生平|词文|历史评价|轶事典故|\n|---|---|---|---|\n|早年侠义|《水龙吟》|子之诗则未也；当以词名家|义斩义端|\n|起义反金|《水调歌头》|大材小用古所叹，管仲萧何实流亚|名士相会|\n|步入仕途|《去国帖》|辛弃疾知大义而归宋|哭祭朱熹|\n|人生起落|《菩萨蛮》|君子观弃疾之事，不可谓宋无人矣||\n|壮志未酬|《破阵子》|词至此亦足矣||\n\n\n# Code\n```javascript\nconst quickSort = nums => { \n  partition\n}\n```\n\n# TODO\n- [X] 基础工具栏\n- [X] 样式美化\n- [X] 快捷键\n- [X] highlight 样式引用（*）\n- [ ] 图片上传回调配置\n- [ ] 图片粘贴上传\n- [ ] 图片拖拽上传\n- [ ] 同步滚动(暂时按滚动条高度计算**)\n",lt=ct;i["a"].use(rt["a"]);var ut=new rt["a"].Store({state:{htmltext:lt,editor:null,displayText:""},mutations:{update:function(t,e){t.htmltext=e},updateObj:function(t,e){t.editor=e},highlight:function(t,e){t.displayText=e},modify:function(t,e){var n=t.editor;if(window.getSelection&&void 0!=n.selectionStart&&void 0!=n.selectionEnd){var i=n.value.substring(0,n.selectionStart),o=n.value.substring(n.selectionStart,n.selectionEnd),s=n.value.substring(n.selectionEnd),a=i+e[0]+o+e[1]+s;n.value=a,t.htmltext=n.value}}},getters:{},actions:{},modules:{}});i["a"].config.productionTip=!1,new i["a"]({store:ut,render:function(t){return t(at)}}).$mount("#app")},"5d01":function(t,e,n){},9077:function(t,e,n){},"97fc":function(t,e,n){},a899:function(t,e,n){"use strict";n("97fc")},c8d9:function(t,e,n){"use strict";n("5d01")},e2cc0:function(t,e,n){"use strict";n("3ffb")},fa98:function(t,e,n){"use strict";n("2c2e")},ffbe:function(t,e,n){}});
//# sourceMappingURL=app.4960c801.js.map