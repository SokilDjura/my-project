<template>
    <v-date-picker
      v-model='newDate'
      :attributes='calendarAttrs'
      :firstDayOfWeek='2'
    >
      <template v-slot='{ togglePopover }'>
        <b-button
          variant='link'
          @click='togglePopover'
        >
          {{ showFullDate }}
        </b-button>
      </template>
    </v-date-picker>
</template>

<script>
export default {
  name: 'showFullDate',
  data() {
    return {
      calendarAttrs: [
        {
          key: 'today',
          highlight: {
            color: 'purple',
            fillMode: 'solid',
            contentClass: 'italic'
          },
          dates: new Date()
        }
      ],
      newDate: null
    }
  },
  computed: {
    isNewDay() {
      return this.newDate
        ? this.showDays(this.newDate.getDay())
        : this.showDays(this.calendarAttrs[0].dates.getDay())
    },
    isNewMonth() {
      return this.newDate
        ? this.showMonth(this.newDate.getMonth())
        : this.showMonth(this.calendarAttrs[0].dates.getMonth())
    },
    isNewDate() {
      return this.newDate
        ? this.newDate.getDate()
        : this.calendarAttrs[0].dates.getDate()
    },
    showFullDate() {
      return this.isNewDate + this.isNewMonth + this.isNewDay
    }
  },
  methods: {
    showDays(value) {
      if (value === 1) return ', Пн'
      if (value === 2) return ', Вт'
      if (value === 3) return ', Ср'
      if (value === 4) return ', Чт'
      if (value === 5) return ', Пт'
      if (value === 6) return ', Сб'
      if (value === 0) return ', Нд'
    },
    showMonth(value) {
      if (value === 0) return ' Січня'
      if (value === 1) return ' Лютого'
      if (value === 2) return ' Березня'
      if (value === 3) return ' Квітня'
      if (value === 4) return ' Травня'
      if (value === 5) return ' Червня'
      if (value === 6) return ' Липня'
      if (value === 7) return ' Серпня'
      if (value === 8) return ' Вересня'
      if (value === 9) return ' Жовтня'
      if (value === 10) return ' Листопада'
      if (value === 11) return ' Грудня'
    }
  }
}
</script>

<style scoped>
.btn-link {
  text-decoration: none;
  transition: .3s;
}
.btn-link:hover {
  text-decoration: underline;
}
</style>