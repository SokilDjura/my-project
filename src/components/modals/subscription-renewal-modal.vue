<template>
  <b-modal
    :visible='isOpen'
    centered
    no-close-on-backdrop
    size='lg'
  >
    <template #modal-header>
      <h5 class='modal-title'>Продовження абонементу</h5>
      <b-button
        class='btn-close'
        @click='closeModal'
      >
      </b-button>
    </template>
    <b-card class='py-3' no-body>
      <b-container>
        <b-row class='mb-3'>
          <b-col class='wrapped-text-right pt-1' md='3'>Номер:</b-col>
          <b-col>
            <b-form-input type='text'></b-form-input>
          </b-col>
        </b-row>
        <b-row class='mb-3'>
          <b-col class='wrapped-text-right pt-1' md='3'>Клієнт:</b-col>
          <b-col>
            <selected-client-card :selected-client='rr'/>
          </b-col>
        </b-row>
        <b-row class='mb-3'>
          <b-col class='wrapped-text-right pt-1' md='3'>Абонемент:</b-col>
        </b-row>
        <b-row>
          <b-col class='wrapped-text-right pt-1' md='3'>Вартість:</b-col>
        </b-row>
      </b-container>
    </b-card>
    <template #modal-footer>
      <b-button
        variant='success'
        @click='onSubmit'
      >
        Оформити
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
import SelectedClientCard from '@/components/selected-client-card'

export default {
  name: 'subscription-renewal-modal',
  components: {
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
      rr: {
        id: 1,
        fullName: 'Max',
        branch: 'Головний',
        status: 'оформив абонимент'
      }
    }
  },
  methods: {
    onSubmit() {
      this.closeModal()
    },
    closeModal() {
      this.$emit('close-modal')
    }
  }
}
</script>