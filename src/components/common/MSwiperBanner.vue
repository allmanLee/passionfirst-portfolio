<template>
  <div id="bSwiperBanner">
    <swiper
      :slides-per-view="1"
      :space-between="50"
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
        ><m-swiper-banner-items :portfolioData="data" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import MSwiperBannerItems from "./MSwiperBannerItems";

export default {
  components: {
    Swiper,
    SwiperSlide,
    MSwiperBannerItems,
  },
  data() {
    // Create array with 1000 slides
    const slides = Array.from({ length: 7 }).map(
      (el, index) => `Slide ${index + 1}`
    );
    return {
      slides,
      index: 0,
      controlledSwiper: null,
    };
  },
  props: ["ChangeSwiperData", "data"],
  methods: {
    setSecondSwiper(swiper) {
      this.controlledSwiper = swiper;
      this.$emit("ChangedSwiper", this.controlledSwiper);
    },
  },
};
</script>
<style lang="scss"></style>
