<template>
  <div id="bSwiperBanner">
    <swiper
      :slides-per-view="1"
      :space-between="50"
      :scrollbar="{ draggable: true }"
      @swiper="setFirstSwiper"
      :controller="{ control: ChangeSwiperData }"
    >
      <swiper-slide
        v-for="(slideContent, index) in slides"
        v-bind:key="slideContent"
        :virtualIndex="index"
      >
        <b-swiper-table-items :portfolioData="slideContent" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import BSwiperTableItems from "./BSwiperTableItems";

export default {
  components: {
    Swiper,
    SwiperSlide,
    BSwiperTableItems,
  },
  data() {
    // Create array with 1000 slides
    return {
      slides: this.portfolioData,
      thisIndex: 0,
      controlledSwiper: null,
    };
  },
  props: ["ChangeSwiperData", "portfolioData"],
  methods: {
    setFirstSwiper(swiper) {
      this.controlledSwiper = swiper;
      this.$emit("ChangedSwiper", this.controlledSwiper);
    },
  },
};
</script>
<style lang="scss"></style>
