<template>
  <nav-bar>
    <div slot="left" class="cart-nav-left">购物车</div>
    <div slot="right" class="cart-nav-right" @click="effect">
      <span v-if="isShow">管理</span>
      <span v-else>完成</span>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/NavBar"
export default {
  name:"CartNav",
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    effect() {
      this.isShow = !this.isShow;
      this.$bus.$emit('changeEffect', this.isShow)
    }
  },
  components: {
    NavBar
  }
}
</script>

<style lang="stylus" scoped>
#nav-bar {
  width 100%
  position absolute;
  top 0;
  background-color #f6f6f6
}
.cart-nav-left {
  width 100px
  font-size 30px;  
  font-weight 600;
  color #666
}

.cart-nav-right {
  width 60px
  font-size 20px
}
</style>