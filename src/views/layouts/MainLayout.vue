<template>
  <div>
    <header-component/>
    <sidebar-component/>
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
    },
  }
</script>
