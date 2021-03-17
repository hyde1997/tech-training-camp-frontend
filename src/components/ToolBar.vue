<template>
  <div class="tool-bar">
    <div class="toolbar-left">
      <!-- 标题 -->
      <div class="headerOptions">
        <span class="drop" title="标题">
          <em class="iconfont logo">&#xe83b;</em></span
        >
        <ul class="lis" id="lis">
          <li
            v-for="(item, index) in headers"
            :key="index"
            @click="SetHeader(item)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <!-- 粗体 -->
      <div class="bold" @click="Bold" title="粗体">
        <em class="iconfont logo">&#xe7f7;</em>
      </div>
      <!-- 斜体 -->
      <div class="italic" @click="Italic" title="斜体">
        <em class="iconfont logo">&#xe7fb;</em>
      </div>
      <!-- 下划线 -->
      <div class="underline" @click="Underline" title="下划线">
        <em class="iconfont logo">&#xe7fa;</em>
      </div>
      <!-- 删除线 -->
      <div class="strike" @click="Strike" title="删除线">
        <em class="iconfont logo">&#xec83;</em>
      </div>
      <!-- 标记 -->
      <div class="mark" @click="Mark" title="分割线">
        <em class="iconfont logo">&#xe824;</em>
      </div>
      <!-- 上标 -->
      <div class="sub" @click="Sub" title="上标">
        <em class="iconfont logo">&#xe791;</em>
      </div>
      <!-- 下标 -->
      <div class="sup" @click="Sup" title="下标">
        <em class="iconfont logo">&#xe73f;</em>
      </div>
      <!-- 有序列表 -->
      <div class="orderedList" @click="orderedList" title="有序列表">
        <em class="iconfont logo"> &#xe7f5;</em>
      </div>
      <!-- 无序列表 -->
      <div class="unorderedList" @click="unorderedList" title="无序列表">
        <em class="iconfont logo">&#xe7f4;</em>
      </div>
      <!-- 任务列表 -->
      <div class="taskList" @click="taskList" title="任务列表">
        <em class="iconfont logo">&#xe732;</em>
      </div>
      <!-- 链接 -->
      <div class="link" @click="Link" title="连接">
        <em class="iconfont logo">&#xe7e2; </em>
      </div>
      <!-- 引用 -->
      <div class="quote" @click="Quote" title="引用">
        <em class="iconfont logo">&#xe67d;</em>
      </div>
      <!-- 图片
      <div class="figure" @click="Figure" title="图片">
        <em>图</em>
      </div>
      表格
      <div class="table" @click="Table" title="表格">
        <em>表</em>
      </div> -->
      <!-- 代码块 -->
      <div class="codeBlock" @click="codeBlock" title="代码块">
        <em class="iconfont logo">&#xe7fc;</em>
      </div>
      <!-- 行内代码 -->
      <div class="inlineCode" @click="inlineCode" title="行内代码">
        <em class="iconfont logo">&#xe69d;</em>
      </div>
    </div>
    <div class="toolbar-right"></div>
  </div>
</template>

<script>
export default {
  name: "ToolBar",
  data() {
    return {
      headers: [
        { name: "H1 一级标题", value: "# " },
        { name: "H2 二级标题", value: "## " },
        { name: "H3 三级标题", value: "### " },
        { name: "H4 四级标题", value: "#### " },
        { name: "H5 五级标题", value: "##### " },
        { name: "H6 六级标题", value: "###### " }
      ]
    };
  },
  // mounted() {
  //   this.obj = this.$refs.editor;
  // },
  methods: {
    SetHeader(item) {
      this.showHeaderOptions = true;
      this.$store.commit("modify", [item.value, ""]);
    },
    Bold() {
      this.$store.commit("modify", ["**", "**"]);
    },
    Italic() {
      this.$store.commit("modify", ["*", "*"]);
    },
    Underline() {
      this.$store.commit("modify", ["<u>", "</u>"]);
    },
    Strike() {
      this.$store.commit("modify", ["~~", "~~"]);
    },
    Mark() {
      this.$store.commit("modify", ["==", "=="]);
    },
    Sub() {
      this.$store.commit("modify", ["^", "^"]);
    },
    Sup() {
      this.$store.commit("modify", ["~", "~"]);
    },
    orderedList() {
      this.$store.commit("modify", ["1. ", "\n"]);
    },
    unorderedList() {
      this.$store.commit("modify", ["* ", "\n"]);
    },
    taskList() {
      this.$store.commit("modify", ["- [ ] ", "\n"]);
    },
    Quote() {
      this.$store.commit("modify", ["> ", "\n"]);
    },
    Figure() {
      this.$store.commit("modify", ["![", "]()"]);
    },
    Link() {
      this.$store.commit("modify", ["[", "]()"]);
    },
    codeBlock() {
      this.$store.commit("modify", ["```\n", "\n```"]);
    },
    inlineCode() {
      this.$store.commit("modify", ["`", "`"]);
    },
    Separate() {
      this.$store.commit("modify", ["\n---", "\n"]);
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: "iconfont";
  src: url("../assets/iconfont/iconfont.eot?t=1615979887164"); /* IE9 */
  src: url("../assets/iconfont/iconfont.eot?t=1615979887164#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff2;charset=utf-8;base64,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")
      format("woff2"),
    url("../assets/iconfont/iconfont.woff?t=1615979887164") format("woff"),
    url("../assets/iconfont/iconfont.ttf?t=1615979887164") format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url("../assets/iconfont/iconfont.svg?t=1615979887164#iconfont")
      format("svg"); /* iOS 4.1- */
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 24px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.tool-bar {
  width: 100%;
  height: 30px;
  background-color: #fafbfc;
}
.toolbar-left {
  float: left;
  position: relative;
  width: 48.5%;
  height: 100%;
  box-sizing: border-box;
  margin-left: 1.5%;
}
.toolbar-left em {
  font-size: 20px;
}
.toolbar-left > div {
  float: left;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-right: 4px;
  cursor: pointer;
}
.toolbar-left > div:hover {
  background-color: #e1e4e8;
}
.headerOptions:hover #lis {
  display: block;
}
#lis {
  display: none;
  position: absolute;
  z-index: 999;
  transform: translate(37px, 137px);
  margin: 0;
  padding: 7px 0;
  border: 2px solid #ccced0;
  border-radius: 6px;
  background-color: #fff;
  list-style: none;
}
.lis > li {
  width: 100px;
  height: 32px;
  text-align: center;
  padding-top: 5px;
  background-color: #fff;
}
.toolbar-right {
  float: right;
  width: 150px;
  height: 100%;
  margin-right: 3%;
}
</style>
