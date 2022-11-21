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
    <b-row>
      <b-col cols='10'>
        <b-input v-model='newValue.newValue' class='mt-2'/>
      </b-col>
      <b-col cols='2'>
        <swatches class='mt-1' v-model="newValue.color" />
      </b-col>
    </b-row>
    <template #modal-footer>
      <b-button @click="$emit('closeModal')" variant='outline-secondary'>Скасувати</b-button>
      <b-button @click="save" variant='success'>Зберегти</b-button>
    </template>
  </b-modal>
</template>

<script>
import Swatches from 'vue-swatches'

export default {
  name: 'labels-modal',
  components: { Swatches },
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
      newValue: {
        newValue: null,
        color: null
      }
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