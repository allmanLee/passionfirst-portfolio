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
        ><m-swiper-table-items :portfolioData="slideContent" />
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
  watch: {
    portfolioData: function (val) {
      console.log(val);
      this.slides = this.portfolioData;
    },
  },
  data() {
    // Create array with 1000 slides
    // const slides = Array.from({ length: 7 }).map(
    //   (el, index) => `Slide ${index + 1}`
    // );
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
