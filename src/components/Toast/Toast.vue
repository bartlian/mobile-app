<template>
  <div v-if="!hidden" class="mask" @touchmove.prevent>
    <p class="tips">{{tips}}</p>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      tips: '',
      showTime: 2000,
      hidden: true,
      tick: null,
      isMounted: false,
    }
  },
  methods: {
    show() {
      this.hidden = false;
      
      this.tick = setTimeout(() => {
        this.hidden = true;
      }, this.showTime);
    }
  },
  mounted () {
    if (!this.isMounted) {
      this.isMounted = true;
    }

    window.addEventListener('historychange', (event) => {
      this.close();
    }, false);
  },
}
</script>

<style lang="scss" scoped>
  .mask {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tips {
    max-width: px2vw(180);
    padding: px2vw(8) px2vw(14);
    background: #595959;
    border: 1px solid #ededed;
    border-radius: 4px;
    font-size: px2vw(14);
    color: #fff;
    text-align: center;
  }
</style>