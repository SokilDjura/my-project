<template>
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
          <b-row class='mb-3'>
            <b-col class='wrapped-text-right pt-1' md='3'>Час:</b-col>
            <b-col>
              <b-button
                variant='link'
              >
                Вибрати час
              </b-button>
            </b-col>
          </b-row>
          <b-row>
            <b-col class='wrapped-text-right pt-1' md='3'>Клієнт:</b-col>
            <b-col>
              <selected-client-card @get-client='getSelectedClient'/>
            </b-col>
          </b-row>
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
          <b-row class='mb-3'>
            <b-col class='wrapped-text-right pt-1' md='3'>Час:</b-col>
            <b-col>
              <b-button
                variant='link'
              >
                Вибрати час
              </b-button>
            </b-col>
          </b-row>
          <b-row>
            <b-col class='wrapped-text-right pt-1' md='3'>Клієнт:</b-col>
            <b-col>
              <selected-client-card @get-client='getSelectedClient'/>
            </b-col>
          </b-row>
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
          <b-row class='mb-3'>
            <b-col class='wrapped-text-right pt-1' md='3'>Група:</b-col>
            <b-col>
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
            </b-col>
          </b-row>
          <b-row>
            <b-col class='wrapped-text-right pt-1' md='3'>Клієнт:</b-col>
            <b-col>
              <selected-client-card @get-client='getSelectedClient'/>
            </b-col>
          </b-row>
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
        class='mt-3'
        no-resize
        placeholder='Коментар'
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
</template>

<script>
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import SelectedClientCard from '@/components/selected-client-card'

export default {
  name: 'lesson-registration-modal',
  components: {
    Multiselect,
    SelectedClientCard
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
    saveLesson() {
      this.closeModal()
    },
    getSelectedClient(item) {
      this.lessonRegistration.client = item
    },
    closeModal() {
      this.$emit('close-modal')
    }
  }
}
</script>