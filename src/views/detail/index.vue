<template>
  <div class="detail">
    <detail-nav @titleClick="titleClick" ref="nav" />
    <scroll class="wrapper" ref="scroll" :probeType="3" @scroll="contentScroll" :data="[...detailInfo]">
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
        <detail-goods-info :detail-info="detailInfo" @goodsImageLoad="goodsImageLoad" />
        <detail-param-info ref="param" :param-info="paramInfo" />
        <detail-comment-info ref="comment" :comment-info="commentInfo" />
        <detail-recommend-info ref="recommend" :recommendList="recommendList" />
      </div>
    </scroll>
    <detail-bottom-bar @addCart="addToCart" @payment="payment" />
    <back-top @click.native="backClick" v-if="isShowBackTop" />
    <detail-sure-plate
      :goodsInfo="obj"
      v-show="isShowSelectedPlate"
      @canclePlate="canclePlate"
      @addCount="addCount"
      @minusCount="minusCount"
    />
  </div>
</template>

<script>

import Scroll from "@/components/Scroll";
import BackTop from "@/components/BackTop";

import DetailNav from "@/views/detail/DetailNav";
import DetailBaseInfo from "@/views/detail/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/DetailCommentInfo";
import DetailRecommendInfo from "@/views/detail/DetailRecommendInfo";
import DetailBottomBar from "@/views/detail/DetailBottomBar";
import DetailSurePlate from "@/views/detail/DetailSurePlate";

import {
  getDetailData,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from "@/network/detail.js";
import debounce from "@/utils/debounce.js";
// import { backTopMixin } from "@/utils/mixin.js"

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
      recommendList: [],
      detailImageLoad: null,
      titlesTopY: [],
      getTitlesTopY: null,
      currentTitle: 0,
      isShowBackTop: false,
      isShowSelectedPlate: false,
      index: -1,
      obj: {
        iid: "",
        imgURL: "",
        title: "",
        desc: "",
        newPrice: "",
        count: 0,
        isSure: true
      }
    };
  },
  // mixins: [backTopMixin],
  methods: {
    addCount(num) {
      this.obj.count += 1;
    },
    minusCount(num) {
      this.obj.count -= 1;
    },
    canclePlate(count) {
      console.log("---------------");
      if (count) {
        
      }
      this.isShowSelectedPlate = false;
      this.index = -1;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      Math.abs(position.y) > 1400
        ? (this.isShowBackTop = true)
        : (this.isShowBackTop = false);

      // console.log(position.y);
      if (-position.y >= this.titlesTopY[3]) {
        this.currentTitle = 3;
      } else if (-position.y >= this.titlesTopY[2]) {
        this.currentTitle = 2;
      } else if (-position.y >= this.titlesTopY[1]) {
        this.currentTitle = 1;
      } else {
        this.currentTitle = 0;
      }
      if (this.currentTitle !== this.$refs.nav.currentIndex) {
        this.$refs.nav.currentIndex = this.currentTitle;
      }
    },
    goodsImageLoad() {
      this.getTitlesTopY();
    },
    titleClick(index) {
      if (this.$refs.scroll) {
        this.$refs.scroll.scrollTo(0, -this.titlesTopY[index], 300);
      }
    },
    addToCart(index) {
      this.index = index;

      this.isShowSelectedPlate = true;
      // console.log("加到购物测", index);
    },
    payment(index) {
      this.index = index;

      this.isShowSelectedPlate = true;
      // console.log("立即购买", index);
    }
  },
  created() {
    this.iid = this.$route.params.iid;

    getDetailData(this.iid).then(res => {
      const data = res.result;
      // console.log(data);

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

      this.obj.iid = this.iid;
      this.obj.imgURL = this.topImages[0];
      this.obj.title = this.goods.title;
      this.obj.desc = this.goods.desc;
      this.obj.newPrice = this.goods.nowPrice;
      this.obj.count = 1;
    });

    getRecommend().then((res, error) => {
      if (error) return;
      this.recommendList = res.data.list;
    });

    this.getTitlesTopY = debounce(() => {
      this.$refs.scroll.refresh();
      this.titlesTopY = [];
      this.titlesTopY.push(0);
      this.titlesTopY.push(this.$refs.param.$el.offsetTop);
      this.titlesTopY.push(this.$refs.comment.$el.offsetTop);
      this.titlesTopY.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.titlesTopY);
    }, 200);
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh);
    this.detailImageLoad = () => {
      if (this.$refs.scroll) {
        refresh();
      }
    };
    this.$bus.$on("imageLoad", this.detailImageLoad);
  },
  destroyed() {
    this.$bus.$off("imageLoad", this.detailImageLoad);
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
    DetailBottomBar,
    BackTop,
    DetailSurePlate
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