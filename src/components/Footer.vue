<template>
  <footer>
    <div class="foot">
      <span
        >字数：{{
          this.$store.state.htmltext.length
        }}&nbsp;&nbsp;&nbsp;&nbsp;行数：{{
          this.$store.state.htmltext.split("\n").length
        }}</span
      >
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.foot {
  position: relative;
  width: 100%;
  height: 20px;
  background-color: #fff;
  font-size: 12px;
}
.foot span {
  position: absolute;
  top: 4px;
  padding-left: 10px;
}
</style>
