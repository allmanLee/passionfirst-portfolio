<template>
  <div id="app">
    <app-header></app-header>
    <div id="theMain">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>
<script>
//import { defineComponent } from "@vue/composition-api";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
export default {
  data() {
    return {};
  },
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss"></style>
