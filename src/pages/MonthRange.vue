<template>
  <div class="border border-[tomato] w-[220px] m-auto">
    <div>
      <button @click="previousYear">&lt;</button>
      {{ year.get('year') }}年
      <button @click="nextYear">&gt;</button>
    </div>
    <div class="flex flex-wrap gap-2 w-[220px] border py-4">
      <div v-for="month in [1,2,3,4,5,6,7,8,9,10,11,12]" class="w-[30%] text-center"
           :class="[isSelected(year,month-1), isIncluded(year,month-1)]"
           :key="month" @click="chooseMonth(year, month-1)">{{ month }}月
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
      if (!this.selectedMonth.length) {
        this.selectedMonth = [this.year.add(month, 'month')];
      } else if (this.selectedMonth.length === 1) {
        if (this.year.add(month, 'month').isAfter(this.selectedMonth[0])) {
          this.selectedMonth = [this.selectedMonth[0], this.year.add(month, 'month')];
        } else {
          this.selectedMonth = [this.year.add(month, 'month'), this.selectedMonth[0]];
        }
      }
      console.log('selectedMonth', month, this.year.format('YYYY-MM'), this.selectedMonth.map(item => item.format('YYYY-MM')));
    },
    isSelected(year, month) {
      let result = false;
      result = this.selectedMonth[0]?.isSame(year.add(month, 'month')) || this.selectedMonth[1]?.isSame(year.add(month, 'month'));
      return result ? 'bg-[tomato]' : '';
    },
    isIncluded(year, month) {
      if (this.selectedMonth.length === 2) {
        let result = this.year.add(month, 'month').isBetween(this.selectedMonth[0], this.selectedMonth[1], 'month');
        console.log(dayjs(`${year}-${month}`).format('yyyy-MM'), result);
        return result ? 'bg-[tomato] bg-opacity-10' : '';
      }
    },
  },
};
</script>

<style scoped>

</style>
