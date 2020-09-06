<template>
  <div class="search-bar">
    <span class="iconfont icon-back back" @click="goBack"></span>
    <input type="text" class="search">
  </div>
</template>

<script>
  export default {
    name: 'search-bar',
    props: {

    },
    data() {
      return {

      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    },
  }
</script>

<style lang="scss" scoped>
  
  .search-bar {
    height: px2vw(48);
    display: flex;
    align-items: center;
    padding: 0 px2vw(6);
    font-size: px2vw(28);
    color: #fff;
    background: $themeColor;

    .search {
      flex: 1;
      margin: 0 px2vw(10) 0;
      border-radius: px2vw(20);
      padding: 4px px2vw(10);
      outline: none;
      border: none;
      font-size: px2vw(20);
    }
  }
</style>