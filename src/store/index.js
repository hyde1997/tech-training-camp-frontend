import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import presetText from "../assets/presetText";

export default new Vuex.Store({
  state: {
    htmltext: presetText,
    editor: null,
    displayText: ""
  },
  mutations: {
    update(state, newText) {
      state.htmltext = newText;
    },
    updateObj(state, obj) {
      state.editor = obj;
      // console.log(state.editor);
    },
    highlight(state, str) {
      state.displayText = str;
    },
    modify(state, markString) {
      let obj = state.editor;
      // console.log(obj);
      // obj.focus(); // markdownit项目
      if (window.getSelection) {
        if (obj.selectionStart != undefined && obj.selectionEnd != undefined) {
          //middle为鼠标选中的文本，head和tail为其前后的文本
          let head = obj.value.substring(0, obj.selectionStart);
          let middle = obj.value.substring(
            obj.selectionStart,
            obj.selectionEnd
          );
          let tail = obj.value.substring(obj.selectionEnd);

          let result = head + markString[0] + middle + markString[1] + tail;
          obj.value = result;
          state.htmltext = obj.value;
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
