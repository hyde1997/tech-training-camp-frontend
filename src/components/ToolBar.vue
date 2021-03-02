<template>
  <div class="tool-bar">
    <div class="toolbar-left">左侧编辑工具栏</div>
    <div class="toolbar-right">右侧视图工具栏</div>
  </div>
</template>

<script>
export default {
  name: "ToolBar"
};
</script>

<style scoped>
.tool-bar {
  width: 100%;
  height: 48px;
  background-color: yellow;
}
.toolbar-left {
  float: left;
  width: 300px;
  height: 100%;
  background-color: gray;
  margin-left: 3%;
}
.toolbar-right {
  float: right;
  width: 300px;
  height: 100%;
  background-color: gray;
  margin-right: 3%;
}
</style>
