<template>
<div>
  <!-- <div class="login"></div> -->
  <!-- <select-login></select-login> -->
  <div class="me" v-if="user">
      <me-header></me-header>
      <me-order></me-order>
      <grey-line></grey-line>
      <me-tips></me-tips>
      <grey-line></grey-line>
      <me-func></me-func>
      <grey-line></grey-line>
  </div>
  <select-login v-else></select-login>
</div>
 
</template>

<script>
import SelectLogin from '../login/SelectLogin'
import MeHeader from './meChildren/MeHeader'
import MeOrder from './meChildren/MeOrder'
import greyLine from '../../components/greyLine'
import MeTips from './meChildren/MeTips'
import MeFunc from './meChildren/MeFunc'
import {mapState} from 'vuex'
export default {
    name:'Me',
    components: {
      SelectLogin,
      MeHeader,
      MeOrder,
      greyLine,
      MeTips,
      MeFunc
    },
    data() {
      return {
        user:''
      }
    },
    created() {
      this.user = localStorage.getItem('user')
    },
    computed: {
      ...mapState(['userInfo']),
    }

}
</script>

<style scoped>
.me {
  height: 100vh;
}

</style>