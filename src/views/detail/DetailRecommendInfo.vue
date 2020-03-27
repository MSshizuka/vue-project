<template>
  <div class="recommend-info">
    <div class="info-header">热门推荐</div>
    <div class="goods-list">
      <goods-list-item
        v-for="(item, index) in recommendList"
        :key="index"
        :goods="item"
        :img="item.image"
      ></goods-list-item>
    </div>
  </div>
</template>

<script>
import GoodsListItem from "@/components/GoodsListItem";

export default {
  name: "DetailRecommendInfo",
  components: {
    GoodsListItem
  },
  props: {
    recommendList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.recommend-info {
  padding: 5px;
  background-color: #fff;
}

.info-header {
  line-height: 40px;
  padding-left: 8px;
  font-size: 15px;
  color: #333;
}

.goods-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
