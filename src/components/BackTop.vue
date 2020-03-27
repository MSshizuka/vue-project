<template>
  <div class="back-top">
    <img src="@/assets/img/common/top.png" alt="">
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
  bottom 60px;
  img {
    width 43px;
    max-width 43px;
    max-height 43px;
  }
}
</style>