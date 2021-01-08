<template>
  <div id="app">
    <main-header></main-header>
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import MainHeader from './components/common/mainHeader/MainHeader';
  import MainTabBar from './components/common/mainTabbar/MainTabBar'

  export default {
    name: 'App',
    components: {
      MainHeader,
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
