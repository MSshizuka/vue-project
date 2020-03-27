<template>
  <div class="plate">
    <div class="above" @click="aboveClick">上</div>
    <div class="below">
      <ul class="goodInfoBox">
        <li class="imageDsec">
          <div class="imageBox">
            <img :src="goodsInfo.imgURL" alt />
          </div>
          <div class="descInfoBox">
            <p>{{goodsInfo.title}}</p>
            <p>{{goodsInfo.desc}}</p>
            <span>￥{{goodsInfo.newPrice}}</span>
          </div>
        </li>
        <li class="typeSelect">
          <div class="topTypeTitle">颜色分类</div>
          <div class="typeContent">
            <div
              class="colorSelect"
              v-for="(item, index) in colorCategory"
              :key="index"
              @click="colorClick(index)"
            >
              {{item}}
              <span class="iconfont" :class="index==currentIndex ? 'icon-xuanzhong5' : ''"></span>
            </div>
          </div>
        </li>
        <li class="sureBtn">
          <div class="buyCount">
            <div class="asideTitle">购买数量</div>
            <div class="calculate">
              <span class="iconfont icon-ziyuan" @click="minusClick"></span>
              <span>{{goodsInfo.count}}</span>
              <span class="iconfont icon-ziyuan1" @click="addClick"></span>
            </div>
          </div>
          <div class="makeSure" @click="sureAdd">确定</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toast } from "cube-ui";
export default {
  name: "DetailSurePlate",
  data() {
    return {
      colorCategory: [
        "粉红色",
        "蓝色",
        "灰色",
        "黑色",
        "大红色",
        "绿色",
        "藏青色",
        "鹅黄色"
      ],
      currentIndex: 0
    };
  },
  props: {
    goodsInfo: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    aboveClick() {
      this.$emit("canclePlate");
    },
    colorClick(index) {
      this.currentIndex = index;
    },
    addClick() {
      this.$emit("addCount", 1);
    },
    minusClick() {
      if (this.goodsInfo.count <= 1) return;
      this.$emit("minusCount", 1);
    },
    sureAdd() {
      let obj = {};
      obj = {...this.goodsInfo};
      if (this.$parent.index) {
        this.$store.commit("addToCart", obj);
        this.$router.replace("/cart");
      } else {
        this.toast = Toast.$create({
          txt: "添加到购物车成功✔",
          time: 0
        });
        this.toast.show();
        let timer = setTimeout(() => {
          clearInterval(timer);
          this.toast.hide();
          setTimeout(() => {
            this.toast = Toast.$create({
              txt: "loading...",
              time: 0
            });
          }, 1000);
          // console.log(this.toast);
        }, 1000);
        this.$emit("canclePlate", this.goodsInfo.count);
        this.$store.commit("addToCart", obj);
      }
      //
    }
  }
};
</script>

<style scoped>
body {
  color: #eb9ba9;
}
</style>

<style lang="stylus" scoped>
.plate {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.9);
}

.above {
  height: 35%;
}

.below {
  height: 65%;
  border-radius: 10px 10px 0 0;
  background-color: #eee;
}

.goodInfoBox {
  width: 100%;
  height: 100%;
  overflow: hidden;

  li {
    width: 100%;
    box-sizing: border-box;
    // border: 1px solid red;
    height: 33.33%;
    overflow: hidden;
  }
}

.imageDsec {
  padding: 6px;
}

.imageBox {
  float: left;
  width: 30%;
  height: 100%;
  text-align: center;
  vertical-align: middle;

  img {
    max-width: 90%;
    height: 130px;
  }
}

.descInfoBox {
  width: 70%;
  float: right;

  p {
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p:first-child {
    font-size: 24px;
    font-weight: 600;
  }

  p:nth-child(2) {
    font-size: 18px;
    color: #333;
    margin: 16px 0;
  }

  span {
    color: #ff5b1e;
    font-size: 20px;
  }
}

.topTypeTitle {
  font-size: 22px;
  font-weight: 600;
  margin-left: 20px;
}

.typeContent {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}

.typeContent > div {
  position: relative;
  width: 100px;
  margin: 8px 0 0 20px;
  font-size: 16px;
  height: 16px;
  line-height: 16px;
  background-color: #eb9ba9;
  padding: 2px;
  color: #555;
  border-radius: 5px;
}

.typeContent > div > span {
  color: #fff;
  position: absolute;
  right: 0;
  font-size: 20px;
}

.buyCount {
  position: realtive;
  width: 94%;
  height: 70px;
  margin: 10px auto;
  // background-color lightgreen;
  border-top: 2px solid #ccc;
}

.asideTitle, .calculate {
  position: absolute;
  font-size: 20px;
  font-weight: 600;
  color: #555;
  bottom: 90px;
}

.calculate {
  right: 20px;

  .iconfont {
    font-size: 22px;
    padding: 0 5px;
  }
}

.makeSure {
  width: 94%;
  height: 40px;
  line-height: 40px;
  position: absolute;
  margin-left: 50%;
  text-align: center;
  transform: translateX(-50%);
  bottom: 4px;
  background-color: #ff8198;
  border-radius: 20px;
  font-size: 28px;
  color: #fff;
  font-weight: 600;
}
</style>