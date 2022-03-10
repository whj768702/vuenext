<template>
  <div class="border border-[tomato] w-[220px] m-auto">
    <div>
      <button @click="previousYear">&lt;</button>
      {{ year.get('year') }}年
      <button @click="nextYear">&gt;</button>
    </div>
    <div class="flex flex-wrap gap-2 w-[220px] border py-4">
      <div v-for="month in months" class="w-[30%] text-center"
           :class="[isSelected(month), isIncluded(month)]"
           :key="month" @click="chooseMonth(month)">{{ month.format('MM') }}月
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

export default {
  name: 'Month',
  data() {
    return {
      year: dayjs().startOf('year'),
      currentMonth: dayjs(),
      selectedMonth: [],
    };
  },
  computed: {
    months() {
      let result = [];
      for (let i = 0; i < 12; i++) {
        result.push(this.year.add(i, 'month'));
      }
      return result;
    },
  },
  methods: {
    previousYear() {
      this.selectedMonth = [];
      this.year = this.year.subtract(1, 'year');
    },
    nextYear() {
      this.selectedMonth = [];
      this.year = this.year.add(1, 'year');
    },
    chooseMonth(month) {
      if (!this.selectedMonth.length) {
        this.selectedMonth = [month];
      } else if (this.selectedMonth.length === 1) {
        if (month.isAfter(this.selectedMonth[0])) {
          this.selectedMonth = [this.selectedMonth[0], month];
        } else {
          this.selectedMonth = [month, this.selectedMonth[0]];
        }
      }
      console.log('selectedMonth', this.selectedMonth.map(item => item.format('YYYY-MM')));
    },
    isSelected(month) {
      let result = false;
      result = this.selectedMonth[0]?.isSame(month) || this.selectedMonth[1]?.isSame(month);
      return result ? 'bg-[tomato]' : '';
    },
    isIncluded(month) {
      if (this.selectedMonth.length === 2) {
        let result = month.isBetween(this.selectedMonth[0], this.selectedMonth[1], 'month');
        return result ? 'bg-[tomato] bg-opacity-10' : '';
      }
    },
  },
};
</script>

<style scoped>

</style>
