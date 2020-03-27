<template>
  <div class="goodsList">
    <goods-list-item v-for="item in goodsList" :key="item.iid" :goods="item" :img="item.show.img"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "@/components/GoodsListItem"

export default {
  name:"GoodsList",
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