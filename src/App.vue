<template>
  <div id="app">
    <editor-main />
  </div>
</template>

<script>
import EditorMain from "components/EditorMain";

export default {
  name: "myEditor",
  data() {},
  components: {
    EditorMain
  }
};
</script>

<style>
@import "assets/css/base.css";
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  background-color: pink;
}
</style>
