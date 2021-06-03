<template>
  <div id="mainPortfolio">
    <div class="portfolio-top">
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
      changedCate: "PC",
      portfolioData: portfolioDB.data,
    };
  },
  mounted() {},
  components: {
    MSwiperBanner,
    MSwiperTable,
  },
  watch: {
    changedCate: function (cate) {
      let changedArr = portfolioDB.data.filter((val) => {
        return val.Cate.includes(cate);
      });
      this.portfolioData = changedArr;
    },
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
}
#portfolioBanner {
  width: 100%;
  height: 400px;
}

//banner-button css
.banner-buttons {
  position: absolute;
  height: 48px;
  margin: 40px auto 20px auto;
  float: right;
  padding-right: 20px;
  z-index: 20;
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
  background-color: white;
  opacity: 0.6;
  color: #9e9e9e;
}
input {
  display: none;
  opacity: 1;
}
input:checked + label {
  background-color: white;
  opacity: 1;
  color: black;
}
</style>
