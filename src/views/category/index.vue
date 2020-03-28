<template>
  <div>
    <nav-bar>
      <div slot="center">商城中心</div>
    </nav-bar>
    <div class="category-content">
      <category-tab-menu :categories="categories" @selectItem="selectItem" />
      <scroll id="catgory-content-box">
        <div>
          <div class="container-right">
          <category-goods-icon :subcategories="showSubcategory" />
          <category-goods-info />
        </div>
        <ul>
          <li>001</li>
          <li>002</li>
          <li>003</li>
          <li>004</li>
          <li>005</li>
          <li>006</li>
          <li>007</li>
          <li>008</li>
          <li>009</li>
          <li>010</li>
          <li>011</li>
          <li>012</li>
          <li>013</li>
          <li>014</li>
          <li>015</li>
          <li>016</li>
          <li>017</li>
          <li>018</li>
          <li>019</li>
          <li>020</li>
          <li>021</li>
          <li>022</li>
          <li>023</li>
          <li>024</li>
          <li>025</li>
          <li>026</li>
          <li>027</li>
          <li>028</li>
          <li>029</li>
          <li>030</li>
          <li>031</li>
          <li>032</li>
          <li>033</li>
          <li>034</li>
          <li>035</li>
          <li>036</li>
          <li>037</li>
          <li>038</li>
          <li>039</li>
          <li>040</li>
          <li>041</li>
          <li>042</li>
          <li>043</li>
          <li>044</li>
          <li>045</li>
          <li>046</li>
          <li>047</li>
          <li>048</li>
          <li>049</li>
          <li>050</li>
          <li>051</li>
          <li>052</li>
          <li>053</li>
          <li>054</li>
          <li>055</li>
          <li>056</li>
          <li>057</li>
          <li>058</li>
          <li>059</li>
          <li>060</li>
          <li>061</li>
          <li>062</li>
          <li>063</li>
          <li>064</li>
          <li>065</li>
          <li>066</li>
          <li>067</li>
          <li>068</li>
          <li>069</li>
          <li>070</li>
          <li>071</li>
          <li>072</li>
          <li>073</li>
          <li>074</li>
          <li>075</li>
          <li>076</li>
          <li>077</li>
          <li>078</li>
          <li>079</li>
          <li>080</li>
          <li>081</li>
          <li>082</li>
          <li>083</li>
          <li>084</li>
          <li>085</li>
          <li>086</li>
          <li>087</li>
          <li>088</li>
          <li>089</li>
          <li>090</li>
          <li>091</li>
          <li>092</li>
          <li>093</li>
          <li>094</li>
          <li>095</li>
          <li>096</li>
          <li>097</li>
          <li>098</li>
          <li>099</li>
          <li>100</li>
          <li></li>
        </ul>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import Scroll from "@/components/Scroll";

import NavBar from "@/components/NavBar.vue";
import CategoryTabMenu from "@/views/category/CategoryTabMenu.vue";
import CategoryGoodsInfo from "@/views/category/CategoryGoodsInfo";
import CategoryGoodsIcon from "@/views/category/CategoryGoodsIcon";

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
      currentIndex: -1
    };
  },
  created() {
    // 1.请求分类数据
    this._getCategory();
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
    _getCategory() {
      getCategory().then(res => {
        console.log(res.data);

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
        this._getSubcategories(0);
      });
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then(res => {
        this.categoryData[index].subcategories = res.data;
        this.categoryData = { ...this.categoryData };
        this._getCategoryDetail('pop');
        this._getCategoryDetail('sell');
        this._getCategoryDetail('new');
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
    CategoryGoodsIcon
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
    font-size: 26px;
    color: #fff;
  }
}

.category-content {
  position: relative;
  display: flex;
  height 100%
  top: 44px;
  right: 0;
  left: 0;
  bottom: 55px;
  width: 100%;
}

#catgory-content-box {
  width calc(100% - 100px)
  position: absolute;
  top 0
  right 0
  height: calc(100vh - 99px);
  background-color: #ccc;
}
</style>
