<template>
  <div class="tool-bar">
    <div class="toolbar-left">
      左侧编辑工具栏
      <b class="bold" @click="Bold" title="粗体">BBB</b>
    </div>
    <div class="toolbar-right">右侧视图工具栏</div>
  </div>
</template>

<script>
export default {
  name: "ToolBar",
  data() {
    return {};
  },
  // mounted() {
  //   this.obj = this.$refs.editor;
  // },
  methods: {
    //内联JS语句
    // Bold() {
    //   //粗体
    //   this.$store.getters.changeSelectedText("**", "**");
    //   console.log(11);
    // },
    // updateObj() {
    //   this.$store.commit("updateObj", this.obj);
    // },
    Bold() {
      this.$store.commit("changeSelectedText", ["**", "**"]);
    },
    Italic() {
      //斜体
      this.changeSelectedText("*", "*");
    },
    Underline() {
      //下划线
      this.changeSelectedText("<u>", "</u>");
    },
    Strike() {
      //中划线
      this.changeSelectedText("~~", "~~");
    },
    H1_title() {
      //一级标题
      this.changeSelectedText("# ", "\n");
    },
    H2_title() {
      //二级标题
      this.changeSelectedText("## ", "\n");
    },
    H3_title() {
      //三级标题
      this.changeSelectedText("### ", "\n");
    },
    unordered_list() {
      //无序列表
      this.changeSelectedText("* ", "\n");
    },
    ordered_list() {
      //有序列表
      this.changeSelectedText("1. ", "\n");
    },
    figure() {
      //插入图片
      this.changeSelectedText("![", "]()");
    },
    link() {
      //插入超链接
      this.changeSelectedText("[", "]()");
    },
    quote() {
      //引用
      this.changeSelectedText("> ", "\n");
    },
    code() {
      //插入代码块
      this.changeSelectedText("```\n", "\n```");
    },
    inline_code() {
      //文本中插入代码(内联)
      this.changeSelectedText("`", "`");
    },
    separate() {
      //添加分割线
      this.changeSelectedText("\n---", "\n");
    }
    // changeSelectedText(startString, endString) {
    //   let t = this.$store.state.htmltext;
    //   // t.focus(); // markdownit项目
    //   if (window.getSelection) {
    //     if (t.selectionStart != undefined && t.selectionEnd != undefined) {
    //       //str2为鼠标选中的文本，str1和str3为其前后的文本
    //       let str1 = t.value.substring(0, t.selectionStart);
    //       let str2 = t.value.substring(t.selectionStart, t.selectionEnd);
    //       let str3 = t.value.substring(t.selectionEnd);

    //       let result = str1 + startString + str2 + endString + str3;
    //       t.innerText = result;
    //       this.$store.state.htmltext = t.innerText;
    //     }
    //   }
    // }
  }
};
</script>

<style scoped>
.tool-bar {
  width: 100%;
  height: 48px;
  background-color: #fafbfc;
}
.toolbar-left {
  float: left;
  width: 150px;
  height: 100%;
  background-color: cornsilk;
  margin-left: 3%;
}
.toolbar-right {
  float: right;
  width: 150px;
  height: 100%;
  background-color: cornsilk;
  margin-right: 3%;
}
.toolbar-left b {
  display: block;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>
