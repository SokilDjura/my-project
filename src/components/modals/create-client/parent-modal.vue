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
    <b-card class='px-3 py-3 mb-3 card-client' no-body>
      <b-form-group class='mb-2'>
        <b-row>
          <b-col class='d-flex align-items-center justify-content-end pe-0' cols='3'>
            <label>Прізвище:</label>
          </b-col>
          <b-col cols='9'>
            <b-input v-model='newValue.name'/>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group class='mb-2'>
        <b-row>
          <b-col class='d-flex align-items-center justify-content-end pe-0' cols='3'>
            <label>Ім'я:</label>
          </b-col>
          <b-col cols='9'>
            <b-input v-model='newValue.lastName'/>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group class='mb-2'>
        <b-row>
          <b-col class='d-flex align-items-center justify-content-end pe-0' cols='3'>
            <label>По-батькові:</label>
          </b-col>
          <b-col cols='9'>
            <b-input v-model='newValue.surname'/>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group>
        <b-row>
          <b-col class='d-flex align-items-center justify-content-end pe-0' cols='3'>
            <label>Дата народження:</label>
          </b-col>
          <b-col class='wrap-age' cols='6'>
            <v-date-picker
              v-model='newValue.birthday'
              :popover="{ visibility: 'click' }"
              :update-on-input='true'
            >
              <template v-slot='{ inputValue, inputEvents }'>
                <input
                  :value='inputValue'
                  class='bg-white border px-2 py-1 rounded date-input'
                  v-on='inputEvents'
                />
                <span v-if='newValue.age' class='age-absolute'> {{ newValue.age }} р.</span>
              </template>
            </v-date-picker>
          </b-col>
          <b-col cols='3'>
            <b-form-group v-slot='{ ariaDescribedby }' class='sex-radio'>
              <div class='radio-buttons'>
                <b-form-radio
                  v-model='newValue.sex'
                  :aria-describedby='ariaDescribedby'
                  :class="{'no-active': newValue.sex !== 'women' }"
                  class='woman'
                  value='women'
                ></b-form-radio>
                <b-form-radio
                  v-model='newValue.sex'
                  :aria-describedby='ariaDescribedby'
                  :class="{'no-active': newValue.sex !== 'man' }"
                  class='man'
                  value='man'
                ></b-form-radio>
              </div>
            </b-form-group>
          </b-col>
        </b-row>
      </b-form-group>
    </b-card>
    <b-card class='px-3 py-3 mb-3 card-client' no-body>
      <b-form-group class='mb-2'>
        <b-row>
          <b-col class='d-flex align-items-center justify-content-end pe-0' cols='3'>
            <label>
              <b-icon class='gear-icon' font-scale='1.3' icon='telephone-fill'/>
            </label>
          </b-col>
          <b-col cols='9'>
            <b-input v-model='newValue.phone' placeholder='Номер телефону'/>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group class='mb-2'>
        <b-row>
          <b-col class='d-flex align-items-center justify-content-end pe-0' cols='3'>
            <label>
              <b-icon class='gear-icon' font-scale='1.3' icon='mailbox2'/>
            </label>
          </b-col>
          <b-col cols='9'>
            <b-input v-model='newValue.email' placeholder='Електронна пошта'/>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group class='mb-2'>
        <b-row>
          <b-col class='d-flex align-items-center justify-content-end pe-0' cols='3'>
            <label>
              <b-icon class='gear-icon' font-scale='1.3' icon='messenger'/>
            </label>
          </b-col>
          <b-col cols='9'>
            <b-input v-model='newValue.socialNetwork' placeholder='Сторінка соцмережі'/>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group>
        <b-row>
          <b-col class='d-flex align-items-center justify-content-end pe-0' cols='3'>
            <label>
              <b-icon class='gear-icon' font-scale='1.3' icon='geo-alt-fill'/>
            </label>
          </b-col>
          <b-col cols='9'>
            <b-input v-model='newValue.address' placeholder='Адреса проживання'/>
          </b-col>
        </b-row>
      </b-form-group>
    </b-card>
    <template #modal-footer>
      <b-button @click="$emit('closeModal')" variant='outline-secondary'>Скасувати</b-button>
      <b-button @click="save" variant='success'>Зберегти</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'parent-modal',
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
        name: null,
        lastName: null,
        surname: null,
        birthday: null,
        age: null,
        sex: 'women',
        phone: null,
        email: null,
        socialNetwork: null,
        address: null
      },
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
.card-client {
  box-shadow: 0.05rem 0.1rem 0.15rem rgb(0 0 0 / 6%);
}
.modal-header .btn-close {
  padding: 0 !important;
  margin: 0 !important;
}
.modal-header .btn-close:hover {
  background-color: transparent !important;
}
.form-group label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.wrap-age {
  position: relative;
}
.age-absolute {
  position: absolute;
  top: 5px;
  right: 22px;
  color: grey;
}
.date-input {
  border: 1px solid #ced4da !important;
  height: 38px;
}
.radio-buttons {
  display: flex !important;
}
.radio-buttons .woman {
  width: 42px;
  height: 38px;
  background: url(data:image/png;base64,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) no-repeat;
}
.radio-buttons .man {
  width: 42px;
  height: 38px;
  background: url(data:image/png;base64,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) no-repeat;
}
.no-active {
  filter: grayscale(100%);
  opacity: .5;
  transition: .3s;
}
.no-active:hover {
  opacity: .8;
}
</style>