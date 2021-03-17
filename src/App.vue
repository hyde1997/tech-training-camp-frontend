<template>
  <div id="app">
    <editor-main />
  </div>
</template>

<script>
import EditorMain from "components/EditorMain";

export default {
  name: "app",
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
head {
  width: 80px;
  height: 100px;
}
#app {
  width: 100%;
  height: 100%;
  background-color: pink;
}
</style>
