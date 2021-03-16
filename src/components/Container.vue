<template>
  <div class="container">
    <!-- 编辑区 -->
    <edit-area />
    <!-- 展示区 -->
    <display-area />
  </div>
</template>

<script>
import EditArea from "components/EditArea";
import DisplayArea from "components/DisplayArea";

export default {
  name: "Container",
  components: {
    EditArea,
    DisplayArea
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: calc(100% - 48px - 20px - 4px);
  border-top: 2px solid #ddd;
  border-bottom: 2px solid #e1e4e8;
  background-color: pink;
}
</style>
