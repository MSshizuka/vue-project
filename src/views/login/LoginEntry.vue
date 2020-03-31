<template>
  <div class="login-container">
    <div class="iconfont icon-fanhui" @click="backUp"></div>
    <h1 class="login-title">登录</h1>
    <div class="wx-button">
      <span class="iconfont icon-weixin2"></span>
      <span @click="itemClickWX">微信登陆</span>
    </div>
    <div class="login-other">
      <h3 class="login-other-title">其他登录方式</h3>
      <ul class="login-other-list">
        <li @click="itemClickQQ">
          <a href="javascript:;" class="iconfont icon-qq"></a>
          <p>QQ登录</p>
        </li>
        <li @click="itemClickPhone">
          <a href="javascript:;" class="iconfont icon-shouji1"></a>
          <p>免密登录</p>
        </li>
        <li @click="itemClickPws">
          <a href="javascript:;" class="iconfont icon-zhanghao"></a>
          <p>账号登录</p>
        </li>
      </ul>
      <div class="register-entry" @click="register">新人注册 ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginEntry",
  methods: {
    backUp() {
      this.$router.back();
    },
    itemClickWX() {
      this.$emit('loginWay', 0)
    },
    itemClickQQ() {
      this.$emit('loginWay', 1)
    },
    itemClickPhone() {
      this.$emit('loginWay', 2)
    },
    itemClickPws() {
      this.$emit('loginWay', 3)
    },
    register() {
      this.$router.push('/register')
    }
  }
};
</script>

<style lang="stylus">
.login-container {
  width: 84%;
  margin: 0 auto;
  padding-bottom: 1rem;
  text-align: center;

  .icon-fanhui {
    position: absolute;
    top: 18px;
    left: 18px;
    font-size: 22px;
    color: #555;
  }

  .login-title {
    margin: 90px 0 65px;
    font-size: 28px;
    font-weight: 500;
    color: #444;
    letter-spacing: 0.02rem;
  }

  .wx-button {
    background-color: #09bb07;
    line-height: 50px;
    border-radius: 50px;
    font-size: 12px;
    color: #5e5e5e;

    span {
      font-size: 18px;
      color: #ffffff;
      margin: 0 7px;
    }
  }

  .login-other {
    margin-top: 82px;

    .login-other-title {
      color: #999;
      font-size: 15px;
      margin: 40px 0 15px;
      line-height: 22px;
    }

    .login-other-list {
      padding: 30px 0;
      display: flex;
      flex: 0 1 auto;
      justify-content: space-around;
      font-size: 13px;
      color: #666;

      a {
        display: block;
        font-size: 36px;
        padding: 15px 0;
      }
    }

    .register-entry {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      padding: 20px 0;
      font-size: 20px;
      color: #fff;
      background-color: #aaa;
    }
  }
}
</style>