<template>
  <b-modal
    centered
    :visible='isOpen'
    no-close-on-backdrop
  >
    <template #modal-header>
      <h3 class='mb-0'>{{ title }}</h3>
      <b-button
        class='btn-close'
        @click="$emit('closeModal')"
      >
      </b-button>
    </template>
    <span>Ви дійносно бажаєте видалити "{{ valueOption }}"?</span>
    <template #modal-footer>
      <b-button @click="$emit('closeModal')" variant='outline-secondary'>Ні</b-button>
      <b-button variant='success'>Так</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'delete-options-modal',
  props:{
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    },
    title:{
      type: String,
      required: true
    },
    id:{
      type: Number,
      required: true
    },
    valueOption:{
      type: String,
      default: null
    },
  },
}
</script>

<style scoped>

</style>