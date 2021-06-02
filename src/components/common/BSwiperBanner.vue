<template>
  <div id="bSwiperBanner">
    <swiper
      :slides-per-view="1"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="setSecondSwiper"
      :effect="'fade'"
      :controller="{ control: ChangeSwiperData }"
    >
      <swiper-slide
        v-for="(slideContent, index) in slides"
        :key="index"
        :index="index"
        :virtualIndex="index"
        ><b-swiper-banner-items :portfolioData="slideContent" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import BSwiperBannerItems from "./BSwiperBannerItems";

export default {
  components: {
    Swiper,
    SwiperSlide,
    BSwiperBannerItems,
  },
  data() {
    return {
      slides: this.portfolioData,
      index: 0,
      controlledSwiper: null,
    };
  },
  mounted() {},
  props: ["ChangeSwiperData", "portfolioData"],
  methods: {
    setSecondSwiper(swiper) {
      this.controlledSwiper = swiper;
      this.$emit("ChangedSwiper", this.controlledSwiper);
    },
  },
};
</script>
<style lang="scss"></style>
