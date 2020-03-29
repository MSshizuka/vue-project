<template>
  <div class="profile-message">
    <ul class="message">
      <li> <div><span class="iconfont icon-wuliu"></span> </div><div>交易物流</div> </li>
      <li> <div><span class="iconfont icon-ziyuan2"></span> </div><div>活动消息</div> </li>
      <li> <div><span class="iconfont icon-dingyue"></span> </div><div>订阅消息</div> </li>
      <li> <div><span class="iconfont icon-tongzhi"></span> </div><div>通知消息</div> </li>
    </ul>
    <ul class="discounts">
      <li> <div><span class="iconfont icon-qiandao1"></span> </div><div>签到换券</div> </li>
      <li> <div><span class="iconfont icon-shezhi"></span> </div><div>系统设置</div> </li>
      <li> <div><span class="iconfont icon-kefu"></span> </div><div>客服平台</div> </li>
      <li> <div><span class="iconfont icon-xianshangchongzhi"></span> </div><div>充值中心</div> </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProfileMessage"
}
</script>

<style scoped>
.a {
  color: #f11212;
}
</style>

<style lang="stylus">
.profile-message 
  display flex
  padding 11px
  justify-content space-between
  ul
    width 45%
    background-color #fff
    padding 10px 0px 0px 10px
    border-radius 10px
  .message, .discounts
    display flex
    justify-content space-around
    flex-wrap wrap
    li 
      width 45%
      margin-bottom 8px
      div:first-child
        width 75%
        text-align center
        span  
          display block
          border-radius 14px
          padding 13px 0
          font-size 26px
          color #fff
        .icon-wuliu
          background-color #457add
        .icon-ziyuan2
          background-color #50ceee
        .icon-dingyue
          background-color #b8433f
        .icon-tongzhi
          background-color #ee8f50
        .icon-qiandao1
          background-color #92db4d
        .icon-shezhi
          background-color #eb4bc3
        .icon-kefu
          background-color #eec94e
        .icon-xianshangchongzhi
          background-color #f11212
      div:last-child
        margin 6px 0 6px -3px
        color #444
        font-weight 600
  .discounts
    background-color #fff
</style>