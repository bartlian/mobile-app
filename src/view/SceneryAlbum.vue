<template>
  <div class="album">
    <img v-for="i in list" :key="i" src="@/mock/imgs/tower.jpg"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [1, 2, 3, 4, 5]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .album {
    padding: px2vw(14);
    display: flex;
    flex-wrap: wrap;

    img {
      width: px2vw(168);
      height: px2vw(120);
      margin-bottom: px2vw(10);

      &:nth-child(2n) {
        margin-left: px2vw(10);
      }
    }
  }
</style>