<template>
  <div id="app">
    <div class="container">
      <keep-alive exclude="Detail,DetailBottomBar">
        <router-view></router-view>
      </keep-alive>
      <div class="footer">
        <cube-tab-bar v-model="selectedLabelDefault" :data="tabs" @change="changeHandler"></cube-tab-bar>
      </div>
    </div>
    <div class="verify" v-show="isShow">
      <div class="verify-container" v-show="isShow">
        <div class="verify-title">确认将这{{this.$store.getters.count}}项删除吗?</div>
        <div class="verify-content">
          <span class="verfiy-cancel" @click="verifyCancel">我再想想</span>
          <span class="verfiy-sure" @click="verifySure">确认</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "cube-ui";
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
          label: "商城",
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
      isShow: false
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
      this.$router.push(value);
    },
    verifyCancel() {
      this.isShow = false;
    },
    verifySure() {
      this.$store.commit("deleteGoods");
      this.toast = Toast.$create({
        txt:"删除成功!",
        type: "txt",
        time : 1000
      });
      this.toast.show();
      this.isShow = false;
    }
  },
  mounted() {
    this.$bus.$on("sureDeleted", () => {
      this.isShow = true;
    });
  },
};
</script>

<style lang="stylus">
html, body, #app {
  width: 100%;
  height: 100%;
  background-color: #fff;
}

#app {
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  overflow: hidden;
  background-color: #fff;
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #f2f2f2;
  background-color: #fff;
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

.verify {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 500;
}

.verify-container {
  position: fixed;
  width: 240px;
  height: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
}

.verify-title {
  width: 100%;
  padding: 20px 0;
  font-size: 18px;
  line-height: 18px;
  color: #333;
  border-bottom: 1px solid #ccc;
}

.verify-content {
  display: flex;
}

.verify-content > span {
  display: block;
  flex: 1;
  font-size: 20px;
  padding: 10px 0;
}

.verify-content > .verfiy-cancel {
  border-right: 1px solid #ccc;
  color: #888;
}

.verify-content > .verfiy-sure {
  color: #f36666;
}
</style>
