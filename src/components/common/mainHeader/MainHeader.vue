<template>
  <div id="header">
    <div class="header-view">
      <div class="logo">
        <img src="~assets/img/logo.png" alt="">
      </div>
      <div class="search">
        <div class="search-view">
          <input class="search-input" type="text" placeholder="请输入关键词检索" name="" id="">
          <button class="search-btn" type="button">
            <img src="~assets/img/search.png" alt="">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MainHeader"
  }
</script>

<style scoped>
  #header {
    background-color: #005389
  }
  .header-view {
    display: flex;
    margin: 0 4vw;
    padding: 35px 0;
  }
  .header-view .logo {
    flex: 1;
  }
  .header-view .search {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-view {
    width: 320px;
    display: flex;
    height: 44px;
    background-color: #fff;
    border-radius: 10px;
  }
  .search-input {
    height: 44px;
    flex: 1;
    text-indent: 5px;
    font-size: 14px;
  }
  .search-btn {
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>