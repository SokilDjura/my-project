<template>
  <div>
    <b-modal
      :visible='isOpen'
      centered
      dialog-class='services-model'
      hide-footer
      size='lg'
    >
      <template #modal-header>
        <div></div>
      </template>
      <template #default>
        <b-row
          class='px-2 py-2'
          @mousedown.prevent.stop
        >
          <b-col
            v-for='item in servicesCards'
            :key='item.subscription.id'
            cols='3'
          >
            <b-card
              :class='item.subscription.color'
              class='d-flex flex-column align-items-center'
            >
              <b-button
                class='w-100'
                variant='light'
                @click='getClients'
              >
                <div class='text-center mb-1 mt-1'>
                  <b-icon
                    :icon='item.subscription.icon'
                    font-scale='2'
                  />
                </div>
                <div class='text-center mb-1'>{{ item.subscription.name }}</div>
              </b-button>
              <hr class='my-0'/>
              <b-button
                class='w-100 one-time-button'
                variant='light'
                @click='getClients'
              >
                <div class='text-center'>{{ item.oneTime.name }}</div>
              </b-button>
            </b-card>
          </b-col>
        </b-row>
      </template>
    </b-modal>
    <clients-modal
      :is-open='isClientsModalOpen'
      @close-modal='closeClientsModal'
    />
  </div>
</template>

<script>
import ClientsModal from '@/components/modals/clients-modal'

export default {
  name: 'services-modal',
  components: {
    ClientsModal
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
      servicesCards: [
        {
          subscription: {
            id: 1,
            icon: 'people-fill',
            name: 'Груповий абонимент',
            color: 'first-color'
          },
          oneTime: {
            id: 2,
            name: 'Групове заняття'
          }
        },
        {
          subscription: {
            id: 3,
            icon: 'person-check-fill',
            name: 'Індивідуальний абонимент',
            color: 'second-color'
          },
          oneTime: {
            id: 4,
            name: 'Індивідувльне заняття'
          }
        },
        {
          subscription: {
            id: 5,
            icon: 'person-fill',
            name: 'Самостійний абонимент',
            color: 'third-color'
          },
          oneTime: {
            id: 6,
            name: 'Самостійне заняття'
          }
        },
        {
          subscription: {
            id: 7,
            icon: 'house-door-fill',
            name: 'Абонимент на оренду',
            color: 'fourth-color'
          },
          oneTime: {
            id: 8,
            name: 'Разова оренда'
          }
        }
      ],
      isClientsModalOpen: false
    }
  },
  methods: {
    getClients() {
      this.$emit('close-modal')
      this.isClientsModalOpen = true
    },
    closeClientsModal() {
      this.isClientsModalOpen = false
    }
  }
}
</script>

<style scoped>
.card-body {
  padding: 0;
}
.first-color {
  border-top: 5px solid #cae00d;
}
.second-color {
  border-top: 5px solid #3f8f1a;
}
.third-color {
  border-top: 5px solid #ffcc5e;
}
.fourth-color {
  border-top: 5px solid #cc5eff;
}
.one-time-button {
  height: 62px;
}

</style>
<style>
.services-model .modal-content .modal-header {
  display: none !important;
  border-bottom: 0 !important;
}
.services-model .modal-content .modal-footer {
  display: none !important;
  border-top: 0 !important;
}
</style>