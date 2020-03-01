<template>
  <div class="sign-popup">
		<van-cell is-link @click="showDialog" title="个性签名">{{message}}</van-cell>
		<van-dialog v-model="show" title="请输入签名" show-cancel-button>
			<van-field
				v-model="message"
				rows="4"
				autosize
				type="textarea"
				maxlength="50"
				placeholder="请输入签名"
				show-word-limit
				size="large"
			/>
		</van-dialog>
  </div>
</template>

<script>
export default {
	name:'SignPopup',
	data() {
    return {
			show: false,
			message:''
    }
  },

  methods: {
    showDialog() {
      this.show = true;
    }
  }
}
</script>

<style>

</style>