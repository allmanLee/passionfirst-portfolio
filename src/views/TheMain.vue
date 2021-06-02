<template>
  <div id="theMain">
    <main-about />
    <main-skill />
    <div v-if="device === 'pc'">
      <main-portfolio />
    </div>
    <div v-else>
      <mobile-portfolio />
    </div>
    <main-contact />
  </div>
</template>
<script>
import MainAbout from "../components/layouts/MainAbout.vue";
import MainSkill from "../components/layouts/MainSkill.vue";
import MainPortfolio from "../components/layouts/MainPortfolio.vue";
import MainContact from "../components/layouts/MainContact.vue";
import MobilePortfolio from "./MobilePortfolio.vue";

export default {
  data() {
    return {
      device: "pc",
    };
  },
  computed: {
    width: function () {
      return document.getElementById("app").offsetWidth;
    },
  },
  mounted() {
    if (this.width <= 768) {
      this.device = "mobile";
      console.log("mobile ", this.width);
    } else {
      this.device = "pc";
    }
  },
  components: {
    MainAbout,
    MainSkill,
    MainPortfolio,
    MainContact,
    MobilePortfolio,
  },
};
</script>

<style lang="scss" scoped></style>
