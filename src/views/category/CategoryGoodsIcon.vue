<template>
  <div class="icon-show-box">
    <div class="item" v-for="(item, index) in subcategories.list" :key="index" @click="itemClick">
      <!-- <a :href="item.link"> -->
      <img class="item-img" v-lazy="item.image" alt />
      <div class="item-text">{{item.title}}</div>
      <!-- </a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryGoodsIcon",
  props: {
    subcategories: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemClick() {
      this.$router.push('/404')
    }
  }
};
</script>

<style lang="stylus" scoped>
.icon-show-box {
  padding 20px 8px
  display flex
  flex-wrap wrap
  .item {
    width 86px
    text-align center
    font-size 12px
    .item-img {
      width 80%
    }
    .item-text {
      margin-top 15px
      color #666
    }
  }

  .item:nth-child(n+4) {
    margin-top 15px
  }
}
</style>