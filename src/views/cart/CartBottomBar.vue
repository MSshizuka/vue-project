<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <span class="iconfont icon-gou1 selected"></span><span>全选</span>
    </div>
    <div class="bar-item bar-right">
      <div>
        <span class="total">合计:</span>
        <span class="price">￥36.00</span>
        <span class="payment">结算(1)</span>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "DetailBottomBar",
    methods: {

    }
	}
</script>

<style scoped>
  .bottom-bar {
    height: 58px;
    position: fixed;
    background-color: #f9f9f9;
    left: 0;
    right: 0;
    bottom: 55px;
    border: 1px solid #eee;
    border-right: 0;
    border-left: 0;
    display: flex;
  }

  .bar-left {
    width: 35%;
  }

  .bar-left > span {
    line-height: 58px;
    margin-left: 5px;
    font-size: 20px;
  }

  .icon-gou1 {
    color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
  }

  .bar-right  {
    width: 65%;
  }

  .bar-right > div {
    position: relative;
  }

  .bar-right > div > span {
    line-height: 58px;
  }

  .bar-right > div > .total {
    font-size: 20px;
  }

  .bar-right > div > .price {
    font-size: 18px;
    color: #f69;
  }

  .bar-right > div > .payment {
    position: absolute;
    display: block;
    height: 48px;
    line-height: 48px;
    font-size: 20px;
    right: 5px;
    bottom: 5px;
    background-color: #f69;
    padding: 0 20px;
    border-radius: 24px;
    color: #fff;
    font-size: 20px;
  }

  .selected {
    color: #f69;
  }



  


 
</style>