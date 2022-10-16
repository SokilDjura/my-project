<template>
  <b-sidebar
    backdrop-variant='dark'
    no-header
    :visible='true'
    width='80px'
    shadow
  >
    <b-button
      v-b-modal.modal-1
      class='mt-1 mb-2 px-1 py-1 mx-auto d-flex align-items-center button-geo'
      variant="light"
    ><b-icon icon='geo-alt-fill' font-scale='0.9' class='me-1'/>
      <small>Головний</small>
    </b-button>
    <div class='mb-2 avatar-wrap'>
      <b-avatar size='72px' src='https://placekitten.com/300/300' class='mb-2 mx-1'></b-avatar>
      <div class='text-center'>Max</div>
    </div>
    <div class='text-center'>
      <b-icon icon="box-arrow-right" font-scale="1.5" class='btn-exit'/>
    </div>
    <hr class='my-2'/>
    <div v-for='item in sidebarButtons' :key='item.id'>
      <b-button
        variant="light"
        class='px-1 my-1'
      >
        <b-icon :icon='item.icon' font-scale="1.5"></b-icon>
        <small>{{ item.title }}</small>
      </b-button>
    </div>
    <b-modal id='modal-1' title='BootstrapVue'>
      <p class='my-4'>Hello from modal!</p>
    </b-modal>
  </b-sidebar>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return{
      sidebarButtons: [
        {
          id: 1,
          title: 'Повістка',
          icon: 'house-fill',
          path: '#'
        },
        {
          id: 2,
          title: 'Відмітка',
          icon: 'person-check-fill',
          path: '#'
        },
        {
          id: 3,
          title: 'Росклад',
          icon: 'calendar2-week-fill',
          path: '#'
        },
        {
          id: 4,
          title: 'Таблиці',
          icon: 'table',
          path: '#'
        },
        {
          id: 5,
          title: 'Воронка',
          icon: 'graph-up',
          path: '#'
        },
        {
          id: 5,
          title: 'Аналітика',
          icon: 'pie-chart-fill',
          path: '#'
        },
        {
          id: 5,
          title: 'Модулі',
          icon: 'speedometer',
          path: '#'
        },
      ]
    }
  }
}
</script>

<style scoped>
  .button-geo{
    font-size: 12px;
  }
  .avatar-wrap{
    cursor: pointer;
  }
  .btn-exit{
    cursor: pointer;
  }
</style>