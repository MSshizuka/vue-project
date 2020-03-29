// import BackTop from "@/components/BackTop";

// export const backTopMixin = {
//   // data() {
//   //   return {
//   //     isShowBackTop: false
//   //   }
//   // },
//   methods: {
//     backClick() {
//       this.refs.scroll.scrollTo(0,0,300);
//     }
//   },
//   components: {
//     BackTop
//   },
//   created() {
//     contentScroll();
//   }
// }

export const tabControlMixin = {
  data: function () {
    return {
      currentType: 'pop'
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      // console.log(this.currentType);
    }
  }
}