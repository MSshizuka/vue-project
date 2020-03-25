<template>
  <div class="home">
    <home-nav />
    <div class="slide">
      <cube-slide ref="slide" :data="banner">
        <cube-slide-item
          v-for="(item, index) in banner"
          :key="index">
          <a :href="item.link">
            <img :src="item.image" />
          </a>
        </cube-slide-item>
      </cube-slide>
    </div>
    <home-recommend :recommends="recommend" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNav from '@/views/home/HomeNav.vue';
import HomeRecommend from '@/views/home/HomeRecommend.vue';

import { getHomeMultidata } from '@/network/home.js';

export default {
  name: 'home',
  data() {
    return {
      banner: [],
      recommend: [],
    };
  },
  computed: {},
  methods: {},
  created() {
    getHomeMultidata().then((res) => {
      console.log(res.data);
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  },
  components: {
    HomeNav,
    HomeRecommend,
  },
};
</script>

<style lang="stylus" scoped>
.slide {
  width: 100%;
  height: 195px;
}

img {
  width: 100%;
  max-width: 100%;
}
</style>
