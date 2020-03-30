<template>
  <div class="account">
    <div class="account-header">
      <div class="iconfont icon-fanhui" @click="backUp"></div>
      <span>账号登录</span>
    </div>
    <div class="account-content">
      <div class="account-grounp">
        <div class="base-filed">
          <input type="text" id="filed_uname" class="base-field-core" placeholder="用户名/邮箱/手机号">
        </div>
        <div class="base-filed">
          <input type="password" id="filed_pws" class="base-field-core" placeholder="密码">
        </div>
      </div>
      <div class="login-button">
        <span>登录</span>
      </div>
      <p>
        <a href="javascript:;">忘记密码</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginVerify",
  methods: {
    backUp() {
      this.$emit('loginWay', -1)
    }
  }
}
</script>

<style lang="stylus">
.account
  width 100%
  text-align center
  .account-header
    width 100%
    border-bottom 1px solid #444
    .icon-fanhui 
      position: absolute;
      top: 18px;
      left: 18px;
      font-size: 22px;
      color: #555;
    span 
      position relative
      font-size 20px
      line-height 50px
      top 5px
      color #555
  .account-content
    color #5e5e5e
    padding 0 25px
    .account-grounp
      margin 55px 0
      .base-filed
        width 100%
        color #333
        font-size 20px
        padding 10px 0
        border-bottom 1px solid #ddd
        .base-field-core
          width 100%
          padding 0 8px
          outline none
    .login-button      
      background-color #ff5777
      line-height 50px
      border-radius 50px
      span 
        font-size 18px
        color #ffffff
        margin 0 15px
    p
      height  40px
      line-height 55px
      a 
        position relative
        font-size 14px
        padding 0 5px
        color #999
        left 130px
        
</style>