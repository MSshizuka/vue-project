<template>
  <div class="back-top">
    <span class="iconfont icon-zhiding1"></span>
  </div>
</template>

<script>
export default {
  name:"BackTop"
}
</script>

<style lang="stylus" scoped>
.back-top {
  position fixed;
  right 10px;
  bottom 65px;
  .icon-zhiding1 {
    display block;
    text-align center
    width 43px;
    height  43px;
    line-height 43px
    background-color rgba(0,0,0,.6);
    border-radius 50%;
    color #fff;
    font-size 24px;
  }
}
</style>