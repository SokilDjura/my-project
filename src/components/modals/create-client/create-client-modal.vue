<template>
  <b-modal
    :visible='isOpen'
    centered
    dialog-class='create-client-modal'
    no-close-on-backdrop
    size='xl'
  >
    <template #modal-header>
      <h3 class='mb-0'>Клієнт</h3>
      <b-button
        class='btn-close'
        @click="$emit('closeModal')"
      >
      </b-button>
    </template>
    <template #default>
      <b-form>
        <b-row>
          <b-col cols='5'>
            <b-card class='px-3 py-3 mb-3 card-client' no-body>
              <b-form-group class='mb-2'>
                <b-row>
                  <b-col class='d-flex align-items-center justify-content-end pe-0' cols='3'>
                    <label>Прізвище:</label>
                  </b-col>
                  <b-col cols='9'>
                    <b-input v-model='userCard.name'/>
                  </b-col>
                </b-row>
              </b-form-group>
              <b-form-group class='mb-2'>
                <b-row>
                  <b-col class='d-flex align-items-center justify-content-end pe-0' cols='3'>
                    <label>Ім'я:</label>
                  </b-col>
                  <b-col cols='9'>
                    <b-input v-model='userCard.lastName'/>
                  </b-col>
                </b-row>
              </b-form-group>
              <b-form-group class='mb-2'>
                <b-row>
                  <b-col class='d-flex align-items-center justify-content-end pe-0' cols='3'>
                    <label>По-батькові:</label>
                  </b-col>
                  <b-col cols='9'>
                    <b-input v-model='userCard.surname'/>
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
                      v-model='userCard.birthday'
                      :popover="{ visibility: 'click' }"
                      :update-on-input='true'
                    >
                      <template v-slot='{ inputValue, inputEvents }'>
                        <input
                          :value='inputValue'
                          class='bg-white border px-2 py-1 rounded date-input'
                          v-on='inputEvents'
                        />
                        <span v-if='userCard.age' class='age-absolute'> {{ userCard.age }} р.</span>
                      </template>
                    </v-date-picker>
                  </b-col>
                  <b-col cols='3'>
                    <b-form-group v-slot='{ ariaDescribedby }' class='sex-radio'>
                      <div class='radio-buttons'>
                        <b-form-radio
                          v-model='userCard.sex'
                          :aria-describedby='ariaDescribedby'
                          :class="{'no-active': userCard.sex !== 'women' }"
                          class='woman'
                          value='women'
                        ></b-form-radio>
                        <b-form-radio
                          v-model='userCard.sex'
                          :aria-describedby='ariaDescribedby'
                          :class="{'no-active': userCard.sex !== 'man' }"
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
                    <b-input v-model='userCard.phone' placeholder='Номер телефону'/>
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
                    <b-input v-model='userCard.email' placeholder='Електронна пошта'/>
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
                    <b-input v-model='userCard.socialNetwork' placeholder='Сторінка соцмережі'/>
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
                    <b-input v-model='userCard.address' placeholder='Адреса проживання'/>
                  </b-col>
                </b-row>
              </b-form-group>
            </b-card>
            <b-card class='px-3 py-3 card-client' no-body>
              <b-form-group class='mb-2'>
                <b-row>
                  <b-col class='d-flex align-items-center justify-content-end pe-0' cols='3'>
                    <label>Джерело:</label>
                  </b-col>
                  <b-col cols='9'>
                    <multiselect
                      v-model='userCard.source'
                      :options='options'
                      deselectLabel=''
                      placeholder='Звідки дізналися'
                      selectLabel=''
                      selectedLabel=''
                    >
                      <template #option='{option}'>
                        <div class='d-flex'>
                          <span>{{ option }}</span>
                          <div class='ms-auto d-flex align-items-center'>
                            <b-icon
                              class='gear-icon me-1'
                              font-scale='1.2'
                              icon='list'
                              @click='renameSourceModal(option)'
                            />
                            <b-icon class='gear-icon' font-scale='0.8' icon='x-lg' @click='deleteSourceModal(option)'/>
                          </div>
                        </div>
                      </template>
                      <div slot='beforeList' class='px-2 py-2'>
                        <b-button class='w-100' variant='outline-secondary' @click='isAddSourceModal = true'>Нове
                          джерело
                        </b-button>
                      </div>
                      <span slot='noResult'>Не знайдено жодного елемента</span>
                    </multiselect>
                    <source-modal
                      :id='1'
                      :is-open='isAddSourceModal'
                      title='Нове джерело'
                      @closeModal='isAddSourceModal = false'
                      @save='saveSourceModal'
                    />
                    <source-modal
                      :id='2'
                      :is-open='isRenameSourceModal'
                      :value-option='valueOption'
                      title='Джерело'
                      @closeModal='isRenameSourceModal = false'
                      @save='saveSourceModal'
                    />
                    <delete-options-modal
                      :id='1'
                      :is-open='isDeleteSourceModal'
                      :value-option='valueOption'
                      title='Джерело'
                      @closeModal='isDeleteSourceModal = false'
                    />
                  </b-col>
                </b-row>
              </b-form-group>
              <b-form-group class='mb-2'>
                <b-row>
                  <b-col class='d-flex align-items-center justify-content-end pe-0' cols='3'>
                    <label>Мітки:</label>
                  </b-col>
                  <b-col cols='9'>
                    <multiselect
                      v-model='userCard.tags'
                      :multiple='true'
                      :options='options1'
                      deselectLabel=''
                      placeholder='Додати мітку'
                      selectLabel=''
                      selectedLabel=''
                    >
                      <template #option='{option}'>
                        <div class='d-flex'>
                          <span>{{ option }}</span>
                          <div class='ms-auto d-flex align-items-center'>
                            <b-icon
                              class='gear-icon me-1'
                              font-scale='1.2'
                              icon='list'
                              @click='renameLabelsModal(option)'
                            />
                            <b-icon class='gear-icon' font-scale='0.8' icon='x-lg' @click='deleteLabelsModal(option)'/>
                          </div>
                        </div>
                      </template>
                      <div slot='beforeList' class='px-2 py-2'>
                        <b-button
                          v-b-modal.modal-2
                          class='w-100'
                          variant='outline-secondary'
                          @click='isAddLabelsModal = true'
                        >Нове джерело
                        </b-button>
                      </div>
                      <span slot='noResult'>Не знайдено жодного елемента</span>
                    </multiselect>
                    <labels-modal
                      :id='1'
                      :is-open='isAddLabelsModal'
                      title='Нова мітка'
                      @closeModal='isAddLabelsModal = false'
                      @save='saveLabelsModal'
                    />
                    <labels-modal
                      :id='2'
                      :is-open='isRenameLabelsModal'
                      title='Нова мітка'
                      @closeModal='isRenameLabelsModal = false'
                      @save='saveLabelsModal'
                    />
                    <delete-options-modal
                      :id='2'
                      :is-open='isDeleteLabelsModal'
                      :value-option='valueOption'
                      title='Мітка'
                      @closeModal='isDeleteLabelsModal = false'
                    />
                  </b-col>
                </b-row>
              </b-form-group>
              <b-form-group class='mb-2'>
                <b-row>
                  <b-col class='d-flex align-items-center justify-content-end pe-0' cols='3'>
                    <label>Батьки:</label>
                  </b-col>
                  <b-col cols='9'>
                    <multiselect
                      v-model='userCard.parent'
                      :options='options2'
                      deselectLabel=''
                      placeholder='Батьки клієнта'
                      selectLabel=''
                      selectedLabel=''
                    >
                      <template #option='{option}'>
                        <div class='d-flex'>
                          <span>{{ option }}</span>
                          <div class='ms-auto d-flex align-items-center'>
                            <b-icon
                              class='gear-icon me-1'
                              font-scale='1.2'
                              icon='list'
                              @click='renameParentModal(option)'
                            />
                            <b-icon class='gear-icon' font-scale='0.8' icon='x-lg' @click='deleteParentModal(option)'/>
                          </div>
                        </div>
                      </template>
                      <div slot='beforeList' class='px-2 py-2'>
                        <b-button
                          v-b-modal.modal-2
                          class='w-100'
                          variant='outline-secondary'
                          @click='isAddParentModal = true'
                        >Нові батьки
                        </b-button>
                      </div>
                      <span slot='noResult'>Не знайдено жодного елемента</span>
                    </multiselect>
                    <parent-modal
                      :id='1'
                      :is-open='isAddParentModal'
                      title='Батьки'
                      @closeModal='isAddParentModal = false'
                      @save='saveParentModal'
                    />
                    <parent-modal
                      :id='2'
                      :is-open='isRenameParentModal'
                      title='Батьки'
                      @closeModal='isRenameParentModal = false'
                      @save='saveParentModal'
                    />
                    <delete-options-modal
                      :id='2'
                      :is-open='isDeleteParentModal'
                      :value-option='valueOption'
                      title='Батьки'
                      @closeModal='isDeleteParentModal = false'
                    />
                  </b-col>
                </b-row>
              </b-form-group>
              <b-form-group>
                <b-row>
                  <b-col class='d-flex align-items-center justify-content-end pe-0' cols='3'>
                    <label>Документ:</label>
                  </b-col>
                  <b-col cols='9'>
                    <b-input v-model='userCard.documents' placeholder='Паспорт, свідоцтво'/>
                  </b-col>
                </b-row>
              </b-form-group>
            </b-card>
          </b-col>
          <b-col cols='4'>
            <b-card class='px-3 py-3 mb-3 card-client' no-body>
              <img
                :src="userCard.avatarSrc || require('@/assets/images/default-user-image.png')"
                alt=' '
                class='avatar'
              >
              <b-form-file type='button' v-model='userCard.avatar' :capture='true' class='mt-3' hide-input plain>
                <template slot="file-name" slot-scope="">
                  <div>names</div>
                </template>
              </b-form-file>
            </b-card>
          </b-col>
        </b-row>
      </b-form>
    </template>
    <template #modal-footer>
      <b-button variant='outline-secondary' @click="$emit('closeModal')">Скасувати</b-button>
      <b-button variant='success'>Зберегти</b-button>
    </template>
  </b-modal>
