<template>
  <div id="bSwiperBannerItems">
    <div class="banner-item-wrap">
      <div class="banner-item-left">
        <dt class="banner-item-title">
          <h2 class="banner-item-category">PC / Mobile</h2>
          <h1 class="banner-item-name">에니메이션 스트리밍 사이트</h1>
          <h3 class="banner-item-subname">사이트명 / 라프텔</h3>
        </dt>
        <p class="banner-txt">
          회원가입, 로그인에 보안을 적용 사용자 편리성을 생각하며 UI설계
        </p>
        <ul class="keywords-items">
          <li
            class="keywords-item"
            v-for="(item, index) in items"
            :key="index"
          ></li>
        </ul>
        <div class="banner-buttons">
          <app-button
            :styles="'app-button-cta'"
            :contents="'작업과정'"
            @clicked="buttonClicked"
          />
          <app-button
            class="btn-2"
            :styles="'app-button-ghost'"
            :contents="'사이트로 바로가기'"
            @clicked="buttonClicked"
          />
        </div>
      </div>
      <div class="banner-item-right"></div>
    </div>
  </div>
</template>
<script>
import AppButton from "./AppButton";
export default {
  data() {
    return {
      items: ["1", "2"],
    };
  },
  components: { AppButton },
  props: ["portfolioData"],
  methods: {
    buttonClicked: function (e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
#bSwiperBannerItems {
  position: relative;
  width: 100%;
  height: 400px;
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
  font-size: 21px;
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

//banner-button css
.banner-buttons button {
  margin-top: 38px;
}
.btn-2 {
  margin-left: 20px;
}

//banner-item-right
.banner-item-right {
  width: 600px;
  height: 400px;
  float: right;
}
.banner-item-right ::after {
  position: absolute;
  clear: both;
}
</style>
