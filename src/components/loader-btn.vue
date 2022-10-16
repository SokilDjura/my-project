<template>
  <b-button
    ref='loaderBtn'
    :type='type'
    :variant='btnVariant'
  >
    <b-spinner
      v-if='loading'
      :variant='loaderVariant'
      small
    ></b-spinner>
    <span v-else>{{ text }}</span>
  </b-button>
</template>

<script>
export default {
  name: 'loader-btn',
  props: {
    text: {
      required: true,
      default: 'Loader Button',
      type: String
    },
    btnVariant: {
      default: 'primary',
      type: String
    },
    loaderVariant: {
      default: 'light',
      type: String
    },
    type: {
      default: 'submit',
      type: String
    },
    loading: {
      required: true,
      default: false,
      type: Boolean
    }
  }
}
</script>