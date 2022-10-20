<template>
  <v-date-picker
    :attributes='calendarAttrs'
    :firstDayOfWeek='2'
  />
</template>

<script>
export default {
  name: 'DashboardPage',
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
      ]
    }
  }
}
</script>

<style scoped>

</style>