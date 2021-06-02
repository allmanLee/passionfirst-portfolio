<template>
  <div id="mainPortfolio">
    <!-- <div id="cate-gnb">
      <app-button></app-button>
    </div> -->
    <div id="portfolioBanner">
      <m-swiper-banner
        :ChangeSwiperData="b"
        @ChangedSwiper="ChangedSwiperFirst"
        :portfolioData="portfolioData"
      ></m-swiper-banner>
      <m-swiper-table
        :ChangeSwiperData="a"
        @ChangedSwiper="ChangedSwiperSecond"
        :portfolioData="portfolioData"
      ></m-swiper-table>
    </div>
  </div>
</template>
<script>
import portfolioDB from "../assets/data/portfolio.json";
// Import Swiper Vue.js components - swiper-banner
import MSwiperBanner from "./../components/common/MSwiperBanner";
import MSwiperTable from "./../components/common/MSwiperTable";

export default {
  data() {
    return {
      indexChanged: 0,
      a: null,
      b: null,
      portfolioData: portfolioDB.data,
    };
  },
  mounted() {},
  components: {
    MSwiperBanner,
    MSwiperTable,
  },
  computed: {},
  methods: {
    ChangedSwiperFirst: function (val) {
      this.a = val;
      console.log(this.a);
    },
    ChangedSwiperSecond: function (val) {
      this.b = val;
      console.log(this.b);
    },
  },
};
</script>
<style lang="scss" scoped>
#mainPortfolio {
  width: 100%;
  height: 100vh;
}
#portfolioBanner {
  width: 100%;
  height: 400px;
}
</style>
