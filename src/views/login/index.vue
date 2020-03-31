<template>
  <div class="login-process">
    <login-entry v-if="isShowEntry" @loginWay="loginWay" />
    <div v-else>
      <login-verify
        v-if="currentIndex >= 2"
        :loginData="loginData[currentIndex]"
        @loginWay="loginWay"
      />
      <login-quick v-else :loginData="loginData[currentIndex]" @loginWay="loginWay"/>
    </div>
    <!-- <input v-model="userName" placeholder="账号"> -->
    <!-- <input v-model="password" type="password" placeholder="密码"> -->
    <!-- <button type="primary" @click="login">登录</button> -->
  </div>
</template>

<script>
import LoginEntry from "@/views/login/LoginEntry";
import LoginVerify from "@/views/login/LoginVerify";
import LoginQuick from "@/views/login/LoginQuick";
export default {
  name: "Login",
  data() {
    return {
      loginData: [
        {loginBody: "微信", type:"wx"},
        {loginBody: "QQ", type:"qq"},
        { title: "免密登陆", loginBody: "手机号", loginVerify: "验证码" },
        {
          title: "账号登陆",
          loginBody: "用户名/邮箱/手机号",
          loginVerify: "密码"
        }
      ],
      isShowEntry: true,
      currentIndex: -1
    };
  },
  methods: {
    loginWay(index) {
      index === 0
        ? (this.currentIndex = 0)
        : index === 1
        ? (this.currentIndex = 1)
        : index === 2
        ? (this.currentIndex = 2)
        : (this.currentIndex = 3);
      this.isShowEntry = !this.isShowEntry;
    }
  },
  components: {
    LoginEntry,
    LoginVerify,
    LoginQuick
  }
  // methods: {
  //   login() {
  //     this.$store.dispatch('login', {username: this.userName}).then(res => {
  //       this.$router.push('/profile')
  //     }).catch(reason => console.log(reason))
  //   }
  // }
};
</script>

<style>
.red {
  bottom: #09bb07;
}
</style>

<style lang="stylus" scoped>
.login-process {
  position: fixed;
  background-color: #fff;
  z-index: 500;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-size: 12px;
}
</style>