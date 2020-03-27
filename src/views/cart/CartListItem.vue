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
            <span>￥{{data.newPrice}}</span>
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
  }
}
</script>

<style lang="stylus" scoped>
.goodInfoBox {
  width: 100%;
  height: 100%;
  border-bottom 10px solid #eee
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
</style>