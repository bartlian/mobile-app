<template>
  <div>
    <div class="category">
      <router-link to="/scenery" class="item">
        <span class="iconfont icon-Mountains"></span>
        <span>景点</span>
      </router-link>
      <div class="item disabled" @click="handleTodoDev">
        <span class="iconfont icon-food"></span>
        <span>美食</span>
      </div>
      <div class="item disabled" @click="handleTodoDev">
        <span class="iconfont icon-cinema"></span>
        <span>影院</span>
      </div>
    </div>
    <router-link to="/mine" class="btn"></router-link>
    <Dialog title="123" content="123123"></Dialog>
  </div>
</template>

<script>
  import Dialog from '@/components/Dialog';
  import Toast from '@/components/Toast';
  import { mapState } from 'vuex';

  export default {
    name: 'Index',
    components: {
      Dialog,
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapState({
        isLogin: state => state.isLogin
      })
    },
    methods: {
      handleTodoDev() {
        this.$toast('待开发');
      }
    },
    created() {
      console.log(this.$store);
    }
  }
</script>

<style lang="scss" scoped>
  .category {
    display: flex;
    padding-top: px2vw(20);

    .item {
      padding: 0 px2vw(20) px2vw(10);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .disabled {
      color: #666;
    }

    .iconfont {
      font-size: px2vw(40);
    }
  }
  
  .btn {
    width: px2vw(40);
    height: px2vw(40);
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.4);
    text-align: center;
    line-height: px2vw(40);
    position: fixed;
    right: px2vw(20);
    bottom: px2vw(60);
    color: #666;
  }
</style>