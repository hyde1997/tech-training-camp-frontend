<template>
  <!-- 编辑区 -->
  <div class="edit">
    <textarea
      class="markArea"
      ref="editor"
      @input="
        updateData();
        updateObj();
      "
      v-model="text"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  name: "EditArea",
  data() {
    return {
      text: this.$store.state.htmltext,
      obj: this.$refs.editor
    };
  },
  mounted() {
    this.obj = this.$refs.editor;
  },
  methods: {
    updateData() {
      // console.log(this.obj);
      let text = this.$refs.editor.value;
      this.$store.commit("update", text);
    },
    updateObj() {
      // console.log(this.obj);
      this.$store.commit("updateObj", this.obj);
    }
  }
};
</script>

<style scoped>
.edit {
  float: left;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  border-right: 1px solid #e1e4e8;
  background-color: #f8f9fa;
}
.markArea {
  position: relative;
  width: 100%;
  height: 100%;
  line-height: 18px;
  box-sizing: border-box;
  border: solid 0px;
  resize: none;
  margin: 0 auto;
  padding: 3% 5%;
  outline: none;
  font-size: 14px;
}
/* 滚动条设置 */
.edit::-webkit-scrollbar,
.markArea::-webkit-scrollbar {
  width: 4px;
  height: 2px;
  background: #e1e4e8;
  border-radius: 2px; /*外层轨道*/
}
.edit::-webkit-scrollbar-thumb,
.markArea::-webkit-scrollbar-thumb {
  display: block;
  width: 2px;
  margin: 0 auto;
  border-radius: 2px;
  background: #c9cdd4; /*内层轨道*/
}
</style>
