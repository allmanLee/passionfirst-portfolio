<template>
  <div id="bSwiperBannerItems">
    <div class="banner-item-wrap">
      <div class="banner-item-center">
        <dt class="banner-item-title">
          <h2 class="banner-item-category">PC / Mobile</h2>
          <h1 class="banner-item-name">에니메이션 스트리밍 사이트</h1>
          <h3 class="banner-item-subname">사이트명 / 라프텔</h3>
        </dt>
      </div>
      <div class="banner-item-right"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: ["1", "2"],
      props: ["portfolioData"],
    };
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
}
.banner-item-wrap {
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
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
</style>
