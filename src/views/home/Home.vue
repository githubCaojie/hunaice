<template>
  <div id="home">
    <div class="content">
      <div class="gonggao">
        <div class="scroll">
          <div class="title">
            <img src="~assets/img/icon_notice.png" alt=""/>
            <b>信息公告</b>
          </div>
        </div>
        <div class="now-time"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getHomeNotice } from "network/home";

  export default {
    name: "Home",
    date() {
      return {
        gonggaoArr: []
      }
    },
    created () {
      // 获取广告信息
      this.getHomeNotice('301', '1' ,'8')
    },
    methods: {
      getHomeNotice(COLUMNTYPE, currentPage, showCount) {
        getHomeNotice(COLUMNTYPE, currentPage, showCount).then(res => {
          this.gonggaoArr = res.data.data
          console.log(this.gonggaoArr)
        })
      }
    }
  };
</script>

<style scoped>
  .content{
    background-color: #fff;
    padding: 0 10px;
    margin: 0 4vw;
  }
</style>