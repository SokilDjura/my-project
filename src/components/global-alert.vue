<template>
  <b-alert
    :show='globalAlertData.timer'
    :variant='globalAlertData.type'
    class='text-center mt-4 px-4 mb-0'
    fade
    @dismissed='closeAlert'
  >
    <i
      v-if="globalAlertData.type === 'success'"
      class='uil uil-check-circle d-block display-4 mt-2 mb-3 text-success'
    ></i>
    <i
      v-if="globalAlertData.type === 'danger'"
      class='uil uil-exclamation-octagon d-block display-4 mt-2 mb-3 text-danger'
    ></i>
    <i
      v-if="globalAlertData.type === 'warning'"
      class='uil uil-exclamation-triangle d-block display-4 mt-2 mb-3 text-warning'
    ></i>
    <p>{{ globalAlertData.message }}</p>
  </b-alert>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'global-alert',
  computed: mapState(['globalAlertData']),
  methods: {
    ...mapMutations(['SET_GLOBAL_ALERT_DATA']),
    closeAlert() {
      this.SET_GLOBAL_ALERT_DATA({
        timer: 0,
        message: '',
        type: ''
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.alert {
  position: fixed;
  bottom: 20px;
  right: 20px;
  min-width: 200px;
  z-index: 100;
  padding: 0 10px !important;
  margin-top: 0 !important;
  i {
    margin-bottom: 0 !important;
  }
}
</style>