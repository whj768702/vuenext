<template>
  <div class="calendar">
    <div class="header">
      <button @click="previousMonth">previous</button>
      {{ year }}年{{ showMonth }}月
      <button @click="nextMonth">next</button>
    </div>
    <div class="week-type">
      <span v-for="i in weekdays" :key="i" class="cell">{{ i }}</span>
    </div>
    <div class="week-day">
      <span v-for="(day, index) in fortyDays" :key="index" class="cell" @click="chooseDay(day)"
            :class="{ 'month-include': isInMonth(day), 'month-exclude': !isInMonth(day), 'selected':day.isSame(selectedDay) }">
      {{ day.date() }}</span>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

export default {
  name: 'Calendar',
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
      selectedDay: null,
    };
  },
  methods: {
    chooseDay(day) {
      if (this.isInMonth(day)) {
        this.selectedDay = day;
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
      this.selectedDay = null;
    },
    nextMonth() {
      const currentShowDate = new Date(this.year, this.month);
      const calculatedDate = dayjs(currentShowDate).add(1, 'month');
      this.year = calculatedDate.get('year');
      this.month = calculatedDate.get('month');
      this.selectedDay = null;
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
