<template>
  <div class="profile-header">
    <div>
      <div class="personal-info">
        <a href="javascript:;" @click="showPersonalInformation">
          <img src="@/assets/img/common/head-portrait.jpg" alt class="head-portrait" />
        </a>
        <div class="nickname">
          <!-- <div>优质小仙女咿呀咿呀哟</div> -->
          <div>{{this.$store.state.userData[0].username}}</div>
          <span class="iconfont icon-xunzhang">分析勋章</span>
          <span class="iconfont icon-zuanshi1">成就勋章</span>
        </div>
        <div class="member-center">
          <div>
            <i>会员中心</i> 限时福利
          </div>
          <span class="iconfont icon-xinbaniconshangchuan-"></span>
        </div>
      </div>
    </div>
    <ul class="personal-nav">
      <li @click="showPersonalInformation">
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
</template>

<script>
export default {
  name: "ProfileHeader",
  methods: {
    showPersonalInformation() {
      this.$emit('showPersonalInformation')
    }
  }
};
</script>
<style>
.a {
  background-color: #e0925e;
}
</style>
<style lang="stylus" scoped>
.profile-header {
  padding: 20px 11px;
}

.personal-info {
  display: flex;
}

.personal-info > a {
  width: 68px;
  height: 65px;
}

.head-portrait {
  width: 60px;
  height: 60px;
  max-width: 60px;
  max-height: 60px;
  border-radius: 50%;
  border: 2px solid #fff;
}

.nickname {
  flex: 1;

  div {
    font-size: 20px;
    line-height: 40px;
  }

  span {
    padding: 3px 5px;
    background-color: #aaa;
    color: #fff;
    margin-right: 10px;
    font-size: 14px;
    border-radius: 10px;
  }
}

.member-center {
  width: 82px;
  height: 60px;
  font-size: 12px;
  text-align: center;
  line-height: 14px;

  div {
    display: block;
    padding: 5px 10px;
    background-color: #e0925e;
    margin-top: 12px;
    border-radius: 20px;

    i {
      font-style: normal;
      font-weight: 600;
    }
  }

  .icon-xinbaniconshangchuan- {
    position: absolute;
    top: 44px;
    right: 12px;
    z-index: 0;
  }
}

.personal-nav 
  display flex
  margin-top 24px
  li 
    flex 1
    text-align center
    span 
      font-size 26px
      color #555
    div
      margin-top 8px
      font-size 15px
      color #666

</style>