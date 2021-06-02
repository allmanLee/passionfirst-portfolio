<template>
  <div id="bSwiperBannerItems">
    <div class="banner-item-wrap">
      <div class="banner-item-left">
        <dt class="banner-item-title">
          <h2 class="banner-item-category">{{ portfolioData.Cate }}</h2>
          <h1 class="banner-item-name">{{ portfolioData.Name }}</h1>
          <h3 class="banner-item-subname">{{ portfolioData.SubName }}</h3>
        </dt>
        <p class="banner-txt">
          {{ portfolioData.Script }}
        </p>
        <ul class="keywords-items">
          <li class="keywords-item" v-for="(item, index) in items" :key="index">
            <img
              class="stack-cate-img"
              :src="require(`../../assets/img/icon-img/1x/${item}.png`)"
              alt="icon"
            />
          </li>
        </ul>
        <div class="banner-buttons">
          <app-button
            :styles="'app-button-cta'"
            :contents="'작업과정'"
            @update="workProcessClicked"
          />
          <app-button
            class="btn-2"
            :styles="'app-button-white'"
            :contents="'사이트로 바로가기'"
            @update="goToClicked"
          />
        </div>
      </div>
      <div class="banner-item-right">
        <img class="banner-img" :src="bannerImgUrl" alt="portfolio.Name" />
      </div>
    </div>
  </div>
</template>
<script>
import AppButton from "./AppButton";
export default {
  data() {
    return {
      items: this.portfolioData.StackItems,
    };
  },
  computed: {
    bannerImgUrl: function () {
      return require(`../../assets/img/portfolioPNG/${this.portfolioData.EngId}.png`);
    },
  },
  components: { AppButton },
  props: ["portfolioData"],
  methods: {
    workProcessClicked: function () {
      this.turnToPage();
      console.log("clicked");
    },
    goToClicked: function () {
      console.log("clicked");
    },
    //페이지 이동 함수
    turnToPage: function () {
      this.$router.push("/portfolioPage/" + `${this.portfolioData.EngId}`);
    },
  },
};
</script>

<style lang="scss" scoped>
#bSwiperBannerItems {
  position: relative;
  width: 100%;
  height: 600px;
  text-align: center;
  background-color: #f3f3f3;
}
.banner-item-wrap {
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
}

//banner-item-left
.banner-item-left {
  position: absolute;
  box-sizing: border-box;
  width: 320px;
  height: 100%;
  padding: 40px 20px;
  text-align: left;
  float: left;
  z-index: 2;
  background-color: white;
}
.banner-item-title {
  font-family: "Noto Sans KR";
  line-height: 1.75;
  color: black;
}
.banner-item-category {
  font-size: 16px;
  font-weight: 500;
}
.banner-item-name {
  font-size: 32px;
  font-weight: 700;
}
.banner-item-subname {
  font-size: 14px;
  line-height: 1.4;
  color: #616161;
}
.banner-txt {
  max-width: 260px;
  margin-top: 20px;
  line-height: 1.75;
  font-family: "Noto Sans KR";
  font-size: 16px;
  color: black;
  text-align: left;
}
.keywords-items {
  margin-top: 30px;
}
.keywords-item {
  display: inline-block;
  width: 36px;
  height: 36px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: plum;
}
.stack-cate-img {
  width: 36px;
  height: 36px;
}
//banner-button css
.banner-buttons button {
  margin-top: 38px;
}
.btn-2 {
  margin-left: 20px;
}

//banner-item-right
.banner-item-right {
  width: 800px;
  height: 400px;
  float: right;
}

.banner-item-right ::after {
  position: absolute;
  clear: both;
}
.banner-img {
  box-sizing: border-box;
  width: 600px;
  padding-top: 30px;
}
</style>
