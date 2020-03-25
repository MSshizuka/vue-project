<template>
  <div id="app">
    <div class="header">
      <home-nav />
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="footer">
      <cube-tab-bar v-model="selectedLabelDefault" :data="tabs" @change="changeHandler"></cube-tab-bar>
    </div>
  </div>
</template>

<script>
import HomeNav from "@/views/home/HomeNav.vue";
export default {
  data() {
    return {
      selectedLabelDefault: "/",
      tabs: [
        {
          icon: "iconfont icon-shouye1",
          label: "首页",
          value: "/" // value选中的值
        },
        {
          label: "分类",
          value: "/category",
          icon: "iconfont icon-fenlei"
        },
        {
          label: "购物车",
          value: "/cart",
          icon: "iconfont icon-gouwuche2"
        },
        {
          label: "我的",
          value: "/profile",
          icon: "iconfont icon-denglu-copy"
        }
      ]
    };
  },
  watch: {
    // 监控路由属性的变化
    $route: {
      handler(to, from) {
        this.selectedLabelDefault = to.path;
      },
      immediate: true
    }
  },
  methods: {
    changeHandler(value) {
      // if you clicked different tab, this methods can be emitted
      this.$router.push(value);
    }
  },
  components: {
    HomeNav
  }
};
</script>

<style lang="stylus">
html, body, #app {
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  overflow: scroll;
  background-color #fff
}

.footer {
  background: #f2f2f2;
}

.cube-tab {
  i {
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 10px;
  }
}

.cube-tab_active {
  color: #ff8198;
}
</style>
