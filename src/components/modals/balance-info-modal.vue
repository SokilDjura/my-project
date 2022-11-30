<template>
  <b-modal
    :visible='isOpen'
    centered
    hide-footer
    no-close-on-backdrop
    size='xl'
  >
    <template #modal-header>
      <h5 class='modal-title'>Подробиці балансу</h5>
      <b-button
        class='btn-close'
        @click='closeModal'
      >
      </b-button>
    </template>
    <b-table
      id='balance-table'
      :busy='isBusy'
      :current-page='currentPage'
      :fields='tableFields'
      :items='filteredOperations'
      :per-page='operationsPerPage'
      empty-text='Операцій не знайдено'
      label-sort-asc=''
      label-sort-clear=''
      label-sort-desc=''
      primary-key='Час'
      responsive
      show-empty
      striped
    >
      <template #thead-top='data'>
        <b-tr>
          <b-th
            v-for='item in data.fields'
            :key='item.key'
            colspan='1'
          >
            <b-form-input
              v-model='filters[item.key]'
              placeholder='Пошук'
              type='text'
            ></b-form-input>
          </b-th>
        </b-tr>
      </template>
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
        :per-page='operationsPerPage'
        :total-rows='operations.length'
        aria-controls='operations-table'
        class='mb-0'
      ></b-pagination>
      <b-form-select
        v-model='operationsPerPage'
        :options='pageOptions'
        size='sm'
      ></b-form-select>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'balance-info-modal',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      operations: [
        {
          time: '11/16/2022 12:19',
          operation: 'Coca-Cola',
          money: '+2 000',
          payment: 'Готівка',
          service: 'Coca-Cola 2L',
          user: 'User1'
        },
        {
          time: '11/16/2022 12:19',
          operation: 'Coca-Cola',
          money: '+2 000',
          payment: 'Готівка',
          service: 'Coca-Cola 2L',
          user: 'User2'
        },
        {
          time: '11/16/2022 12:19',
          operation: 'Coca-Cola',
          money: '+2 000',
          payment: 'Картка',
          service: 'Coca-Cola 3L',
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
          key: 'operation',
          label: 'Операція',
          sortable: true
        },
        {
          key: 'money',
          label: 'Сума',
          sortable: true
        },
        {
          key: 'payment',
          label: 'Оплата',
          sortable: true
        },
        {
          key: 'service',
          label: 'Продажа',
          sortable: true
        },
        {
          key: 'user',
          label: 'Користувач',
          sortable: true
        }
      ],
      filters: {
        time: '',
        operation: '',
        money: '',
        payment: '',
        service: '',
        user: ''
      },
      isBusy: false,
      operationsPerPage: 10,
      pageOptions: [10, 15, 25],
      currentPage: 1
    }
  },
  computed: {
    filteredOperations() {
      return this.operations.filter(e => {
        return Object.keys(this.filters).every(el => {
          return this.filters[el] === '' || String(e[el]).toLowerCase().includes(this.filters[el].toLowerCase())
        })
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