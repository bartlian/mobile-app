<template>
  <div class="main">
    <SearchBar />
    <div class="list">
      <router-link to="/scenery/sceneryDetails" class="item" >
        <img class="overview-img" src="@/mock/imgs/tower.jpg" />
        <div class="desc">
          <span class="title">西安大雁塔</span>
          <span class="intro">旅游简介水电费水电费水电费水电费旅游简介水电费水电费水电费水电费</span>
          <span>距我 1km</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import SearchBar from '@/components/SearchBar';
  
  export default {
    components: {
      SearchBar,
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .main {
    background: #f5f5f5;
  }

  .list {
    background: #fff;
    margin-top: px2vw(10);
    padding: 0 px2vw(10);

    .item {
      display: flex;
      padding: px2vw(10) 0;
      border-bottom: 1px solid #ededed;
      .overview-img {
        width: px2vw(100);
        height: px2vw(100);
        border-radius: 10px;
      }

      .desc {
        margin-left: px2vw(10);
        display: flex;
        max-width: px2vw(240);
        flex-direction: column;
        font-size: px2vw(14);
        color: #666;
        .title {
          font-size: px2vw(16);
          color: #333;
        }
        .intro {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }

</style>