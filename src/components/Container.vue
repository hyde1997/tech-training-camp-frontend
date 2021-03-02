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
  height: calc(100% - 48px - 40px - 10px);
  border-top: 5px solid rgb(80, 102, 102);
  border-bottom: 5px solid rgb(80, 102, 102);
  background-color: pink;
}
</style>
