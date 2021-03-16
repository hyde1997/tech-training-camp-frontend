<template>
  <!-- 展示区 -->
  <div class="display">
    <p class="show" v-html="convert"></p>
  </div>
</template>

<script>
// import marked from "marked"; //将mardown转成HTML的库
var md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true
});

export default {
  name: "DisplayArea",
  data() {
    return {};
  },
  // methods: {
  //   //内联JS语句
  //   Bold() {
  //     //粗体
  //     this.changeSelectedText("**", "**");
  //   },
  //   Italic() {
  //     //斜体
  //     this.changeSelectedText("*", "*");
  //   },
  //   Underline() {
  //     //下划线
  //     this.changeSelectedText("<u>", "</u>");
  //   },
  //   Strike() {
  //     //中划线
  //     this.changeSelectedText("~~", "~~");
  //   },
  //   H1_title() {
  //     //一级标题
  //     this.changeSelectedText("# ", "\n");
  //   },
  //   H2_title() {
  //     //二级标题
  //     this.changeSelectedText("## ", "\n");
  //   },
  //   H3_title() {
  //     //三级标题
  //     this.changeSelectedText("### ", "\n");
  //   },
  //   unordered_list() {
  //     //无序列表
  //     this.changeSelectedText("* ", "\n");
  //   },
  //   ordered_list() {
  //     //有序列表
  //     this.changeSelectedText("1. ", "\n");
  //   },
  //   figure() {
  //     //插入图片
  //     this.changeSelectedText("![", "]()");
  //   },
  //   link() {
  //     //插入超链接
  //     this.changeSelectedText("[", "]()");
  //   },
  //   quote() {
  //     //引用
  //     this.changeSelectedText("> ", "\n");
  //   },
  //   code() {
  //     //插入代码块
  //     this.changeSelectedText("```\n", "\n```");
  //   },
  //   inline_code() {
  //     //文本中插入代码(内联)
  //     this.changeSelectedText("`", "`");
  //   },
  //   separate() {
  //     //添加分割线
  //     this.changeSelectedText("\n---", "\n");
  //   },
  //   changeSelectedText(startString, endString) {
  //     let t = this.$refs.editor;
  //     if (window.getSelection) {
  //       if (t.selectionStart != undefined && t.selectionEnd != undefined) {
  //         //str2为鼠标选中的文本，str1和str3为其前后的文本
  //         let str1 = t.value.substring(0, t.selectionStart);
  //         let str2 = t.value.substring(t.selectionStart, t.selectionEnd);
  //         let str3 = t.value.substring(t.selectionEnd);

  //         let result = str1 + startString + str2 + endString + str3;
  //         t.innerText = result;
  //         this.$store.state.htmltext = t.innerText;
  //       }
  //     }
  //   }
  // },
  computed: {
    convert() {
      // marked.setOptions({
      //   renderer: new marked.Renderer(),
      //   gfm: true,
      //   tables: true,
      //   breaks: true,
      //   pedantic: false,
      //   sanitize: false,
      //   smartLists: true,
      //   smartypants: false
      // });
      // let newText = marked(this.$store.state.htmltext);
      let newText = md.render(this.$store.state.htmltext);
      //调用marked函数将mardown文件转成HTML
      return newText;
    }
  }
};
</script>

<style scoped>
.display {
  float: right;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  background-color: #ffffff;
}
.show {
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(-16px);
  box-sizing: border-box;
  margin: 0 auto;
  padding: 3% 5%;
  outline: none;
  word-wrap: break-word;
}
/* 滚动条设置 */
.display::-webkit-scrollbar {
  width: 4px;
  height: 2px;
  background: #e1e4e8;
  border-radius: 2px; /*外层轨道*/
}
.display::-webkit-scrollbar-thumb {
  display: block;
  width: 2px;
  margin: 0 auto;
  border-radius: 2px;
  background: #c9cdd4; /*内层轨道*/
}
</style>
