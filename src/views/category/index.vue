<template>
  <div>
    <nav-bar>
      <div slot="left" class="iconfont icon-fanhui" @click="toHome"></div>
      <div
        slot="center"
      >{{categories[this.currentIndex] ? categories[this.currentIndex].title : '正在流行'}}</div>
    </nav-bar>
    <div class="category-content">
      <category-tab-menu :categories="categories" @selectItem="selectItem" />
      <scroll
        id="catgory-content-box"
        :data="showCategoryDetail.concat(showSubcategory)"
        ref="scroll"
        :probeType="3"
      >
        <div class="container-right">
          <category-goods-icon :subcategories="showSubcategory" />
          <tab-control :titles="['综合', '新品', '销量']" @itemClick="tabClick"></tab-control>
          <category-goods-info :category-detail="showCategoryDetail" />
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import Scroll from "@/components/Scroll";
import NavBar from "@/components/NavBar.vue";
import TabControl from "@/components/TabControl.vue";

import CategoryTabMenu from "@/views/category/CategoryTabMenu.vue";
import CategoryGoodsInfo from "@/views/category/CategoryGoodsInfo";
import CategoryGoodsIcon from "@/views/category/CategoryGoodsIcon";

import { tabControlMixin } from "@/utils/mixin";
import debounce from "@/utils/debounce";

import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from "@/network/category.js";

export default {
  name: "Category",
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
      categoryImageLoad: null,
      scrollY: null
    };
  },
  mixins: [tabControlMixin],
  created() {
    // 1.请求分类数据
    this._getCategory(0);
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subcategories;
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].categoryDetail[
        this.currentType
      ];
    }
  },
  methods: {
    toHome() {
      this.$router.push('/')
    },
    _getCategory(index) {
      getCategory(index).then(res => {
        // console.log(res.data);

        // 1.获取分类数据
        this.categories = res.data.category.list;
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: []
            }
          };
        }
        // 3.请求第一个分类的数据
        this._getSubcategories(index);
      });
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then(res => {
        this.categoryData[index].subcategories = res.data;
        this.categoryData = { ...this.categoryData };
        this._getCategoryDetail("pop");
        this._getCategoryDetail("sell");
        this._getCategoryDetail("new");
      });
    },
    _getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then(res => {
        // 3.将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        this.categoryData = { ...this.categoryData };
      });
    },
    /**
     * 事件响应相关的方法
     */
    selectItem(index) {
      this._getSubcategories(index);
    }
  },
  components: {
    NavBar,
    Scroll,
    CategoryTabMenu,
    CategoryGoodsInfo,
    CategoryGoodsIcon,
    TabControl
  },
  mounted() {
    if (this.$refs.scroll) {
      const refresh = debounce(this.$refs.scroll.refresh);
      this.categoryImageLoad = () => {
        refresh();
      };
      this.$bus.$on("imageLoad", this.categoryImageLoad);
    }
    // console.log(this.$route.query.index);this._getCategory(0);
    // this.$route.query.index ? this.selectItem(this.$route.query.index) : null;
    
  },
  destroyed() {
    this.$bus.$off("imageLoad", this.categoryImageLoad);
  },
  activated() {
    if (this.$refs.scroll) {
      this.$refs.scroll.refresh();
      this.$refs.scroll.scrollTo(0, this.scrollY, 0);
      this.$refs.scroll.refresh();
    }
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.scroll.y;
  }
};
</script>

<style lang="stylus" scoped>
#nav-bar {
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #ff8198;

  div {
    font-size: 22px;
    color: #fff;
  }
}

.category-content {
  position: relative;
  display: flex;
  height: 100%;
  top: 44px;
  right: 0;
  left: 0;
  bottom: 55px;
  width: 100%;
}

#catgory-content-box {
  width: calc(100% - 100px);
  position: absolute;
  top: 0;
  right: 0;
  height: calc(100vh - 99px);
}
</style>
