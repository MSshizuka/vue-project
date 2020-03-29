<template>
  <div class="cart-list-item">
    <ul class="goodInfoBox">
      <li class="imageDsec">
        <div class="imageBox">
          <img :src="data.imgURL" alt />
        </div>
        <div class="descInfoBox">
          <p>{{data.title}}</p>
          <p>{{data.desc}}</p>
          <span class="new-price">￥{{data.newPrice}}</span>
          <p class="calculate">
            <span class="iconfont icon-ziyuan" @click="minusClick"></span>
            <span>{{data.count}}</span>
            <span class="iconfont icon-ziyuan1" @click="addClick"></span>
          </p>
        </div>
        <div class="check-box">
          <span class="make-sure-tip">确认:</span><span class="iconfont icon-gou1" @click="sureClick" :class="data.isSure ? 'selected' : ''"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CartListItem",
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    minusClick() {
      this.$store.commit('modifyGoodCount', {
        obj: this.data,
        way: '-'
      })
    },
    addClick() {
      this.$store.commit('modifyGoodCount', {
        obj: this.data,
        way: '+'
      })
    },
    sureClick() {
      this.$store.commit('makeSureSelected', {
        obj: this.data
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.goodInfoBox {
  width: 100%;
  height: 100%;
  border-bottom: 10px solid #eee;
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
    color #444
  }

  p:nth-child(2) {
    font-size: 18px;
    color: #333;
    margin: 16px 0;
  }

  .new-price {
    color: #ff5b1e;
    font-size: 20px;
  }

  .calculate {
    font-size: 20px;
    font-weight: 600;
    color: #555;
    bottom: -10px;
  }

  .iconfont {
    font-size: 22px;
    padding: 0 5px;
  }
}

.check-box {
  position: relative;
}

.icon-gou1 {
  position: absolute;
  right: 30px;
  top 100px;
  font-size 22px;
  border 1px solid #bbb;
  border-radius 50%;
  color #fff
}

.selected {
  color: #f69;
}

.make-sure-tip {
  position: absolute;
  right: 70px;
  top 102px;
  font-size 20px
}
</style>