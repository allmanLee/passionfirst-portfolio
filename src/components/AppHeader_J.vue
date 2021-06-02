<template>
  <div id="appHeader" class="header-shadow">
    <div id="wrap" class="app-header">
      <i id="logo">JUN</i>
      <ul id="gnbWrap">
        <li>PORTFOLIO</li>
        <li>CANTACT</li>
      </ul>
    </div>
  </div>
</template>
<script>
//import

export default {};
</script>

<style lang="scss" scoped>
#appHeader {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 200;
  background-color: white;
}
.header-shadow {
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
}
.app-header {
  position: relative;
  max-width: 1200px;
  height: 60px;
  line-height: 60px;
  text-align: left;
  margin: 0 auto;
  background-color: white;
  z-index: 200;
}

#logo {
  position: absolute;
  left: 0px;
  display: block;
  height: 60px;
  line-height: 60px;
  padding-bottom: 10px;
  font-size: 32px;
  font-weight: 600;
  margin-left: 20px;
  text-align: center;
}
#gnbWrap {
  position: absolute;
  display: block;
  right: 0px;
  height: 100%;
  background-color: white;
  text-align: center;
}
#gnbWrap li {
  display: inline-block;
  margin-right: 20px;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 14px;
}
</style>
