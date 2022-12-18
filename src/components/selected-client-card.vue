<template>
  <div>
    <div>
      <b-button
        v-if='client'
        class='d-flex w-100'
        variant='light'
        @click='getClients'
      >
        <div class='d-flex me-auto'>
          <b-avatar class='me-2' size='45px' src='https://placekitten.com/300/300'></b-avatar>
          <b-col class='me-auto'>
            <div class='text-start'>{{ client.fullName }}</div>
            <small class='wrapped-text'>{{ client.status }}</small>
          </b-col>
        </div>
        <div class='d-flex align-items-center mt-auto'>
          <b-icon class='me-1' font-scale='0.9' icon='geo-alt-fill'/>
          <small>{{ client.branch }}</small>
        </div>
      </b-button>
      <b-button
        v-else
        variant='link'
        @click='getClients'
      >
        Вибрати клієнта
      </b-button>
    </div>
    <clients-modal
      :is-open='isClientsModalOpen'
      @close-modal='closeClientsModal'
      @get-client='getSelectedClient'
    />
  </div>
</template>

<script>
import ClientsModal from '@/components/modals/clients-modal'

export default {
  name: 'selected-client-card',
  components: {
    ClientsModal
  },
  props: {
    selectedClient: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      client: null,
      isClientsModalOpen: false
    }
  },
  created() {
    if (this.selectedClient) {
      this.client = this.selectedClient
    }
  },
  methods: {
    getClients() {
      this.isClientsModalOpen = true
    },
    closeClientsModal() {
      this.isClientsModalOpen = false
    },
    getSelectedClient(item) {
      this.client = item
      this.$emit('get-client', item)
    }
  }
}
</script>