<template>
  <div class="login-quick">
    <div class="iconfont icon-fanhui" @click="backUp"></div>
    <img class="WX-pic" v-if="loginData.type === 'wx'" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3310705796,3682366007&fm=26&gp=0.jpg" alt="">
    <img v-else src="//imgcache.qq.com/ptlogin/v4/style/42/images/logo_upice.png?v=20180125" alt="">
    <span :class="loginData.type">正在拉起{{loginData.loginBody}}手机版...</span>
  </div>
</template>

<script>
export default {
  name: "LoginQuick",
  props: {
    loginData: {
      type: Object
    }
  },
  methods: {
    backUp() {
      this.$emit('loginWay', -1)
    }
  }
};
</script>

<style lang="stylus">
.login-quick
  .icon-fanhui 
    position: absolute;
    top: 18px;
    left: 18px;
    font-size: 22px;
    color: #555;
  img 
    display block
    width 99px
    height 163px
    margin 170px auto 10px
  .WX-pic
    width 160px
  span 
    position absolute
    display block
    padding 10px 20px
    font-size 28px
    border-radius 40px
    top 400px
    left 32px
    color #fff
  .qq
    background-color #12b7f5
  .wx
    background-color #09bb07


</style>