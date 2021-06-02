<template>
  <div id="bSwiperBannerItems">
    <div class="over-black-box"></div>
    <div class="banner-item-wrap">
      <div class="banner-item-center">
        <dt class="banner-item-title">
          <h2 class="banner-item-category">{{ portfolioData.Cate }}</h2>
          <h1 class="banner-item-name">{{ portfolioData.Name }}</h1>
          <h3 class="banner-item-subname">{{ portfolioData.SubName }}</h3>
        </dt>
      </div>
      <img
        class="banner-item-img"
        :src="bannerImgUrl"
        :alt="portfolioData.Name"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["portfolioData"],
  computed: {
    bannerImgUrl: function () {
      return require(`../../assets/img/portfolioMobile/${this.portfolioData.EngId}-m.jpg`);
    },
  },
};
</script>

<style lang="scss" scope>
.swiper-button-prev {
  display: none;
}
.swiper-button-next {
  display: none;
}
#bSwiperBannerItems {
  position: relative;
  width: 100%;
  height: 400px;
  text-align: center;
  background-color: #f3f3f3;
  border: 2px solid white;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  overflow: hidden;
}
.banner-item-wrap {
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
  overflow: hidden;
}
@media (max-width: 763px) {
  .swiper-button-prev {
    display: none;
  }
  .swiper-button-next {
    display: none;
  }
}
//banner-item-center
.banner-item-center {
  position: absolute;
  box-sizing: border-box;
  width: 320px;
  padding: 40px 20px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  bottom: 40px;
  z-index: 2;
}
.banner-item-title {
  font-family: "Noto Sans KR";
  line-height: 1.75;
  color: white;
  word-break: keep-all;
}
.banner-item-category {
  font-size: 16px;
  font-weight: 500;
}
.banner-item-name {
  font-size: 28px;
  font-weight: 700;
}
.banner-item-subname {
  font-size: 14px;
  line-height: 1.4;
  color: #f3f3f3;
}
.over-black-box {
  position: absolute;
  width: 100%;
  height: 100%;
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0+0,0.65+100 */
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 ); /* IE6-9 */

  z-index: 1;
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
</style>
