<template>
  <div>
    <cart-list-item v-for="item in this.$store.state.cartList" :key="item.iid" :data="item"/>
  </div>
</template>

<script>
import CartListItem from "@/views/cart/CartListItem"
export default {
  name:"CartList",
  components: {
    CartListItem
  }
}
</script>