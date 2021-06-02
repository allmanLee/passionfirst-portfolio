<template>
  <div id="bSwiperTableItems">
    <h3 class="keywords-title">STACK KEYWORDS</h3>
    <ul class="keywords-items">
      <li
        class="keywords-item"
        v-for="(item, index) in items"
        :key="index"
      ></li>
    </ul>
    <div class="banner-buttons">
      <app-button
        class="btn-2"
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
    <div class="table-item-wrap">
      <table class="table-item">
        <tr v-for="(item, index) in items" :key="index">
          <td>
            <img class="cate-icon" src="" height="12px" alt="" />
          </td>
          <td>
            SOURCE
            <i class="right-btn"
              ><img src="../../assets/img/SVG/right-icon.svg"
            /></i>
          </td>
        </tr>
      </table>
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
#bSwiperTableItems {
  position: relative;
  width: 100%;
  height: 400px;
  text-align: left;
  background-color: #ffffff;
  margin-top: 40px;
}
.keywords-title {
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 700;
  margin-left: 20px;
}

.keywords-items {
  margin-top: 10px;
  margin-left: 20px;
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
.banner-buttons {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
.btn-2 {
  box-sizing: border-box;
  margin-top: 10px;
  width: 100%;
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

.table-item-wrap {
  max-width: 1200px;
  margin: 40px auto;
}
.table-item {
  box-sizing: border-box;
  width: 100%;
  margin: 0px 20px;
  font-size: 16px;
}

.table-item > tr {
  border-bottom: 2px solid #f3f3f3;
}
.table-item > tr > td {
  position: relative;
  text-align: left;
  vertical-align: middle;
}
.table-item > tr > td:nth-of-type(1) {
  width: 40px;
}
.cate-icon {
  width: 30px;
  height: 30px;
  padding-top: 12px;
  padding-bottom: 12px;
}
.right-btn {
  width: 20px;
  height: 20px;
  position: absolute;
  vertical-align: middle;
  right: 40px;
}
.right-btn > img {
  height: 20px;
}
</style>
