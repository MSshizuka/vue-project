<template>
  <nav-bar class="nav-bar">
    <span class="iconfont icon-weixin" slot="left" @click="login"></span>
    <div slot="center">
      <input
        type="text"
        placeholder="卫衣"
        @blur="inputBlur"
        @focus="inputFocus"
        @keyup="inputKeyUp"
        v-if="isShow"
      />
      <input
        type="search"
        placeholder="卫衣"
        @blur="inputBlur"
        @focus="inputFocus"
        @keyup="inputKeyUp"
        v-else
      />
      <span class="iconfont icon-sousuo5" v-if="isShow"></span>
    </div>
    <span class="iconfont icon-caidan" slot="right" @click="detail"></span>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "HomeNav",
  data() {
    return {
      isShow: true
    };
  },
  methods: {
    login() {
      // console.log("去往登录页");
      this.$router.push("/login");
    },
    detail() {
      // console.log("去往详情页");
      this.$router.push("/category");
    },
    inputBlur() {
      this.isShow = true;
    },
    inputFocus() {
      this.isShow = false;
    },
    inputKeyUp(e) {
      if (e.keyCode === 13) {
        this.$router.push("/category?index=3");
      }
    }
  },
  components: {
    NavBar
  }
};
</script>

<style lang="stylus" scoped>
.nav-bar {
  position: fixed;
  width: 100%;
  color: #aaa;
  font-size: 20px;
  background-color: #fff;

  .iconfont {
    font-size: 22px;
    vertical-align: middle;
  }

  input {
    background-color: #eee;
    height: 34px;
    border-radius: 3px;
    color: #aaa;
    vertical-align: middle;
    padding-left: 16px;
  }

  input:focus {
    border: 0;
    outline: #eee auto 0;
  }

  .icon-sousuo5 {
    position: absolute;
    left: 78%;
    top: 2px;
  }
}
</style>
