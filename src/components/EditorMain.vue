<template>
  <div id="editor-main">
    <h2 class="title">tech-training-camp-frontend</h2>
    <div class="border">
      <!-- 工具栏 -->
      <tool-bar />
      <!-- 编辑展示区域 -->
      <container />
      <!-- 底部footer -->
      <footer-bar />
    </div>
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
.title {
  position: absolute;
  width: 800px;
  left: 50%;
  top: 2%;
  transform: translateX(-50%);
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;

  color: rgb(253, 189, 199);
}
#editor-main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 6% 10% 4% 10%;
  background: linear-gradient(to top, #77acac, #5a7599);
}
.border {
  width: 100%;
  height: 100%;
  border: 3px inset rgba(146, 164, 175, 0.3);
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.157), 0 0px 3px rgba(0, 0, 0, 0.227);
}
</style>
