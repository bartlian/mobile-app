<template>
  <div v-if="showDialog" class="mask">
    <div class="dialog">
      <h3 v-if="showTitle">{{title}}</h3>
      <p>{{content}}</p>
      <div v-if="showBtn" class="btn-box">
        <button v-if="showCancel" @click="cancel">{{cancelTxt}}</button>
        <button v-if="showConfirm" @click="confirm" :style="{color: !showCancel ? 'goldenrod' : ''}">{{confirmTxt}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '提示',
    },
    showTitle: {
      type: Boolean,
      default: false,
    },
    content: {
      type: String,
      default: '',
    },
    showBtn: {
      type: Boolean,
      default: true,
    },
    showConfirm: {
      type: Boolean,
      default: true,
    },
    showCancel: {
      type: Boolean,
      default: false,
    },
    cancelTxt: {
      type: String,
      default: '取消',
    },
    confirmTxt: {
      type: String,
      default: '确定',
    },
  },
  methods: {
    cancel() {
      this.$emit('cancel');
    },
    confirm() {
      this.$emit('confirm');
    },
  }
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
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dialog {
    width: px2vw(260);
    background: #fff;
    border: 1px solid #ededed;
    border-radius: 10px;

    h3 {
      height: px2vw(26);
      font-size: px2vw(18);
      font-weight: normal;
      text-align: center;
      line-height: px2vw(26);
      border: 1px solid #ededed;
      color: #666;
    }

    p {
      padding: px2vw(10);
      font-size: px2vw(16);
      text-align: center;
    }

    .btn-box {
      display: flex;
      height: px2vw(42);
      border-top: 1px solid #ccc;
     
      button {
        flex: 1;

        &:nth-child(1) {
          color: gray;
        }

        &:nth-child(2) {
          color: goldenrod;
          border-left: 1px solid #ccc;
        }
      }
    }
  }
</style>