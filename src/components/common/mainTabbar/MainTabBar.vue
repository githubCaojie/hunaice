<template>
  <div class="tab-bar">
    <div class="nav">
      <ul class="one">
        <li
          class="one-li"
          v-for="(item, i) in navArray"
          :key="i"
          @mouseenter="onEnter(i)"
          @mouseleave="leaver(i)"
        >
          {{item.name}}
          <ul class="two" v-if="item.theNav" v-show="item.isShowTheNav">
            <li
              class="two-li"
              v-for="(theItem, n) in item.theNav"
              :key="n"
            >
              {{theItem.name}}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MainTabBar",
    data() {
      return {
        navArray: [
          {
            name: '首页',
            isShowTheNav: false,
          },
          {
            name: '关于协会',
            isShowTheNav: false,
            theNav: [
              {
                name: '协会简介'
              },
              {
                name: '协会章程'
              },
              {
                name: '领导成员'
              },
              {
                name: '组织结构'
              },
              {
                name: '市州办事处'
              },
              {
                name: '理事会'
              },
              {
                name: '常务理事会'
              },
              {
                name: '联系我们'
              }
            ]
          },
          {
            name: '协会信息',
            isShowTheNav: false,
            theNav: [
              {
                name: '协会动态'
              },
              {
                name: '通知公告'
              }
            ]
          },
          {
            name: '专项服务',
            isShowTheNav: false,
            theNav: [
              {
                name: '培训能力'
              },
              {
                name: '信用评价'
              },
              {
                name: '服务能力'
              },
              {
                name: '网络安全'
              }
            ]
          },
          {
            name: '政策法规',
            isShowTheNav: false
          },
          {
            name: '会员服务',
            isShowTheNav: false,
            theNav: [
              {
                name: '会员管理办法'
              },
              {
                name: '入会指南'
              },
              {
                name: '供需服务'
              },
              {
                name: '会员单位'
              }
            ]
          },

        ],
      }
    },
    methods: {
      onEnter(i) {
        this.navArray[i].isShowTheNav = true
      },
      leaver(i) {
        this.navArray[i].isShowTheNav = false
      }
    }
  }
</script>

<style scoped>
  .nav{
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    height: 50px;
    margin-bottom: 20px;
  }
  .nav ul.one {
    display: flex;
    margin: 0 4vw;
  }
  .nav ul.one li.one-li {
    flex: 1;
    text-align: center;
    line-height: 50px;
    height: 50px;
    font-weight: bold;
    font-size: 18px;
    color: #005389;
    cursor: pointer;
  }
  ul.one li.one-li:hover {
    background: #3983b4;
    color: #fff;
  }
  ul.two {
    background-color: #fff;
    color: #3983b4;
    border: 1px;
    border-width: 0 1px 0 1px;
    border-color: #ddd;
    border-style: solid;
    position: relative;
  }
  ul.two::before{
    content: '';
    clear: both;
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: #3983b4;
    z-index: 9;
  }
  ul.two li.two-li {
    border-bottom: 1px solid #ddd;
    cursor: pointer;
  }
  ul.two li.two-li:hover {
    background-color: #c5e1f3;
  }
</style>