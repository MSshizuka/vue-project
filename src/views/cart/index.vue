<template>
  <div class="cart">
    <cart-nav />
    <scroll class="wrapper" v-if="this.$store.state.cartList.length !== 0">
      <div class="content">
        <cart-list />
      </div>
    </scroll>
    <div v-else class="empty-cart">
      <div>您的购物车空空如也！</div>
      <div>去买点什么吧~</div>
      <img class="tipImage" src="@/assets/img/cart/cart.jpg" alt />
      <button @click="toIndex">去逛逛~</button>
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
  methods: {
    toIndex() {
      this.$router.replace('/');
    }
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

  button {
    position absolute
    display block;
    bottom 180px;
    padding 12px 25px
    border-radius 5px
    border 0px
    font-size 18px
    font-weight 500
    left 50%
    transform translateX(-50%)
    outline none
    color #fff
    background-color #f69
  }

}
</style>