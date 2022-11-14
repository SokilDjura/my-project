<template>
  <div id='app'>
    <global-alert/>
    <router-view/>
  </div>
</template>

<script>
import { notificationMethods } from '@/store/helpers'
import GlobalAlert from '@/components/global-alert'

export default {
  name: 'App',
  components: {
    GlobalAlert
  },
  methods: {
    clearNotification: notificationMethods.clear
  },
  watch: {
    $route() {
      this.clearNotification()
    }
  }
}
</script>
