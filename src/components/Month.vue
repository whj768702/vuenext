<template>
  <div class="border border-[tomato] w-[220px] m-auto">
    <div>
      <button @click="previousYear">&lt;</button>
      {{ year.get('year') }}年
      <button @click="nextYear">&gt;</button>
    </div>
    <div class="flex flex-wrap gap-2 w-[220px] border py-4">
      <div v-for="month in [1,2,3,4,5,6,7,8,9,10,11,12]" class="w-[30%] text-center"
           :class="[isSelected(year,month)]"
           :key="month" @click="chooseMonth(year, month)">{{ month }}月
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
      year: dayjs(),
      currentMonth: dayjs(),
      selectedMonth: null,
    };
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
    chooseMonth(year, month) {
      this.selectedMonth = this.year.add(month - 1, 'month');
    },
    isSelected(year, month) {
      return this.selectedMonth?.isSame(this.year.add(month - 1, 'month')) ? 'bg-[tomato]' : '';
    },
  },
};
</script>

<style scoped>

</style>
