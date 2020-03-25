<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  margin-top: 10px;
  font-size: 14px;
  padding-bottom: 30px;
  border-bottom: 10px solid #eee;
  background-color: #fff;
}

.recommend-item {
  flex: 1;
  text-align: center;
}

.recommend img {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
</style>
