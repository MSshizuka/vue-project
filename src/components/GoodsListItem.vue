<template>
  <div class="goods" @click="toDetail">
    <img v-lazy="img" :alt="goods.title" @load="imageLoad" />
    <div class="goods-info">
      <p>{{goods.title}}</p>
      <span class="price">￥{{goods.price}}</span>
      <span class="iconfont icon-fav-1"></span>
      <span class="collect">{{goods.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    },
    img: {
      type: String
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("imageLoad");
    },
    toDetail() {
      // // console.log(this.$route.path.indexOf("detail") > -1);
      // if (this.$route.path.indexOf("detail") > -1) {
      //   // console.log(this.$route.path, this.goods.item_id);
      //   // this.$parent.$parent.$forceUpdate();
      //   return;
      // } else {
        this.$router.push("/detail/" + this.goods.iid);
      // }
    }
  }
};
</script>

<style lang="stylus" scoped>
.goods {
  width: 50%;
  padding-bottom: 40px;
  position: relative;
  text-align: center;
}

.goods img {
  width: 98%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: #ff5777;
  margin-right: 10px;
}

.goods-info .collect {
  position: relative;
}
</style>