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
    <span>Назва:</span>
    <b-input v-model='newValue' class='mt-2'/>
    <template #modal-footer>
      <b-button @click="$emit('closeModal')" variant='outline-secondary'>Скасувати</b-button>
      <b-button @click="save" variant='success'>Зберегти</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'source-modal',
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
      default: null
    },
  },
  data(){
    return{
      newValue: null
    }
  },
  watch: {
     valueOption () {
      this.newValue = this.valueOption
    }
  },
  methods:{
    save(){
      this.$emit('save', this.id, this.newValue, this.valueOption)
      this.newValue = null
    }
  }
}
</script>

<style scoped>

</style>