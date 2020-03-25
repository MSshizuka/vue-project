<template>
  <div class="home">
    <scroll ref="scroll">
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
      <tab-control class="tab-control" :titles="['流行','新款','热卖']" @itemClick="itemClick" />
      <goods-list :goodsList="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick"/>
  </div>
</template>

<script>
// @ is an alias to /src

import TabControl from "@/components/TabControl";
import HomeRecommend from "@/views/home/HomeRecommend.vue";
import GoodsList from "@/components/GoodsList";
import Scroll from "@/components/Scroll";
import BackTop from "@/components/BackTop";

import { getHomeMultidata, getHomeData } from "@/network/home.js";

export default {
  name: "home",
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 10, list: [] },
        new: { page: 10, list: [] },
        sell: { page: 10, list: [] }
      },
      currentType: "pop"
    };
  },
  computed: {},
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },

    itemClick(index) {
      index === 0
        ? (this.currentType = "pop")
        : index === 1
        ? (this.currentType = "new")
        : (this.currentType = "sell");
    },

    getHomeDataList(type) {
      const page = this.goods[type].page + 1;
      getHomeData(type, page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  },
  created() {
    getHomeMultidata().then(res => {
      // console.log(res.data);
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });

    this.getHomeDataList("pop", 0);
    this.getHomeDataList("new", 0);
    this.getHomeDataList("sell", 0);
  },
  components: {
    HomeRecommend,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  }
};
</script>

<style lang="stylus" scoped>
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

.wrapper {
  height: calc(100vh - 99px);
}
</style>
