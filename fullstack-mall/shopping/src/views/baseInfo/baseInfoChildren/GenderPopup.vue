<template>
  <div class="gender-popup">
    <van-field
			readonly
			clickable
			name="picker"
			:value="value"
			label="性别"
			placeholder="点击选择"
			@click="showPicker = true"
			input-align="right"
			is-link
		/>
		<van-popup v-model="showPicker" position="bottom">
			<van-picker
				show-toolbar
				:columns="columns"
				@confirm="onConfirm"
				@cancel="showPicker = false"
			/>
		</van-popup>
  </div>
</template>

<script>
export default {
	name:'GenderPopup',
	data() {
		return {
			value: '',
      columns: ['男', '女'],
      showPicker: false,
		}
	},
	methods: {
		onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
	},
}
</script>

<style>

</style>