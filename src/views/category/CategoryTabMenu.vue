<template>
  <scroll id="tab-menu">
    <ul class="menu-list">
      <li
        class="menu-list-item"
        v-for="(item, index) in categories"
        :key="index"
        :class="{active: index===currentIndex}"
        @click="itemClick(index)"
      >{{item.title}}</li>
    </ul>
  </scroll>
</template>

<script>
import Scroll from "@/components/Scroll";
export default {
  name: "TabMenu",
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Scroll
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("selectItem", index);
    }
  }
};
</script>

<style lang="stylus" scoped>
#tab-menu {
  // position fixed
  position relative
  background-color: #f6f6f6;
  height: calc(100vh - 97px)
  width: 100px;
  box-sizing: border-box;
}

.menu-list-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
  color #777
}

.menu-list-item.active {
  font-weight: 700;
  color: #ff5777;
  background-color: #fff;
  border-left: 3px solid #ff5777;
}
</style>