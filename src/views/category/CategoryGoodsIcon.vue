<template>
  <div>
    <div class="item" v-for="(item, index) in subcategories.list" :key="index">
      <a :href="item.link">
        <img class="item-img" v-lazy="item.image" alt />
        <div class="item-text">{{item.title}}</div>
      </a>
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
  mounted() {
    console.log(this.subcategories);
  }
};
</script>