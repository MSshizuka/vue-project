<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <span
        class="iconfont icon-gou1"
        @click="selectAllClick"
        :class="this.$store.state.isCheckedAll ? 'selected' : ''"
      ></span>
      <span>全选</span>
    </div>
    <div class="bar-item bar-right">
      <div v-if="isDelete">
        <span class="total">合计:</span>
        <span class="price">{{this.$store.getters.totalPrice}}</span>
        <span class="payment" @click="checkOut">结算{{this.$store.getters.number}}</span>
      </div>
      <div v-else>
        <span class="clear-cart iconfont icon-shanchu">清理购物车</span>
        <span class="delete-cart" @click="deleteGoods">删除</span>
      </div>
    </div>

    <!-- <div class="verify" v-show="isShow"> -->
      <!-- <div class="verify-container" v-show="isShow">
        <div class="verify-title">确认将这{{this.$store.getters.count}}项删除吗?</div>
        <div class="verify-content">
          <span class="verfiy-cancel" @click="verifyCancel">我再想想</span>
          <span class="verfiy-sure" @click="verifySure">确认</span>
        </div>
      </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  data() {
    return {
      isCheckedAll: true,
      isDelete: true,
      isShow: false
    };
  },
  methods: {
    checkOut() {
      if (!/\d+/.test(this.$store.getters.number)) {
        alert("亲~！请选择商品！");
      } else {
        console.log("判断是否登录，是则跳转支付页面，否则跳转登录页面");
      }
    },
    selectAllClick() {
      this.isCheckedAll = !this.isCheckedAll;
      this.$store.commit("selectAll", { selectedAll: this.isCheckedAll });
    },
    deleteGoods() {
      if (/\d+/.test(this.$store.getters.number)) {
        this.isShow = true;
        this.$bus.$emit("sureDeleted");
      } else {
        alert("亲~！请选择商品！");
      }
    },
    // verifyCancel() {
    //   this.isShow = false;
    // },
    // verifySure() {
    //   this.$store.commit("deleteGoods");
    //   this.isShow = false;
    // }
  },
  created() {
    this.selectAllClick();
  },
  mounted() {
    this.$bus.$on("changeEffect", (...args) => {
      // console.log(...args);
      this.isDelete = args[0];
    });
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 58px;
  position: fixed;
  background-color: #f9f9f9;
  left: 0;
  right: 0;
  bottom: 52px;
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

.bar-right {
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
}

.selected {
  color: #f69;
}

.delete-cart {
  position: absolute;
  display: block;
  height: 38px;
  line-height: 38px !important;
  right: 5px;
  border: 1px solid red;
  padding: 0 20px;
  font-size: 20px;
  border-radius: 24px;
  bottom: 7px;
  color: red;
}

.clear-cart {
  position: relative;
  top: 2px;
  right: -45px;
  font-size: 16px;
}

/* .verify {
  position: fixed;
  left: 0;
  right: 0;
  top: -44px;
  bottom: -55px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5000;
} */

/* .verify-container {
  position: fixed;
  width: 240px;
  height: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50000;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
}

.verify-title {
  width: 100%;
  padding: 20px 0;
  font-size: 18px;
  line-height: 18px;
  color: #333;
  border-bottom: 1px solid #ccc;
}

.verify-content {
  display: flex;
}

.verify-content > span {
  display: block;
  flex: 1;
  font-size: 20px;
  padding: 10px 0;
}

.verify-content > .verfiy-cancel {
  border-right: 1px solid #ccc;
  color: #888;
}

.verify-content > .verfiy-sure {
  color: #f36666;
} */
</style>