<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="iconfont icon-kefu"></i>
        <span class="text">客服</span>
      </div>
      <div @click="toShop">
        <i class="iconfont icon-dianpu"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="iconfont icon-shoucang"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="payment">购买</div>
    </div>
  </div>
</template>

<script>
	export default {
    name: "DetailBottomBar",
    props: {
      topImages: {
        type: Array
      }
    },
    methods: {
      toShop() {
        this.$router.push('/404')
      }, 
      addToCart() {
        // console.log('加入购物车');
        if (this.topImages.length === 0) {
          alert('抱歉，商品走丢了!');
          this.$router.back();
          return;
        };
        this.$emit('addCart', 0)
      },
      payment() {
        // console.log('去付款，跳转到购物车页面');
        // console.log(this.topImages.length);
        if (this.topImages.length === 0) {
          alert('抱歉，商品走丢了!');
          this.$router.back();
          return;
        };
        this.$emit('payment', 1)
      }
    }
	}
</script>

<style scoped>
  .bottom-bar {
    height: 58px;
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    text-align: center;
  }

  .bar-item {
    flex: 1;
    display: flex;
  }

  .bar-left {
    background-color: #eee;
  }

  .bar-item>div {
    flex: 1;
  }

  .bar-left .text {
    font-size: 14px;
  }

  .bar-left .iconfont {
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    font-size: 22px;
  }

  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }

  .bar-right .cart {
    background-color: #ffe817;
    color: #aaa;
    font-size: 18px;
  }

  .bar-right .buy {
    background-color: #f69;
    font-size: 20px;
  }
</style>
