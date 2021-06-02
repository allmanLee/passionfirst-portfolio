<template>
  <div id="mainPortfolio">
    <div class="portfolio-top">
      <h1 id="portfolioTitle">Portfolio</h1>
      <div class="banner-buttons">
        <input
          id="pc-btn"
          type="radio"
          name="cate"
          class="btn-2"
          checked
        /><label for="pc-btn">PC</label>
        <input id="mobile-btn" type="radio" name="cate" class="btn-2" />
        <label for="mobile-btn">Mobile</label>
      </div>
    </div>
    <!-- <div id="cate-gnb">
      <app-button></app-button>
    </div> -->
    <div id="portfolioBanner">
      <b-swiper-banner
        :ChangeSwiperData="b"
        @ChangedSwiper="ChangedSwiperFirst"
        :data="data"
      ></b-swiper-banner>
      <b-swiper-table
        :ChangeSwiperData="a"
        @ChangedSwiper="ChangedSwiperSecond"
        :data="data"
      ></b-swiper-table>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
// Import Swiper Vue.js components - swiper-banner
import BSwiperBanner from "../common/BSwiperBanner";
import BSwiperTable from "../common/BSwiperTable";

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
    BSwiperBanner,
    BSwiperTable,
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
    ...mapActions({
      init: "portfolioInit",
    }),
  },
};
</script>
<style lang="scss" scoped>
#mainPortfolio {
  width: 100%;
  height: 100vh;
}
.portfolio-top {
  position: relative;
  max-width: 1200px;
  height: 120px;
  margin: 0 20px;
}
#portfolioTitle {
  position: absolute;
  height: 48px;
  // padding: 10px 20px;
  margin: 40px auto 20px auto;
  text-align: left;
  font-family: "Noto Sans KR";
  font-weight: 700;
  font-size: 32px;
}
#portfolioBanner {
  width: 100%;
  height: 400px;
}
//banner-button css
.banner-buttons {
  height: 48px;
  margin: 40px auto 20px auto;
  float: right;
}
.btn-2 {
  box-sizing: border-box;
  margin-top: 10px;
}
label {
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 700;
  display: inline-block;
  min-width: 60px;
  height: 48px;
  line-height: 48px;
  border: 1px solid #9e9e9e;
  padding-left: 21px;
  padding-right: 21px;
  text-align: center;
  vertical-align: middle;
  background-color: none;
}
input {
  display: none;
}
input:checked + label {
  background-color: black;
  color: white;
}
</style>
