<template>
  <div>
    <b-modal
      :visible='isOpen'
      centered
      dialog-class='clients-model'
      no-close-on-backdrop
    >
      <template #modal-header>
        <b-col cols='11'>
          <b-input placeholder='Пошук'/>
        </b-col>
        <b-button
          class='btn-close'
          @click='closeModal'
        >
        </b-button>
      </template>
      <template #default>
        <b-button
          v-for='item in clientsArr'
          :key='item.id'
          class='d-flex w-100 my-1'
          variant='light'
          @click='getClient(item)'
        >
          <div class='d-flex me-auto'>
            <b-avatar class='me-2' size='50px' src='https://placekitten.com/300/300'></b-avatar>
            <b-col class='me-auto'>
              <div class='text-start'>{{ item.fullName }}</div>
              <span>{{ item.status }}</span>
            </b-col>
          </div>
          <div class='d-flex align-items-center mt-auto'>
            <b-icon class='me-1' font-scale='0.9' icon='geo-alt-fill'/>
            <small>{{ item.branch }}</small>
          </div>
        </b-button>
      </template>
      <template #modal-footer>
        <b-button
          class='w-100'
          variant='outline-secondary'
          @click='createClient'
        >
          Новий клієнт
        </b-button>
      </template>
    </b-modal>
    <create-client-modal
      :is-open='isOpenCreateClient'
      @close-modal='closeCreateClientModal'
    />
  </div>
</template>

<script>
import CreateClientModal from '@/components/modals/create-client/create-client-modal'

export default {
  name: 'clients-modal',
  components: {
    CreateClientModal
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {
      selectedClient: null,
      clientsArr: [
        {
          id: 1,
          fullName: 'Max',
          branch: 'Головний',
          status: 'оформив абонимент'
        },
        {
          id: 2,
          fullName: 'Toni',
          branch: 'Не головний',
          status: 'не оформив абонимент'
        },
        {
          id: 3,
          fullName: 'Andre',
          branch: 'Не головний',
          status: 'перший контакт'
        },
        {
          id: 4,
          fullName: 'Dimon',
          branch: 'Головний',
          status: 'оформив абонимент'
        }
      ],
      isOpenCreateClient: false
    }
  },
  methods: {
    getClient(item) {
      this.$emit('get-client', item)
      this.closeModal()
    },
    closeModal() {
      this.$emit('close-modal')
    },
    createClient() {
      this.isOpenCreateClient = true
      this.closeModal()
    },
    closeCreateClientModal() {
      this.isOpenCreateClient = false
    }
  }
}
</script>
<style>
.modal-header .btn-close {
  padding: 0 !important;
  margin: 0 !important;
}
.modal-header .btn-close:hover {
  background-color: transparent !important;
}
.clients-model .modal-body {
  padding: 12px 16px;
}
</style>