<template>
  <form class="form">
    <div class="field">
      <label>账号</label>
      <input type="text">
    </div>
    <div class="field">
      <label>密码</label>
      <input type="password">
    </div>
    <button type="submit" @click.prevent="submit">登录</button>
  </form>
</template>

<script>
  export default {
    methods: {
      submit() {
        console.log(1);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form {
    padding: px2vw(30) px2vw(60) px2vw(30) px2vw(14);

    .field {
      display: flex;
      margin-bottom: px2vw(20);
      label {
        margin-right: px2vw(10);
      }

      input {
        flex: 1;
        outline: none;
        border: 1px solid #ccc;
        border-radius: 6px;
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 96%;
      height: px2vw(32);
      margin: px2vw(120) auto 0;
      background: $themeColor;
      border-radius: 10px;
      color: #fff;
    }
  }
</style>