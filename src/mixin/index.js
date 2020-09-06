const mixin = {
  methods: {
    goBack() {
     history.length > 1 ? this.$router.go(-1) : this.$router.replace('/');
    }
  }
};

export default mixin;