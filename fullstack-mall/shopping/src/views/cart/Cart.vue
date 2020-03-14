<template>
  <div class="cart">  
    <cart-list />
  </div>
</template>

<script>
import CartList from './children/CartList'
import {mapGetters} from 'vuex'
export default {
  name:'Cart',
  components: {
    CartList
  },
  computed: {
    ...mapGetters({
      length:'cartLength'
    })
  }
}
</script>

<style scoped>
.cart {
  height: 110vh;
}
</style>