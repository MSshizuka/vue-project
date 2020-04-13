<template>
  <div>
    <span class="iconfont icon-fanhui" @click="backUp"></span>
    <img src="@/assets/img/common/404.png" alt="">
  </div>
</template>

<script>
export default {
  name:"Error",
  methods: {
    backUp() {
      this.$router.back();
    }
  }
}
</script>

<style lang="stylus" scoped>
  div 
    position relative
    width 100%
    height  100%
    z-index 999
    .icon-fanhui
      position relative
      font-size 26px
      color #aaa
      top 20px
      left 20px
    img {
      width 100%
      height 100%
    }
</style>