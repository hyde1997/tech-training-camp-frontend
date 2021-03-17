<template>
  <!-- 展示区 -->
  <div class="display">
    <p class="show" v-html="convert"></p>
  </div>
</template>

<script>
import hljs from "highlight.js";
import "highlight.js/styles/an-old-hope.css";

// 代码高亮
const highlightCode = () => {
  const block = document.querySelectorAll("pre code");
  // console.log(block);
  block.forEach(el => {
    hljs.highlightBlock(el);
  });
};

const emoji = require("markdown-it-emoji");
// 下标
const sub = require("markdown-it-sub");
// 上标
const sup = require("markdown-it-sup");
// 缩写<abbr/>
const abbr = require("markdown-it-abbr");
// 脚注footnote
const footnote = require("markdown-it-footnote");
// 下划线
const insert = require("markdown-it-ins");
// mark
const mark = require("markdown-it-mark");
// taskLists
const taskLists = require("markdown-it-task-lists");
//
const toc = require("markdown-it-toc");
//图片预览
const miip = require("markdown-it-images-preview");

var md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true
})
  .use(emoji)
  .use(sup)
  .use(sub)
  .use(abbr)
  .use(footnote)
  .use(insert)
  .use(mark)
  .use(miip)
  .use(taskLists)
  .use(toc);

export default {
  name: "DisplayArea",
  data() {
    return {};
  },
  computed: {
    convert() {
      let newText = md.render(this.$store.state.htmltext);
      // console.log(newText);
      return newText;
    }
  },
  mounted() {
    highlightCode();
  },
  updated() {
    highlightCode();
  }
};
</script>

<style>
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

/* 行内代码块样式 */
code {
  margin: 5px;
  padding: 3px;
  border-radius: 5px;
  color: rgb(255, 81, 162);
  background-color: rgb(245, 245, 245);
}
/* 引用样式 */
blockquote {
  margin-left: 1em;
  padding: 1px 5px 1px 15px;
  border-left: 6px solid #46bba9;
  border-radius: 5px;
  background-color: #f6f6f6;
  color: #000;
  line-height: 1.5rem;
}
/* 表格样式 */
table {
  width: 100%; /*表格宽度*/
  max-width: 65em; /*表格最大宽度，避免表格过宽*/
  border: 1px solid #dedede; /*表格外边框设置*/
  margin: 15px auto; /*外边距*/
  border-collapse: collapse; /*使用单一线条的边框*/
  empty-cells: show; /*单元格无内容依旧绘制边框*/
}
table th,
table td {
  height: 35px; /*统一每一行的默认高度*/
  border: 1px solid #dedede; /*内部边框样式*/
  padding: 0 10px; /*内边距*/
}
table th {
  font-weight: bold; /*加粗*/
  text-align: center !important; /*内容居中，加上 !important 避免被 Markdown 样式覆盖*/
  background: rgba(158, 188, 226, 0.2); /*背景色*/
}
table tbody tr:nth-child(2n) {
  background: rgba(158, 188, 226, 0.12);
}
table tr:hover {
  background: #efefef;
}
</style>
