<template>
  <!-- 展示区 -->
  <div class="display">
    <div class="show"></div>
  </div>
</template>

<script>
export default {
  name: "DisplayArea"
};
</script>

<style scoped>
.display {
  float: right;
  width: calc(50% - 8px);
  height: 100%;
  background-color: pink;
  border-left: 8px solid silver;
}
.show {
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
