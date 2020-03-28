<template>
  <div class="cart">
    <cart-nav />
    <scroll class="wrapper" v-if="this.$store.state.cartList.length !== 0">
      <div class="content">
        <cart-list />
      </div>
    </scroll>
    <div v-else class="empty-cart">
      <div>您的购物车居然是空的！</div>
      <div>去买点什么吧~</div>
      <img class="tipImage" src="@/assets/img/cart/cart.jpg" alt />
    </div>
    <cart-bottom-bar />
  </div>
</template>

<script>
import CartNav from "@/views/cart/CartNav";
import CartList from "@/views/cart/CartList";
import CartBottomBar from "@/views/cart/CartBottomBar";

import Scroll from "@/components/Scroll";

export default {
  name: "Cart",
  components: {
    CartNav,
    CartList,
    CartBottomBar,
    Scroll
  },
  mounted() {
    // console.log(this.$store.state);
  }
};
</script>

<style lang="stylus" scoped>
.wrapper {
  margin-top: 44px;
  margin-bottom: 100px;
  height: calc(100vh - 147px);
}

.empty-cart {
  margin-top: 70px;
  width: 100%;

  div:first-child {
    width 100%
    text-align center
    color #f69
    font-size: 30px;
  }

  div:nth-child(2) {
    position relative
    top 10px
    right 20px
    width 100%
    text-align right
    color #aaa
    font-size: 24px;
  }

  .tipImage {
    width 100%
    max-width 100%
    max-height  100%
    position relative;
    top 50px
    left 25px
  }

}
</style>