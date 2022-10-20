<template>
  <b-sidebar
    :visible='true'
    backdrop-variant='dark'
    no-close-on-route-change
    no-header
    shadow
    width='80px'
  >
    <b-button
      v-b-modal.modal-1
      class='mt-1 mb-2 px-1 py-1 mx-auto d-flex align-items-center button-geo'
      variant='light'
    >
      <b-icon class='me-1' font-scale='0.9' icon='geo-alt-fill'/>
      <small>Головний</small>
    </b-button>
    <div class='mb-2 avatar-wrap'>
      <b-avatar class='mb-2 mx-1' size='72px' src='https://placekitten.com/300/300'></b-avatar>
      <div class='text-center'>Max</div>
    </div>
    <div class='text-center'>
      <b-icon class='btn-exit' font-scale='1.5' icon='box-arrow-right'/>
    </div>
    <hr class='my-2'/>
    <b-button
      v-for='item in sidebarButtons'
      :key='item.id'
      :to='{name: `${item.path}`}'
      class='px-1 my-1 mx-auto d-flex flex-column align-items-center sidebar-button'
      variant='light'
    >
      <b-icon :icon='item.icon' class='mb-1' font-scale='1.5'></b-icon>
      <small>{{ item.title }}</small>
    </b-button>
    <b-modal id='modal-1' title='BootstrapVue'>
      <p class='my-4'>Hello from modal!</p>
    </b-modal>
  </b-sidebar>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      sidebarButtons: [
        {
          id: 1,
          title: 'Повістка',
          icon: 'house-fill',
          path: 'DashboardPage'
        },
        {
          id: 2,
          title: 'Відмітка',
          icon: 'person-check-fill',
          path: 'CheckPage'
        },
        {
          id: 3,
          title: 'Розклад',
          icon: 'calendar2-week-fill',
          path: ''
        },
        {
          id: 4,
          title: 'Таблиці',
          icon: 'table',
          path: ''
        },
        {
          id: 5,
          title: 'Воронка',
          icon: 'graph-up',
          path: ''
        },
        {
          id: 6,
          title: 'Аналітика',
          icon: 'pie-chart-fill',
          path: ''
        },
        {
          id: 7,
          title: 'Модулі',
          icon: 'speedometer',
          path: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
.button-geo {
  font-size: 12px;
}
.avatar-wrap {
  cursor: pointer;
}
.btn-exit {
  cursor: pointer;
}
.sidebar-button {
  width: 76px;
}
</style>
