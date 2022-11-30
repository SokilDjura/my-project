<template>
  <b-modal
    :visible='isOpen'
    centered
    hide-footer
    no-close-on-backdrop
    size='xl'
  >
    <template #modal-header>
      <h5 class='modal-title'>Подробиці продажів</h5>
      <b-button
        class='btn-close'
        @click='closeModal'
      >
      </b-button>
    </template>
    <b-table
      id='sales-table'
      :busy='isBusy'
      :current-page='currentPage'
      :fields='tableFields'
      :items='sales'
      :per-page='salesPerPage'
      empty-text='Продажів не знайдено'
      label-sort-asc=''
      label-sort-clear=''
      label-sort-desc=''
      primary-key='Час'
      responsive
      show-empty
      striped
    >
      <template #table-busy>
        <div class='text-center text-danger my-2'>
          <b-spinner class='align-middle'></b-spinner>
          <strong>Завантаження...</strong>
        </div>
      </template>
    </b-table>
    <div class='d-flex justify-content-between mt-2'>
      <b-pagination
        v-model='currentPage'
        :per-page='salesPerPage'
        :total-rows='sales.length'
        aria-controls='sales-table'
        class='mb-0'
      ></b-pagination>
      <b-form-select
        v-model='salesPerPage'
        :options='pageOptions'
        size='sm'
      ></b-form-select>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'sales-info-modal',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      sales: [
        {
          time: '11/16/2022 12:19',
          saleName: 'Coca-Cola',
          service: 'Продукти',
          user: 'User1'
        },
        {
          time: '11/16/2022 12:19',
          saleName: 'Fanta',
          service: 'Продукти',
          user: 'User2'
        },
        {
          time: '11/16/2022 12:19',
          saleName: 'Sprite',
          service: 'Продукти',
          user: 'User3'
        }
      ],
      tableFields: [
        {
          key: 'time',
          label: 'Час',
          sortable: true
        },
        {
          key: 'saleName',
          label: 'Продажа',
          sortable: true
        },
        {
          key: 'service',
          label: 'Товар',
          sortable: true
        },
        {
          key: 'user',
          label: 'Користувач',
          sortable: true
        }
      ],
      isBusy: false,
      salesPerPage: 10,
      pageOptions: [10, 15, 25],
      currentPage: 1
    }
  },
  methods: {
    closeModal() {
      this.$emit('close-modal')
    }
  }
}
</script>