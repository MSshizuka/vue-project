<template>
  <nav-bar class="nav-bar">
    <span slot="left" class="iconfont icon-fanhui1" @click="back"></span>
    <div slot="center" class="titles">
      <div v-for="(item, index) in titles" :key="index" :class="currentIndex === index ? 'active' : null" @click="titleClick(index)">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      // console.log(index);
      this.currentIndex = index;
    },
    back() {
      this.$router.back();
    }
  },
  components: {
    NavBar,
  },
};
</script>

<style lang="stylus" scoped>
#nav-bar {
  width 100%
  position fixed 
  background-color #fff
  top 0
}
.titles {
  display flex
  justify-content space-around 
  font-size 14px
  color #aaa
}

.iconfont {
  color #aaa
}

.active {
  color #ff5777
}
</style>