</template>

<script>
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import SourceModal from '@/components/modals/create-client/source-modal'
import DeleteOptionsModal from '@/components/modals/create-client/delete-options-modal'
import LabelsModal from '@/components/modals/create-client/labels-modal'
import ParentModal from '@/components/modals/create-client/parent-modal'

export default {
  name: 'create-client-modal',
  components: {
    LabelsModal,
    Multiselect,
    SourceModal,
    DeleteOptionsModal,
    ParentModal
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {
      calendarAttrs: [
        {
          key: 'today',
          highlight: {
            color: 'purple',
            fillMode: 'solid',
            contentClass: 'italic'
          }
        }
      ],
      userCard: {
        name: null,
        lastName: null,
        surname: null,
        birthday: null,
        age: null,
        sex: 'women',
        phone: null,
        email: null,
        socialNetwork: null,
        address: null,
        source: null,
        tags: null,
        parent: null,
        documents: null,
        avatar: null,
        avatarSrc: null
      },
      options: ['Первий', 'Другий', 'Інакший', 'Первий1', 'Другий1', 'Первий2', 'Другий2'],
      options1: ['Первий', 'Другий', 'Інакший', 'Первий2', 'Другий2'],
      options2: ['Мама'],
      isAddSourceModal: false,
      isRenameSourceModal: false,
      isDeleteSourceModal: false,
      isAddLabelsModal: false,
      isRenameLabelsModal: false,
      isDeleteLabelsModal: false,
      isAddParentModal: false,
      isRenameParentModal: false,
      isDeleteParentModal: false,
      valueOption: null
    }
  },
  methods: {
    calculateAge() {
      let now = new Date()
      let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      let dobnow = new Date(today.getFullYear(), this.userCard.birthday.getMonth(), this.userCard.birthday.getDate())
      this.userCard.age = new Date().getFullYear() - this.userCard.birthday.getFullYear()
      if (today < dobnow) {
        this.userCard.age -= 1
      }
      if (this.userCard.age < 2) this.userCard.age = null
      if (!this.userCard.birthday) this.userCard.age = null
    },
    saveSourceModal(id, newValue, oldValue) {
      if (id === 1) {
        this.options.unshift(newValue)
        this.userCard.source = newValue
        this.isAddSourceModal = false
      }
      if (id === 2) {
        console.log(oldValue)
        // this.options = this.options.map(el => { if (el === oldValue) el = newValue })
        this.isRenameSourceModal = false
      }
    },
    renameSourceModal(value) {
      this.valueOption = value
      this.isRenameSourceModal = true
    },
    deleteSourceModal(value) {
      this.valueOption = value
      this.isDeleteSourceModal = true
    },
    saveLabelsModal(id, newValue, oldValue) {
      if (id === 1) {
        this.options1.unshift(newValue)
        this.userCard.tags = newValue
        this.isAddLabelsModal = false
      }
      if (id === 2) {
        console.log(oldValue)
        // this.options = this.options.map(el => { if (el === oldValue) el = newValue })
        this.isRenameLabelsModal = false
      }
    },
    renameLabelsModal(value) {
      this.valueOption = value
      this.isRenameLabelsModal = true
    },
    deleteLabelsModal(value) {
      this.valueOption = value
      this.isDeleteLabelsModal = true
    },
    saveParentModal(id, newValue, oldValue) {
      if (id === 1) {
        this.options1.unshift(newValue)
        this.userCard.tags = newValue
        this.isAddParentModal = false
      }
      if (id === 2) {
        console.log(oldValue)
        // this.options = this.options.map(el => { if (el === oldValue) el = newValue })
        this.isRenameParentModal = false
      }
    },
    renameParentModal(value) {
      this.valueOption = value
      this.isRenameParentModal = true
    },
    deleteParentModal(value) {
      this.valueOption = value
      this.isDeleteParentModal = true
    },
    uploadPhoto(img) {
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        this.userCard.avatarSrc = reader.result
      })
      reader.readAsDataURL(img)
    }
  },
  watch: {
    'userCard.birthday'() {
      this.calculateAge()
    },
    'userCard.avatar'() {
      if (this.userCard.avatar) {
        this.uploadPhoto(this.userCard.avatar)
      }
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
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsSAAALEgHS3X78AAAGhElEQVRYw9WXbVBT2RnH/+eee2/IjQkhBCMhvEhAQGSldpUBtbQKaqS7C93O1sqXdvr6oZ3OtKu77rqdtc7s4NLuftlvba0zu+3YTjvrbi3sWq1ttQgpWByrgdI4IgRYiUG4eU/uOf3AlBnGRRJIafv/lJw8/+f87r3P89wc4H9cZDVm1+s9jVSghwRC9jPGrUnGDSIlQUqFW9FY4q36aP3ZV18lbM0BXa/1bpZk4eeyLJY9UWpTCm0mwajI0MsiIvEkJv0q3EMTwYdq7FaMy3svHNkaWjPAAx19+0VKftNYW6RUl6wnS2bgwO/7vVHv5Mwf3//uDteaAO7vcFdLFH2fa6w0bLCsWzZe4xxnugZj4VgcIhVvxOPJlz88Vn/xPwb41I/cf/90bcnmqmJrWr5wNAGffw6X/zYaiie173cdqXsjVa+QauC+U73Nik4sriqypl0WSpaEckcu2pu2GKhATh7s6KnJOGCWJLQ/UWozpHPPpwJBPJiLLHw36GXsqCzQUZkeyTggOPYU2rJTxptRI+juG8G5Kx78455/YX1jvpmCk6ZU84ipBmoaz12nl1OKHRl/gCs3RvHNvcUotxlw9JceUFGA026BSdFBS7LcjAMyznSSRB9Zj8aTCEXiCMcSmAoE4fUFoBcJTn6+ApX2+U7/wbMVePlXQ7BbTRAIAAKWcUBBEMKxeNKo6CT4/CoGhsYxNROGLBIYsySYFRHlGwxoc5WgptC0yLtpgwG7KiwYHJlEmcMCkdL7GQcUqXBvRo1UP5gN41K/F1/fU4ydmyzIklIr4+YtVpx41wur2QBC4M18DXLtkm9arRrxBYRv7duI3RWWtEZNiVVBMBLH2EezsXhc68p4FyeSRB3xBUhgLoInN2anOwqh6Cg0xnBn8qGspT47UgcUBXx7LhQjjHHoZYqVixOJCK9kHJAQwkrzLVitnHYLSBpdnA5gt0hJcrWAnHFNIDifcUCNx48Nj/lVQggY52mDMc5BCIFnzD8XjeCljAN2Pb9zNKqxnTIlydlw+jdyNpyETEkyEdcaLhzfMZZxQAC4+EK9RyfR/qGJYNqAHp8KnSS4L7zUMJSOT0h3o2Akcfq316fSJnxvYCqkRhOn0/WlDRiJRt/2TKihv955mLKnzzuD4cmQSvQP38Fa6EBH7662N92h4QmVLyePT+Wtb7iDza9d27mSvVZ87Gzp6GsRJZz/YkMBnvlk/iPv5GiC4Vz/JM5e8yGeYAe7X6zvXlNAANjfcY03VuVi4M4sdldacLjBAQD4Rc84rgwFsN1pxuXbfnz4Yv2K9xGxSh17uhxzkSR+7Z7Ad96+CQBo2pKH09+ohUkv4vJt/6ryp3VlTR1Xi0RCW0WRHgdDbkLThJ9+rRYFlqyPjfcFovjKjwchUcog4IGmaSe1OD2XzhxMCdB1qtchivR1zllrWUEuD0fjit1qhE6i6B+awJc/VYiWT6xf5Pnd4H387M9jeLLCjlhCw4RfhV4vhb3jAQJO3kUsefT88QbfqgEPdPa0UU7f2bZpg7Stwi7pJArP6DTuTs3CVVeGwFwElwa8sJkkHG1xggoEP+zy4q4/hn3bncjNVtDV+0+U2s2oLLIilkhiYHgyfn1kKsEYO/zBC/Xvrxiw5ZT7ezpZOPH0rgrD+hzDwroajuHsH27hq5/dBgKAMY4+zziG700DACqK8lBX5YAgEHAAPzl/HYf2VMOo6BZyfBQI4r2/DIfiGnul6/m6N9Me1Ac6e9pEmZz4wt7qRXAAYFR0kAQBM+r8mVdjDKFoEpoGaBrmP7P5f1QzcxFIgrAIDgBslnU43FRjkCk9ebCz95mlOOhSNUchXH7uM5sNZqP+Y43Ts2FwxsE4x7mrwzBkSWjdXYnasnz4/Cr+dGMUeWYF92dCEKgApz3nkRyyRFFky5Zv351+qqTpS2fuXDytpjRmKBU6t5bZaG62suTjL8gz4trNcXACNG3biJJ888JvjbXFKLZl4wP3/NmoYYtjyTx5ZgVbnTbp5t37nQDal33ETR1XizhH2/ZKu+5x9emwmmDPM6K9uWYR3L9Vkm9Ge3MNCqxGOKymxzZi3eYCmWl41nWq17EsoEhoa3lhjiaLjz93mAw6uOrKoJeXnvV6WYSrrgwmw2OvFZJI4XRYNBDetiygThYPlebnKFhjOe1mRZLE55YFZIyX5pkNa82HvGwFXEPpsk2STDLTme5B/DckEJKD/zf9C7zZjDWDroYGAAAAAElFTkSuQmCC) no-repeat;
}
.no-active {
  filter: grayscale(100%);
  opacity: .5;
  transition: .3s;
}
.no-active:hover {
  opacity: .8;
}
.avatar {
  border-radius: 50%;
}
</style>

<style>
.sex-radio .radio-buttons .custom-control-input {
  cursor: pointer;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.multiselect__option--highlight {
  background: #f3f3f3;
  color: black;
}
.multiselect__option--selected.multiselect__option--highlight {
  background: #efefef;
  color: black;
}
.modal-content .close {
  border: 0;
  background: transparent;
}
.multiselect__placeholder {
  font-size: 15px !important;
  color: grey !important;
  margin-bottom: 8px;
  padding-top: 0;
}
</style>