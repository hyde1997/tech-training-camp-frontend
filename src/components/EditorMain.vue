<template>
  <div id="editor-main">
    <!-- 工具栏 -->
    <tool-bar />
    <!-- 编辑展示区域 -->
    <container />
    <!-- 底部footer -->
    <footer-bar />
  </div>
</template>

<script>
import Container from "./Container";
import ToolBar from "./ToolBar";
import FooterBar from "./Footer";

export default {
  name: "editorMain",
  components: { ToolBar, Container, FooterBar }
};
</script>

<style scoped>
#editor-main {
  width: 100%;
  height: 100%;
  background-color: black;
}
</style>
