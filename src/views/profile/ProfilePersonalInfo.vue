<template>
  <div class="personal-center">
    <nav-bar>
      <span class="iconfont icon-fanhui" slot="left" @click="backUp"></span>
      <span slot="center" class="person-center">个人信息</span>
    </nav-bar>
    <div class="head-img">
      <a href="javascript:;" class="change-head">
        <span class="change-head-title">更换头像</span>
        <img src="@/assets/img/common/head-portrait.jpg" alt />
      </a>
    </div>
    <div class="personal-detail">
      <div>
        <h3>用户名</h3>
        <input type="text" :value="this.$store.state.userData[0].username" />
      </div>
      <div>
        <h3>邮箱</h3>
        <input type="text" :value="this.$store.state.userData[0].usermail" />
      </div>
      <div>
        <h3>手机号</h3>
        <input type="text" value="" />
      </div>
      <div>
        <h3>所在地</h3>
        <input type="text" value="" />
      </div>
    </div>
    <div class="logout" @click="logout">退出</div>
  </div>
</template>

<script>
import { Toast } from "cube-ui";
import NavBar from "@/components/NavBar";
export default {
  name: "ProfilePersonalInfo",
  methods: {
    backUp() {
      this.$emit('hidePersonalInformation')
    },
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
      this.$emit('hidePersonalInformation')
      this.toast = Toast.$create({
        txt: "退出成功！",
        type: "txt",
        time: 1000
      });
      this.toast.show();
      this.$router.replace('/')
    }
  },
  components: {
    NavBar
  }
};
</script>

<style lang="stylus">
.personal-center {
  position: fixed;
  z-index: 500;
  width: 100%;
  height: 100%;
  background-color: #fff;

  .icon-fanhui {
    font-size: 20px;
  }

  .person-center {
    font-size: 20px;
    font-weight: 500;
    color: #555;
  }

  .head-img {
    width: 100%;
    text-align: center;
    padding: 40px 0;

    .change-head {
      display: block;
      margin: 0 auto;
      background-color: pink;
      width: 100px;
      height: 100px;
      max-width: 100px;
      max-height: 100px;
      border-radius: 50%;

      .change-head-title {
        position: absolute;
        font-size: 10px;
        color: #fff;
        top: 24%;
        left: 50%;
        transform: translateX(-50%);
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }

  .personal-detail {
    width: 90%;
    margin: 0 auto;
    font-size: 14px;
    color: #aaa;

    div {
      margin-bottom: 25px;

      input {
        width: 100%;
        font-size: 20px;
        padding: 14px 0 8px 0;
        outline: none;
        border-bottom: 1px solid #eee;
      }
    }
  }

  .logout {
    position: absolute;
    width: 100%;
    height: 50px;
    text-align: center;
    bottom: 0;
    font-size: 22px;
    line-height: 50px;
    background-color: #ccc;
    color: #fff;
  }
}
</style>