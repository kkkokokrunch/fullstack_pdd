<template>
  <div class="birth-popup">
     <van-field
      readonly
      clickable
      name="datetimePicker"
      :value="value"
      label="生日"
      placeholder="点击选择"
      @click="showPicker = true"
      input-align="right"
      is-link
    />
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker
          type="date"
          @confirm="onConfirm"
          @cancel="showPicker = false"
          :min-date="minDate"
          :max-date="maxDate"
        />
      </van-popup>
  </div>
</template>

<script>
export default {
	name:'BirthPopup',
	data() {
		return {
			value: '',
            showPicker: false,
            minDate: new Date(1940, 0, 1),
            maxDate: new Date(),
            currentDate: new Date(),
		}
	},
	methods: {
		onConfirm(date) {
            // this.value = date;
            this.value = date.getFullYear() + '年' + (Number(date.getMonth()) + 1) + '月' + date.getDate() + '日 '
            this.showPicker = false;
        },
	},
}
</script>

<style>

</style>