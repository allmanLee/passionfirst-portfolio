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
      this.$emit("update");
    },
  },
};
</script>
<style lang="scss">
.app-button {
  min-width: 100px;
  height: 46px;
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
  background-color: blueviolet;
}
.app-button-white {
  background-color: white;
  border: none;
}
.app-button-ghost {
  background-color: white;
}
//호버시
@media (min-width: 768px) {
  .app-button-cta:hover {
    margin-top: -4px;
    transform: scale(102%);
    box-shadow: 0px 3px 20px #9e9e9e;
  }
  .app-button-ghost:hover {
    transform: scale(102%);
    box-shadow: 0px 3px 20px #9e9e9e;
  }
  .app-button-white:hover {
    transform: scale(102%);
    box-shadow: 0px 3px 20px #9e9e9e;
  }
}
</style>
