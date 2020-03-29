<template>
  <div class="goods-info-container">
    <goods-list-item v-for="(item, index) in categoryDetail" :key="index" :goods="item" :img="item.img"/>
  </div>
</template>

<script>
import GoodsListItem from "@/components/GoodsListItem";

export default {
  name: "TabContentDetail",
  components: {
    GoodsListItem
  },
  props: {
    categoryDetail: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.goods-info-container {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  /* justify-content: space-around; */
}
</style>