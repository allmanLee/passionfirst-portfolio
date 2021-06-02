<template>
  <div id="mainPortfolio">
    <div class="portfolio-top">
      <h1 id="portfolioTitle">Portfolio {{ changedCate }}</h1>
      <div class="banner-buttons">
        <input
          id="pc-btn"
          type="radio"
          name="cate"
          class="btn-2"
          v-model="changedCate"
          value="PC"
          checked
        /><label for="pc-btn" @click="changeCate">PC</label>
        <input
          id="mobile-btn"
          type="radio"
          name="cate"
          class="btn-2"
          v-model="changedCate"
          value="Mobile"
        />
        <label for="mobile-btn" @click="changeCate">Mobile</label>
      </div>
    </div>
    <!-- <div id="cate-gnb">
      <app-button></app-button>
    </div> -->
    <div id="portfolioBanner">
      <b-swiper-banner
        :ChangeSwiperData="b"
        @ChangedSwiper="ChangedSwiperFirst"
        :portfolioData="portfolioData"
      ></b-swiper-banner>
      <b-swiper-table
        :ChangeSwiperData="a"
        @ChangedSwiper="ChangedSwiperSecond"
        :portfolioData="portfolioData"
      ></b-swiper-table>
    </div>
  </div>
</template>
<script>
import portfolioDB from "../../assets/data/portfolio.json";
// Import Swiper Vue.js components - swiper-banner
import BSwiperBanner from "../common/BSwiperBanner";
import BSwiperTable from "../common/BSwiperTable";

export default {
  data() {
    return {
      indexChanged: 0,
      a: null,
      b: null,
      changedCate: "PC",
      portfolioData: portfolioDB.data,
    };
  },

  mounted() {},
  components: {
    BSwiperBanner,
    BSwiperTable,
  },
  watch: {
    // changedCate: function (cate) {
    //   let changedArr = portfolioDB.data.filter((val) => {
    //     return val.Cate.includes(cate);
    //   });
    //   setTimeout(() => {
    //     this.portfolioData = changedArr;
    //     console.log(changedArr);
    //   }, 1000);
    // },
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
};
</script>
<style lang="scss" scoped>
#mainPortfolio {
  width: 100%;
  height: 100vh;
  margin-top: 60px;
}
.portfolio-top {
  position: relative;
  max-width: 1200px;
  height: 120px;
  margin: auto;
}
#portfolioTitle {
  position: absolute;
  height: 48px;
  // padding: 10px 20px;
  padding-left: 20px;
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
  padding-right: 20px;
}
.btn-2 {
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
