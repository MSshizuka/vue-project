<template>
  <div class="cart">
    <cart-nav/>
    <scroll class="wrapper">
      <div class="content">
        <cart-list/>
      </div>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import CartNav from "@/views/cart/CartNav"
import CartList from "@/views/cart/CartList"
import CartBottomBar from "@/views/cart/CartBottomBar"

import Scroll from "@/components/Scroll"

export default {
  name:"Cart",
  components: {
    CartNav,
    CartList,
    CartBottomBar,
    Scroll
  },
  mounted() {
    console.log(this.$store.state);
    
  }
}
</script>

<style lang="stylus" scoped>
.wrapper {
  margin-top 44px;
  margin-bottom 100px
  height  calc(100vh - 147px)
}
</style>