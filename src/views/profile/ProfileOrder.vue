<template>
  <div class="profile-order">
    <div class="order-container">
      <div class="order-title">
        <div>我的订单</div>
        <div>全部 ></div>
      </div>
      <ul class="order-nav">
        <li>
          <span class="iconfont icon-shouye1"></span>
          <div>个人主页</div>
        </li>
        <li>
          <span class="iconfont icon-zhibo1"></span>
          <div>我的直播</div>
        </li>
        <li>
          <span class="iconfont icon-fav-1"></span>
          <div>收藏</div>
        </li>
        <li>
          <span class="iconfont icon-guanzhu2"></span>
          <div>关注</div>
        </li>
        <li>
          <span class="iconfont icon-zuji"></span>
          <div>足迹</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileOrder"
};
</script>

<style lang="stylus" scoped>
.profile-order {
  padding: 11px;
  .order-container {
    width 100%
    padding-bottom 20px
    background-color #fff
    border-radius: 10px;
  }
  .order-title {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    margin 0 15px
    background-color: #fff;
    border-bottom: 2px solid #eee;
    

    div:first-child {
      font-size: 22px;
      font-weight: 600;
    }

    div:last-child {
      font-size: 16px;
      color: #888;
      line-height: 22px;
    }
  }

  .order-nav {
    background-color: #fff;
    display: flex;
    margin-top: 24px;

    li {
      flex: 1;
      text-align: center;

      span {
        font-size: 26px;
        color: #555;
      }

      div {
        margin-top: 8px;
        font-size: 15px;
        color: #666;
      }
    }
  }
}
</style>