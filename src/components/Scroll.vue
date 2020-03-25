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
  data() {
    return {
      scroll: null
    }
  },
  methods:{
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    }
  },
  mounted() {
    this.scroll = new BScroll('.wrapper', {
      probeType: 3,
      pullUpLoad: true
    })

    this.scroll.on('scroll', position => {
      console.log(position.y);
      
    })

    this.scroll.on('pullingUp', () => {
      console.log('加载');
    })
  }
}
</script>