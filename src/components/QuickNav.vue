<template>
  <div>
    <div class="quick-nav nav-item nav-home" ref="navHome" v-show="isShow" @click="toHome">
      <div class="nav-icon iconfont icon-shouye1"></div>
    </div>
    <div class="quick-nav nav-item nav-category" ref="navCategory" v-show="isShow"  @click="toCategory">
      <div class="nav-icon iconfont icon-fenlei"></div>
    </div>
    <div class="quick-nav nav-item nav-cart" ref="navCart" v-show="isShow"  @click="toCart">
      <div class="nav-icon iconfont icon-gouwuche2"></div>
    </div>
    <div class="quick-nav nav-item nav-profile" ref="navProfile" v-show="isShow"  @click="toProfile">
      <div class="nav-icon iconfont icon-denglu-copy"></div>
    </div>
    <div class="quick-nav nav-set" @click="toggle" ref="navSet">
      <div class="nav-text">快捷导航</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuickNav",
  data() {
    return {
      isShow: false,
      flag: true
    };
  },
  methods: {
    toHome() {
      this.$router.push('/');
    },
    toCategory() {
      this.$router.push('/category');
    },
    toCart() {
      this.$router.push('/cart');
    },
    toProfile() {
      this.$router.push('/profile');
    },
    toggle() {
      if (!this.flag) return;
      this.flag = false;
      this.$emit("isToggle", {attr:!this.isShow});
      if (this.isShow) {
          this.$refs.navHome.style.bottom = this.$refs.navSet.style.bottom;
          this.$refs.navCategory.style.bottom = this.$refs.navSet.style.bottom;
          this.$refs.navCart.style.bottom = this.$refs.navSet.style.bottom;
          this.$refs.navProfile.style.bottom = this.$refs.navSet.style.bottom;
          setTimeout(() => {
            this.isShow = false;
          }, 600);
      } else {
          const num = parseFloat(this.$refs.navSet.style.bottom);
          if (!isNaN(num)) {
            this.$refs.navHome.style.bottom = num + "rem";
            this.$refs.navCategory.style.bottom = num + "rem";
            this.$refs.navCart.style.bottom = num + "rem";
            this.$refs.navProfile.style.bottom = num + "rem";
          } else {
            this.$refs.navHome.style.bottom = "2rem";
            this.$refs.navCategory.style.bottom = "2rem";
            this.$refs.navCart.style.bottom = "2rem";
            this.$refs.navProfile.style.bottom = "2rem";
            this.$refs.navSet.style.bottom = "2rem";
          }
          this.isShow = true;
          setTimeout(() => {
            if (!isNaN(num)) {
              this.$refs.navHome.style.bottom = num + 5.4 + "rem";
              this.$refs.navCategory.style.bottom = num + 4.05 + "rem";
              this.$refs.navCart.style.bottom = num + 2.7 + "rem";
              this.$refs.navProfile.style.bottom = num + 1.35 + "rem";
            } else {
              this.$refs.navHome.style.bottom = "7.4rem";
              this.$refs.navCategory.style.bottom = "6.05rem";
              this.$refs.navCart.style.bottom = "4.7rem";
              this.$refs.navProfile.style.bottom = "3.35rem";
            }
          }, 100);
      };
      setTimeout(() => {
        this.flag = true;
      },800)
    }
  }
};
</script>

<style lang="stylus" scoped>
.quick-nav {
  position: fixed;
  width: 43px;
  height: 43px;
  max-width: 43px;
  max-height: 43px;
  right: 10px;
  border-radius: 50%;
}

.nav-text {
  position: relative;
  top: 5px;
  right: -4px;
  width: 35px;
  height: 40px;
  line-height: 18px;
  font-size: 10px;
  color: #fff;
  text-align: center;
  font-weight: 500;
}

.nav-icon {
  text-align: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-size: 26px;
  color: #fff;
  z-index: 499;
}

.nav-item {
  z-index: 499;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.5s;
}

.nav-home {
  // bottom: 265px;
  bottom: 2rem;
  // transition: all 0.5s;
}

.nav-category {
  bottom: 2rem;
  // transition: all 0.4s;
}

.nav-cart {
  bottom: 2rem;
  // transition: all 0.3s;
}

.nav-profile {
  bottom: 2rem;
  // transition: all 0.2s;
}

.nav-set {
  bottom: 2rem;
  z-index: 500;
  transition: all 0.5s;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 499;
}
</style>