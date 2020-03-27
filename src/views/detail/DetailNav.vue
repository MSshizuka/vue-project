<template>
  <nav-bar class="nav-bar">
    <span slot="left" class="iconfont icon-fanhui1" @click="back"></span>
    <a slot="center" class="titles">
      <div v-for="(item, index) in titles" :key="index" :class="currentIndex === index ? 'active' : null" @click="titleClick(index)">{{item}}</div>
    </a>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: "DetailNav",
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
      // console.log(this.$el);
      this.$emit('titleClick', index);
    },
    back() {
      // console.log(this.$parent);
      // this.$parent.$destroy();
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
