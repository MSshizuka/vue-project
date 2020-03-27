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
        <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
        <detail-param-info ref="param" :param-info="paramInfo"/>
        <detail-comment-info ref="comment" :comment-info="commentInfo"/>
        <detail-recommend-info ref="recommend" :recommendList="recommendList" />
      </div>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart" />
  </div>
</template>

<script>
import Scroll from "@/components/Scroll";

import DetailNav from "@/views/detail/DetailNav";
import DetailBaseInfo from "@/views/detail/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/DetailCommentInfo";
import DetailRecommendInfo from "@/views/detail/DetailRecommendInfo";
import DetailBottomBar from "@/views/detail/DetailBottomBar";

import {
  getDetailData,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from "@/network/detail.js";
import debounce from "@/utils/debounce.js";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: []
    };
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    },
    addToCart() {
      // 1.创建对象
      const obj = {};
      // 2.对象信息
      obj.iid = this.iid;
      obj.imgURL = this.topImages[0];
      obj.title = this.goods.title;
      obj.desc = this.goods.desc;
      obj.newPrice = this.goods.nowPrice;
      // 3.添加到Store中
      this.$store.commit("addCart", obj);
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

      this.detailInfo = data.detailInfo;

      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    });

    getRecommend().then((res, error) => {
      if (error) return;
      this.recommendList = res.data.list;
    });
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on("imageLoad", () => {
      if (this.$refs.scroll) {
        // this.$refs.scroll.refresh();
        refresh();
      }
    });
  },
  components: {
    Scroll,
    DetailNav,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar
  }
};
</script>

<style lang="stylus" scoped>
.detail {
  position: relative;
  background-color: #fff;
  z-index: 10;

  .wrapper {
    height: calc(100vh - 99px);
    background-color: #fff;
    margin-top: 44px;
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