<template>
  <div class="goodsList">
    <goods-list-item v-for="(item, index) in goodsList" :key="index" :goods="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "@/components/GoodsListItem"

export default {
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem,
  }
};
</script>

<style lang="stylus" scoped>
.goodsList {
  display flex
  flex-wrap wrap
  justify-content space-around
  background-color #fff
}
</style>