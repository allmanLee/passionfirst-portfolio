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
        ><m-swiper-table-items :portfolioData="data" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import MSwiperTableItems from "./MSwiperTableItems";

export default {
  components: {
    Swiper,
    SwiperSlide,
    MSwiperTableItems,
  },
  data() {
    // Create array with 1000 slides
    const slides = Array.from({ length: 7 }).map(
      (el, index) => `Slide ${index + 1}`
    );
    return {
      slides,
      thisIndex: 0,
      controlledSwiper: null,
    };
  },
  props: ["ChangeSwiperData", "data"],
  methods: {
    setFirstSwiper(swiper) {
      this.controlledSwiper = swiper;
      this.$emit("ChangedSwiper", this.controlledSwiper);
    },
  },
};
</script>
<style lang="scss"></style>
