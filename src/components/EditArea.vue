<template>
  <!-- 编辑区 -->
  <div class="edit">
    <div contenteditable="true" class="textarea"></div>
  </div>
</template>

<script>
export default {
  name: "EditArea"
};
</script>

<style scoped>
.edit {
  float: left;
  width: calc(50% - 8px);
  height: 100%;
  background-color: pink;
  border-right: 8px solid silver;
}
.textarea {
  position: relative;
  z-index: 10;
  width: calc(95% - 6%);
  height: calc(100% - 6% - 8px);
  margin: 0 auto;
  padding: 3%;
  outline: none;
  background-color: skyblue;
  font-size: 40px;
}
</style>
