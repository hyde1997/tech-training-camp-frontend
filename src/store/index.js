import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// var md = require("markdown-it")();
import presetText from "../assets/presetText";

export default new Vuex.Store({
  state: {
    htmltext: presetText,
    editor: null
  },
  mutations: {
    update(state, newText) {
      state.htmltext = newText;
    },
    updateObj(state, obj) {
      state.editor = obj;
      // console.log(state.editor);
    },
    changeSelectedText(state, markString) {
      let t = state.editor;
      console.log(t);
      // t.focus(); // markdownit项目
      if (window.getSelection) {
        if (t.selectionStart != undefined && t.selectionEnd != undefined) {
          //str2为鼠标选中的文本，str1和str3为其前后的文本
          let str1 = t.value.substring(0, t.selectionStart);
          let str2 = t.value.substring(t.selectionStart, t.selectionEnd);
          let str3 = t.value.substring(t.selectionEnd);

          let result = str1 + markString[0] + str2 + markString[1] + str3;
          t.value = result;
          state.htmltext = t.value;
        }
      }
    }
  },
  getters: {
    // convert(state) {
    //   let newText = md.render(state.htmltext);
    //   return newText;
    // }
  },
  actions: {},
  modules: {}
});
