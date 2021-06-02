<template>
  <div id="mainPortfolio">
    <!-- <div id="cate-gnb">
      <app-button></app-button>
    </div> -->
    <div id="portfolioBanner">
      <m-swiper-banner
        :ChangeSwiperData="b"
        @ChangedSwiper="ChangedSwiperFirst"
        :data="data"
      ></m-swiper-banner>
      <m-swiper-table
        :ChangeSwiperData="a"
        @ChangedSwiper="ChangedSwiperSecond"
        :data="data"
      ></m-swiper-table>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
// Import Swiper Vue.js components - swiper-banner
import MSwiperBanner from "./../components/common/MSwiperBanner";
import MSwiperTable from "./../components/common/MSwiperTable";

export default {
  data() {
    return {
      indexChanged: 0,
      a: null,
      b: null,
    };
  },
  mounted() {
    this.init();
  },
  components: {
    MSwiperBanner,
    MSwiperTable,
  },
  computed: {
    ...mapState({
      data: "portfolio", //#2
    }),
  },
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
  ...mapActions({
    init: "portfolioInit",
  }),
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
