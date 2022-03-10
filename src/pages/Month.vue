<template>
  <div class="border border-[tomato] w-[220px] m-auto">
    <div>
      <button @click="previousYear">&lt;</button>
      {{ year.get('year') }}年
      <button @click="nextYear">&gt;</button>
    </div>
    <div class="flex flex-wrap gap-2 w-[220px] border py-4">
      <div v-for="(month,index) in months" class="w-[30%] text-center"
           :class="[isSelected(month)]"
           :key="index" @click="chooseMonth(month)">{{ month.format('MM') }}月
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: 'Month',
  data() {
    return {
      year: dayjs().startOf('year'),
      currentMonth: dayjs(),
      selectedMonth: null,
    };
  },
  computed: {
    months() {
      let result = [];
      for (let i = 1; i <= 12; i++) {
        result.push(this.year.add(i - 1, 'month'));
      }
      return result;
    },
  },
  methods: {
    previousYear() {
      this.selectedMonth = null;
      this.year = this.year.subtract(1, 'year');
    },
    nextYear() {
      this.selectedMonth = null;
      this.year = this.year.add(1, 'year');
    },
    chooseMonth(month) {
      this.selectedMonth = month;
    },
    isSelected(month) {
      return this.selectedMonth?.isSame(month) ? 'bg-[tomato]' : '';
    },
  },
};
</script>

<style scoped>

</style>
