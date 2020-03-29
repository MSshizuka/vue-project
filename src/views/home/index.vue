<template>
  <div class="home">
    <home-nav />
    <scroll
      ref="scroll"
      @scroll="scroll"
      :probe-type="2"
      :pullUpLoad="true"
      @pullingUp="loadMore"
      id="home-scroll"
      :data="goods[currentType].list"
    >
      <div class="home-content">
        <div class="slide">
          <cube-slide ref="slide" :data="banner">
            <cube-slide-item v-for="(item, index) in banner" :key="index">
              <a :href="item.link">
                <img :src="item.image" />
              </a>
            </cube-slide-item>
          </cube-slide>
        </div>
        <home-recommend :recommends="recommend" />
        <tab-control
          class="tab-control"
          :titles="['流行','新款','热卖']"
          @itemClick="itemClick"
          ref="tabControl"
        />
        <goods-list :goodsList="goods[currentType].list"></goods-list>
      </div>
    </scroll>
    <back-top @click.native="backClick" v-if="isShowBackTop" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNav from "@/views/home/HomeNav.vue";
import HomeRecommend from "@/views/home/HomeRecommend.vue";

import TabControl from "@/components/TabControl";
import GoodsList from "@/components/GoodsList";
import Scroll from "@/components/Scroll";
import BackTop from "@/components/BackTop";

import { getHomeMultidata, getHomeData } from "@/network/home.js";
import debounce from "@/utils/debounce.js";

export default {
  name: "home",
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 4, list: [] },
        new: { page: 4, list: [] },
        sell: { page: 4, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      scrollY: 0,
      imageLoad: null
    };
  },
  computed: {},
  methods: {
    loadMore() {
      // console.log('加载更多');
      this.getHomeDataList(this.currentType);
    },
    scroll(position) {
      Math.abs(position.y) > 1400
        ? (this.isShowBackTop = true)
        : (this.isShowBackTop = false);
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },

    itemClick(index) {
      // console.log(index);
      index === 0
        ? (this.currentType = "pop")
        : index === 1
        ? (this.currentType = "new")
        : (this.currentType = "sell");
    },

    //=>network
    getHomeDataList(type) {
      const page = this.goods[type].page + 1;
      getHomeData(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
      this.$refs.scroll.finishPullUp();
    }
  },
  mounted() {
    getHomeMultidata().then(res => {
      // console.log(res.data);
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });

    this.getHomeDataList("pop");
    this.getHomeDataList("new");
    this.getHomeDataList("sell");

    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.imageLoad = () => {
      if (this.$refs.scroll) {
        // this.$refs.scroll.refresh();
        refresh();
      }
    };
    this.$bus.$on("imageLoad", this.imageLoad);
  },
  activated() {
    // console.log(this.scrollY);
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.scrollY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.scroll.y;

    this.$bus.$off("imageLoad", this.imageLoad);
  },
  components: {
    HomeNav,
    HomeRecommend,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  }
};
</script>

<style lang="stylus" scoped>
#nav-bar {
  position: fixed;
  top: 0;
}

.class {
  height: 100vh;
}

.slide {
  width: 100%;
  height: 195px;
}

img {
  width: 100%;
  max-width: 100%;
  max-height: 100%;
}

.content {
  height: calc(100vh - 55px);
}

#home-scroll {
  height: calc(100vh - 99px);
  margin-top: 44px;
}
</style>
