<template>
  <b-modal
    :visible='isOpen'
    hide-footer
    no-close-on-backdrop
    size='xl'
  >
    <template #modal-header>
      <h5 class='modal-title'>Продукти</h5>
      <b-button
        class='btn-close'
        @click='closeModal'
      >
      </b-button>
    </template>
    <b-form-input
      v-model='searchInput'
      autofocus
      class='mb-5'
      placeholder='Пошук'
      type='text'
    />
    <div class='d-flex align-items-start flex-wrap mb-4 items-wrapper'>
      <b-card
        v-for='item in filteredList'
        :key='item.id'
        class='me-3 mb-3 product'
      >
        <div class='d-flex flex-column px-3 py-2'>
          <span class='text-center title'>{{ item.title }}</span>
          <span class='text-center fw-bold'>{{ item.price }}</span>
        </div>
        <div class='d-flex flex-column px-3 py-2'>
          <span class='text-center'>{{ item.type }}</span>
          <p class='text-center'>Доступно: <span class='fw-bold'>{{ item.amount }} шт.</span></p>
        </div>
      </b-card>
      <p
        v-if='searchInput && !filteredList.length'
        class='mx-auto text-danger'
      >
        Такого товару немає!
      </p>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'goods-modal',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      searchInput: '',
      goodsArray: [
        {
          id: 1,
          title: 'Coca-Cola',
          price: '100',
          type: 'Вода',
          amount: 10
        },
        {
          id: 2,
          title: 'Lays',
          price: '200',
          type: 'Chips',
          amount: 5
        }
      ]
    }
  },
  computed: {
    filteredList() {
      return this.goodsArray.filter(item => {
        if (item.title.toLowerCase().includes(this.searchInput.toLowerCase()) || item.type.toLowerCase().includes(this.searchInput.toLowerCase()))
          return item
      })
    }
  },
  methods: {
    closeModal() {
      this.$emit('close-modal')
    }
  }
}
</script>

<style lang='scss' scoped>
.card-body {
  padding: 0;
}
.product {
  cursor: pointer;
  width: 150px;
  font-size: 14px;
  transition: .2s;
  &:hover {
    background-color: #e9e9e9;
  }
  .title {
    font-size: 18px;
  }
}
</style>