<template>
  <b-modal
    :visible='isOpen'
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
          <p>Hello</p>
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
          <p>Hello</p>
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
          <p>Hello</p>
        </b-tab>
      </b-tabs>
    </b-card>
    <template #modal-footer>
      <b-button variant='success'>Зберегти</b-button>
      <b-button variant='outline-secondary'>Відмінити</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'lesson-registration-modal',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    closeModal() {
      this.$emit('close-modal')
    }
  }
}
</script>

<style scoped>

</style>