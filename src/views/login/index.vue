<template>
  <div class="login-process">
    <login-entry v-if="isShowEntry" @loginWay="loginWay"/>
    <login-verify v-else :data="loginData[currentIndex]" @loginWay="loginWay"/>
    <!-- <input v-model="userName" placeholder="账号"> -->
    <!-- <input v-model="password" type="password" placeholder="密码"> -->
    <!-- <button type="primary" @click="login">登录</button> -->
  </div>
</template>

<script>
import LoginEntry from "@/views/login/LoginEntry"
import LoginVerify from "@/views/login/LoginVerify"
export default {
  name: "Login",
  data() {
    return {
      loginData: [{},{}],
      isShowEntry: true,
      currentIndex: -1
    };
  },
  methods: {
    loginWay(index) {
      console.log(index);
      index === 0 ? this.currentIndex = 0 : (index === 1 ? this.currentIndex = 1 : this.currentIndex = 2);
      this.isShowEntry = !this.isShowEntry;
    }
  },
  components: {
    LoginEntry,
    LoginVerify
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