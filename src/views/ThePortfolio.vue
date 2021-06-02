<template>
  <div id="thePortfolio">
    <div class="portfolio-img-wrap">
      <img
        src="./../assets/img/portfolioDetails/laftel.jpg"
        alt="썸네일 이미지"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    // imgUrl: function () {
    //   return "../assets/img/portfolioDetails/laftel.jpg";
    //   return `../assets/img/portfolioDetails/+${this.$route.params.engId}+.jpg`;
    // },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.portfolio-img-wrap {
  max-width: 1200px;
  margin: 0 auto;
}
img {
  display: block;
  margin: 0 auto;
}
</style>
