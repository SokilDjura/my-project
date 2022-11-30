<template>
  <div>
    <b-modal
      :visible='isOpen'
      centered
      no-close-on-backdrop
      size='lg'
    >
      <template #modal-header>
        <h5 class='modal-title'>Запис на заняття</h5>
        <b-button
          class='btn-close'
          @click='closeModal'
        >
        </b-button>
      </template>
      <b-card no-body>
        <b-tabs align='center' card pills>
          <b-tab active>
            <template #title>
              <div class='d-flex flex-column justify-content-center align-items-center p-2'>
                <b-icon
                  font-scale='2'
                  icon='people-fill'
                />
                <span>Групове заняття</span>
              </div>
            </template>
            <div class='d-flex align-items-center'>
              <span>Час:</span>
              <b-button
                variant='link'
              >
                Вибрати час
              </b-button>
            </div>
            <div class='d-flex align-items-center'>
              <span>Клієнт:</span>
              <b-button
                v-if='lessonRegistration.client'
                class='d-flex w-100 ms-3 mt-3'
                variant='light'
                @click='getClients'
              >
                <div class='d-flex me-auto'>
                  <b-avatar class='me-2' size='45px' src='https://placekitten.com/300/300'></b-avatar>
                  <b-col class='me-auto'>
                    <div class='text-start'>{{ lessonRegistration.client.fullName }}</div>
                    <small>{{ lessonRegistration.client.status }}</small>
                  </b-col>
                </div>
                <div class='d-flex align-items-center mt-auto'>
                  <b-icon class='me-1' font-scale='0.9' icon='geo-alt-fill'/>
                  <small>{{ lessonRegistration.client.branch }}</small>
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
          </b-tab>
          <b-tab>
            <template #title>
              <div class='d-flex flex-column justify-content-center align-items-center p-2'>
                <b-icon
                  font-scale='2'
                  icon='person-check-fill'
                />
                <span>Самостійне заняття</span>
              </div>
            </template>
            <div class='d-flex align-items-center'>
              <span>Час:</span>
              <b-button
                variant='link'
              >
                Вибрати час
              </b-button>
            </div>
            <div class='d-flex align-items-center'>
              <span>Клієнт:</span>
              <b-button
                v-if='lessonRegistration.client'
                class='d-flex w-100 ms-3 mt-3'
                variant='light'
                @click='getClients'
              >
                <div class='d-flex me-auto'>
                  <b-avatar class='me-2' size='45px' src='https://placekitten.com/300/300'></b-avatar>
                  <b-col class='me-auto'>
                    <div class='text-start'>{{ lessonRegistration.client.fullName }}</div>
                    <small>{{ lessonRegistration.client.status }}</small>
                  </b-col>
                </div>
                <div class='d-flex align-items-center mt-auto'>
                  <b-icon class='me-1' font-scale='0.9' icon='geo-alt-fill'/>
                  <small>{{ lessonRegistration.client.branch }}</small>
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
          </b-tab>
          <b-tab>
            <template #title>
              <div class='d-flex flex-column justify-content-center align-items-center p-2'>
                <b-icon
                  font-scale='2'
                  icon='person-plus-fill'
                />
                <span>Набір в групу</span>
              </div>
            </template>
            <div class='d-flex align-items-center mb-2'>
              <span class='me-3'>Група:</span>
              <multiselect
                v-model='lessonRegistration.group'
                :options='lessonGroups'
                deselectLabel=''
                placeholder='Група'
                selectLabel=''
                selectedLabel=''
              >
                <span slot='noResult'>Не знайдено жодного елемента</span>
              </multiselect>
            </div>
            <div class='d-flex align-items-center'>
              <span>Клієнт:</span>
              <b-button
                v-if='lessonRegistration.client'
                class='d-flex w-100 ms-3 mt-3'
                variant='light'
                @click='getClients'
              >
                <div class='d-flex me-auto'>
                  <b-avatar class='me-2' size='45px' src='https://placekitten.com/300/300'></b-avatar>
                  <b-col class='me-auto'>
                    <div class='text-start'>{{ lessonRegistration.client.fullName }}</div>
                    <small>{{ lessonRegistration.client.status }}</small>
                  </b-col>
                </div>
                <div class='d-flex align-items-center mt-auto'>
                  <b-icon class='me-1' font-scale='0.9' icon='geo-alt-fill'/>
                  <small>{{ lessonRegistration.client.branch }}</small>
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
          </b-tab>
        </b-tabs>
      </b-card>
      <div class='comment-box'>
        <b-button
          v-if='!showCommentBox'
          variant='link'
          @click='showCommentBox = !showCommentBox'
        >
          Додати коментар
        </b-button>
        <b-form-textarea
          v-else
          no-resize
          placeholder='Коментар'
          class='mt-3'
        ></b-form-textarea>
      </div>
      <template #modal-footer>
        <b-button
          variant='success'
          @click='saveLesson'
        >
          Зберегти
        </b-button>
        <b-button
          variant='outline-secondary'
          @click='closeModal'
        >
          Відмінити
        </b-button>
      </template>
    </b-modal>
    <clients-modal
      :is-open='isClientsModalOpen'
      @close-modal='closeClientsModal'
      @get-client='getSelectedClient'
    />
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import ClientsModal from '@/components/modals/clients-modal'

export default {
  name: 'lesson-registration-modal',
  components: {
    Multiselect,
    ClientsModal
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      lessonRegistration: {
        time: null,
        client: null,
        group: null
      },
      lessonGroups: ['Первий', 'Другий', 'Інакший', 'Первий1', 'Другий1', 'Первий2', 'Другий2'],
      isClientsModalOpen: false,
      showCommentBox: false
    }
  },
  methods: {
    getClients() {
      this.isClientsModalOpen = true
    },
    getSelectedClient(item) {
      this.lessonRegistration.client = item
    },
    closeClientsModal() {
      this.isClientsModalOpen = false
    },
    saveLesson() {
      this.closeModal()
    },
    closeModal() {
      this.$emit('close-modal')
    }
  }
}
</script>

<style scoped>

</style>