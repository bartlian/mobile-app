<template>
  <div class="main">
    <div class="content">
      <div class="cell">
        <label>账号</label>
        <div class="cell-right" @click="handleClick">
          <span>123</span>
          <span class="iconfont icon-right-arrow"></span>
        </div>
      </div>
      <div class="cell no-border">
        <label>昵称</label>
        <div class="cell-right" @click="handleClick"> 
          <span>123</span>
          <span class="iconfont icon-right-arrow"></span>
        </div>
      </div>
    </div>
    <button class="btn" @click="logout">登出</button>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        this.$toast('暂不支持修改');
      },
      logout() {
        console.log('logout');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #f5f5f5;
  }

  .content {
    width: 100%;
    background: #fff;
    margin-top: px2vw(10);

    .cell {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: px2vw(8);
      border-bottom: 1px solid #ccc;

      &.no-border {
        border: none;
      }

      .cell-right {
        width: px2vw(50);
        display: flex;
        align-items: center;    
      }
    }

    .iconfont {
      margin-left: px2vw(8);
      font-size: px2vw(12);
      color: #666;
    }
  }

  .btn {
    display: block;
    align-items: center;
    width: 92%;
    height: px2vw(36);
    border-radius: 10px;
    background: $themeColor;
    margin: px2vw(80) auto 0;
    color: #fff;
  }
</style>