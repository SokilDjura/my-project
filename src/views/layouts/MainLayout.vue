<template>
  <div>
    <header-component/>
    <sidebar-component/>
    <div class='page-content'>
      <router-view/>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/header-component'
import SidebarComponent from '@/components/sidebar-component'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    SidebarComponent
  }
}
</script>

<style scoped>
.page-content {
  background-color: #f4f4f4;
  padding-top: 80px;
  padding-left: 100px;
}
</style>