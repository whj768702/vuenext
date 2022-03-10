<template>
  <div class="calendar">
    <div class="header">
      <button @click="previousMonth">&lt;</button>
      {{ year }}年{{ showMonth }}月
      <button @click="nextMonth">&gt;</button>
    </div>
    <div class="week-type">
      <span v-for="i in weekdays" :key="i" class="cell">{{ i }}</span>
    </div>
    <div class="week-day">
      <span v-for="(day, index) in fortyDays" :key="index" class="cell" @click="chooseDay(day)"
            :class="{ 'month-include': isInMonth(day), 'month-exclude': !isInMonth(day), 'selected': isSelected(day),
             'bg-[tomato] bg-opacity-10': isIncluded(day)}">
      {{ day.date() }}</span>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

export default {
  name: 'DayRange',
  computed: {
    fortyDays() {
      const firstDayOfMonth = dayjs(new Date(this.year, this.month)).date(1);
      const week = firstDayOfMonth.day();
      const startDay = firstDayOfMonth - week * 60 * 60 * 1000 * 24;
      const result = [];
      for (let i = 0; i < 42; i++) {
        result.push(dayjs(startDay).add(i, 'days'));
      }
      return result;
    },
    showMonth() {
      console.log('month: ', this.month);
      return this.month + 1;
    },
  },
  data() {
    return {
      year: dayjs().get('year'),
      month: dayjs().get('month'),
      weekdays: ['日', '一', '二', '三', '四', '五', '六'],
      selectedDay: [],
    };
  },
  methods: {
    isSelected(day) {
      let result = false;
      result = this.selectedDay[0]?.isSame(day) || this.selectedDay[1]?.isSame(day);
      return result ? 'bg-[tomato]' : '';
    },
    isIncluded(day) {
      if (this.selectedDay.length === 2) {
        let result = day.isBetween(this.selectedDay[0], this.selectedDay[1], 'day');
        return result;
      }
    },
    chooseDay(day) {
      if (this.isInMonth(day)) {
        if (!this.selectedDay.length) {
          this.selectedDay.push(day);
        } else if (this.selectedDay.length === 1) {
          if (day.isAfter(this.selectedDay[0])) {
            this.selectedDay.push(day);
          } else {
            this.selectedDay = [this.selectedDay[0], day];
          }
        }
      }
      console.log('selectedDay: ', this.selectedDay);
    },
    isInMonth(day) {
      const firstDayOfMonth = dayjs(new Date(this.year, this.month)).startOf('month');
      const lastDayOfMonth = dayjs(new Date(this.year, this.month)).endOf('month');
      return day.isBetween(firstDayOfMonth, lastDayOfMonth, 'day', '[]');
    },
    previousMonth() {
      const currentShowDate = new Date(this.year, this.month);
      const calculatedDate = dayjs(currentShowDate).subtract(1, 'month');
      this.year = calculatedDate.get('year');
      this.month = calculatedDate.get('month');
      this.selectedDay = [];
    },
    nextMonth() {
      const currentShowDate = new Date(this.year, this.month);
      const calculatedDate = dayjs(currentShowDate).add(1, 'month');
      this.year = calculatedDate.get('year');
      this.month = calculatedDate.get('month');
      this.selectedDay = [];
    },
  },
};
</script>

<style lang="less">
.calendar {
  width: 800px;
  height: 600px;
  border: 1px solid tomato;

  .header {
  }

  .week-type {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .cell {
      font-size: 16px;
      font-weight: 500;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }

  .week-day {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .cell {
      padding-top: 25px;
      padding-bottom: 25px;
      width: calc(100% / 7);
      font-size: 14px;
      font-weight: 500;
    }

    .month-include {
      color: #000000;
    }

    .month-exclude {
      color: #b0b0b0;
    }

    .selected {
      background-color: tomato;
    }
  }
}

</style>
