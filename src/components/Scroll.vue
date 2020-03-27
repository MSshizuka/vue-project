<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name:'Scroll',
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      console.log('刷新次数-----');
      this.scroll && this.scroll.refresh();
    },
    finishLoadMore() {
      // console.log('1');
      this.scroll.finishPullUp();
    }
  },
  mounted() {
    this.scroll = new BScroll(".wrapper", {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });

    this.scroll.on("scroll", position => {
      // console.log(position.y);
      this.$emit("scroll", position);
    });

    this.scroll.on("pullingUp", () => {
      // console.log('加载');
      this.$emit("pullUpLoad");
    });
  }
};
</script>