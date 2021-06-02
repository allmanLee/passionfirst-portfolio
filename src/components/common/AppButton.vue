<template>
  <button :class="`app-button ${styles}`" @click="eventEmit">
    {{ contents }}
  </button>
</template>
<script>
export default {
  props: ["contents", "styles"],
  methods: {
    eventEmit: function () {
      this.$emit("clieked");
    },
  },
};
</script>
<style lang="scss">
.app-button {
  min-width: 100px;
  height: 46px;
  box-sizing: border-box;
  display: inline-block;
  padding: 12px 21px;
  border: solid 1px black;
  border-radius: 12px;
  font-family: "Noto Sans KR";
  font-weight: 500;
}
.app-button-cta {
  color: white;
  border: none;
  background-color: royalblue;
}
.app-button-ghost {
  background-color: white;
}
</style>
