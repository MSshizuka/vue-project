<template>
  <div class="detail">
    <detail-nav />
    <scroll class="wrapper" ref="scroll">
      <div class="content">
        <div class="slide">
          <cube-slide :data="topImages">
            <cube-slide-item v-for="(item, index) in topImages" :key="index">
              <img :src="item" />
            </cube-slide-item>
          </cube-slide>
        </div>
        <detail-base-info :goods="goods" />
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/Scroll";

import DetailNav from "@/views/detail/DetailNav";
import DetailBaseInfo from "@/views/detail/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/DetailGoodsInfo";

import { getDetailData, Goods, Shop } from "@/network/detail.js";
import debounce from "@/utils/debounce.js"
export default {
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {}
    };
  },
  methods: {
    imageLoad () {
      this.$refs.scroll.refresh();
    }
  },
  created() {
    this.iid = this.$route.params.iid;

    getDetailData(this.iid).then(res => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      this.shop = new Shop(data.shopInfo);

      this.detailInfo = data.detailInfo
    });
  },
  components: {
    Scroll,
    DetailNav,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo
  }
};
</script>

<style lang="stylus" scoped>
.detail {
  position: relative;
  background-color: #fff;
  z-index: 10;
  .wrapper {
    height  calc(100vh - 99px)
    background-color #fff
    margin-top 44px
  }
}

.slide {
  width: 100%;
  height: 300px;

  img {
    width: 100%;
    max-width: 100%;
  }
}
</style>