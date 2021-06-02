<template>
  <div id="bSwiperTableItems">
    <div class="table-item-wrap">
      <table class="table-item">
        <th>CATEGORY</th>
        <th>SOURCE</th>
        <th>RELATED KEYWORDS</th>
        <tr v-for="(item, index) in items" :key="index">
          <td>
            <img
              class="table-cate-img"
              :src="
                require(`../../assets/img/icon-img/1x/${item.TableCate}.png`)
              "
              alt="icon"
            />
          </td>
          <td>
            <a href="#">{{ item.TableSource }}</a>
          </td>
          <td>{{ item.TableRelated }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: this.portfolioData.TableItems,
    };
  },
  props: ["portfolioData"],
};
</script>

<style lang="scss" scoped>
#bSwiperTableItems {
  position: relative;
  width: 100%;
  height: 400px;
  text-align: center;
  background-color: #ffffff;
  margin-top: 40px;
}
.table-item-wrap {
  max-width: 1200px;
  margin: 0 auto;
}
.table-item {
  width: 100%;
  table-layout: fixed;
  margin-left: 0px 20px;
  margin-right: 0px 20px;
  font-size: 16px;
}
.table-item > th {
  background-color: #f3f3f3;
  padding: 20px 0px;
  font-family: "Roboto";
  font-weight: 700;
}
.table-item > tr {
  border-bottom: 2px solid #f3f3f3;
}
.table-item > tr > td {
  padding: 20px;
  vertical-align: middle;
  font-family: "Roboto";
  font-size: 16px;
}
.table-cate-img {
  width: 30px;
  height: 30px;
}
</style>
