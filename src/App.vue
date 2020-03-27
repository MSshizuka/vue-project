<template>
  <div id="app">
    <div class="container">
      <keep-alive exclude="Detail">
        <router-view></router-view>
      </keep-alive>
      <div class="footer">
        <cube-tab-bar v-model="selectedLabelDefault" :data="tabs" @change="changeHandler" v-show="isShow"></cube-tab-bar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
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
      ],
      isShow: true
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
      this.$router.replace(value);
    }
  },
};
</script>

<style lang="stylus">
html, body, #app {
  width: 100%;
  height: 100%;
  background-color #fff
}

#app {
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  overflow: scroll;
  background-color: #fff;
}

.footer {
  position fixed
  bottom 0  
  width 100%
  background: #f2f2f2;
  background-color #fff
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
