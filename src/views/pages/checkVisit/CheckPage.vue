<template>
  <b-row>
    <b-col class='column-1'>
      <div>
        <b-dropdown
          id='dropdown-left'
          :text='selectMarkType.name'
          no-caret
          toggle-class='text-decoration-none'
          variant='link'
        >
          <b-dropdown-item v-for='item in markType' :key='item.id' @click='openMarkType(item)'>
            {{ item.name }}
          </b-dropdown-item>
        </b-dropdown>
        <b-icon class='gear-icon' font-scale='1.1' icon='gear-fill'/>
      </div>
      <show-full-date/>
      <div class='overflow-scroll wrapper-cards'>
        <div class='wrap-cards'>
          <b-card
            v-for='item in testListCards'
            :key='item.id'
            :class='{active: isCardActive.value && item.id === isCardActive.id}'
            body-class='wrap-card'
            class='my-2 wrap-card-1 cursor-pointer'
            @click='openCard(item)'
          >
            <span class='small'>{{ item.style }} {{ item.group.age }} {{ item.group.entity }} </span>
            <div class='small'>{{ toHoursAndMinutes(item.minutesBegin) }}-{{ toHoursAndMinutes(item.minutesEnd) }}</div>
            <span class='small'>{{ item.hall }}</span>
            <div class='d-flex justify-content-between align-items-center small'>
              <span>{{ item.teacher }}</span>
              <b-icon :icon='item.icon' font-scale='0.8'/>
            </div>
          </b-card>
        </div>
      </div>
    </b-col>
    <b-col class='column-2' cols='4'>
      <b-card class='card-clients' no-body>
        <b-list-group flush>
          <b-list-group-item v-if='selectCard'>
              <span class='small'>{{ selectCard.style }} {{
                  selectCard.group.age
                }} {{ selectCard.group.entity }} </span>
            <div class='small'>
              {{ toHoursAndMinutes(selectCard.minutesBegin) }}-{{ toHoursAndMinutes(selectCard.minutesEnd) }}
            </div>
            <span class='small'>{{ selectCard.hall }}</span>
            <div class='d-flex justify-content-between align-items-center small'>
              <span>{{ selectCard.teacher }}</span>
              <b-icon :icon='selectCard.icon' font-scale='0.8'/>
            </div>
          </b-list-group-item>
          <b-list-group-item v-else>
            <h6 class='mb-0 text-center'>Відвідування</h6>
          </b-list-group-item>
          <b-list-group-item class='px-0 py-0'>
            <b-input-group>
              <b-input class='search-input' placeholder='Для пошуку по всім клієнтам нажміть Enter'/>
              <template #append>
                <b-input-group-text @click='isOpenCreateClient = true'>
                  <b-icon class='mx-2' font-scale='1.4' icon='person-plus-fill'/>
                </b-input-group-text>
              </template>
            </b-input-group>
          </b-list-group-item>
          <b-list-group-item class='px-2'>
            <div class='empty'>
              Виберіть заняття для позначення відвідувань. <br><br>
              Для позначення відвідування наведіть вказівник миші на клієнта та натисніть на галочку праворуч від
              клієнта.
            </div>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-col>
    <create-client-modal @closeModal='isOpenCreateClient = false' :is-open='isOpenCreateClient'/>
  </b-row>
</template>

<script>
import ShowFullDate from '@/views/pages/checkVisit/show-full-date'
import CreateClientModal from '@/components/modals/create-client/create-client-modal'

export default {
  name: 'CheckPage',
  components: {
    ShowFullDate,
    CreateClientModal
  },
  data() {
    return {
      selectMarkType: {
        id: 1,
        name: 'Відмітка за розкладом',
        link: ''
      },
      markType: [
        {
          id: 1,
          name: 'Відмітка за розкладом',
          link: ''
        },
        {
          id: 2,
          name: 'Відмітка за групами',
          link: ''
        },
        {
          id: 3,
          name: 'Відмітка за викладачем',
          link: ''
        },
        {
          id: 4,
          name: 'Відмітка за залом',
          link: ''
        }
      ],
      testListCards: [
        {
          id: 1,
          client: null,
          group: {
            age: '7-14',
            entity: 'group',
            id: 3,
            level: 'Початківці',
            number: '1'
          },
          minutesBegin: 540,
          minutesEnd: 600,
          hall: 'Малий зал',
          teacher: 'Соболева O.',
          style: 'House',
          icon: 'people-fill'
        },
        {
          id: 2,
          client: null,
          group: {
            age: '4+',
            entity: 'group',
            id: 3,
            level: null,
            number: '1'
          },
          minutesBegin: 541,
          minutesEnd: 700,
          hall: 'Малий зал',
          teacher: 'Соболева O.',
          style: 'House',
          icon: 'people-fill'
        },
        {
          id: 3,
          client: null,
          group: {
            age: '4+',
            entity: 'group',
            id: 3,
            level: null,
            number: '1'
          },
          minutesBegin: 541,
          minutesEnd: 700,
          hall: 'Малий зал',
          teacher: 'Соболева O.',
          style: 'House',
          icon: 'people-fill'
        },
        {
          id: 4,
          client: null,
          group: {
            age: '4+',
            entity: 'group',
            id: 3,
            level: null,
            number: '1'
          },
          minutesBegin: 541,
          minutesEnd: 700,
          hall: 'Малий зал',
          teacher: 'Соболева O.',
          style: 'House',
          icon: 'people-fill'
        },
        {
          id: 5,
          client: null,
          group: {
            age: '4+',
            entity: 'group',
            id: 3,
            level: null,
            number: '1'
          },
          minutesBegin: 541,
          minutesEnd: 700,
          hall: 'Малий зал',
          teacher: 'Соболева O.',
          style: 'House',
          icon: 'people-fill'
        },
        {
          id: 6,
          client: null,
          group: {
            age: '4+',
            entity: 'group',
            id: 3,
            level: null,
            number: '1'
          },
          minutesBegin: 541,
          minutesEnd: 700,
          hall: 'Малий зал',
          teacher: 'Соболева O.',
          style: 'House',
          icon: 'people-fill'
        },
        {
          id: 7,
          client: null,
          group: {
            age: '4+',
            entity: 'group',
            id: 3,
            level: null,
            number: '1'
          },
          minutesBegin: 541,
          minutesEnd: 700,
          hall: 'Малий зал',
          teacher: 'Соболева O.',
          style: 'House',
          icon: 'people-fill'
        },
        {
          id: 8,
          client: null,
          group: {
            age: '4+',
            entity: 'group',
            id: 3,
            level: null,
            number: '1'
          },
          minutesBegin: 541,
          minutesEnd: 700,
          hall: 'Малий зал',
          teacher: 'Соболева O.',
          style: 'House',
          icon: 'people-fill'
        }
      ],
      selectCard: null,
      isCardActive: {
        value: false,
        id: null
      },
      isOpenCreateClient: false
    }
  },
  methods: {
    toHoursAndMinutes(value) {
      const minutes = value % 60
      const hours = Math.floor(value / 60)
      return `${ hours.toString().padStart(2, '0') }:${ minutes.toString().padStart(2, '0') }`
    },
    openCard(value) {
      if (this.selectCard !== value) {
        this.selectCard = value
        this.isCardActive.value = true
        this.isCardActive.id = value.id
      } else {
        this.selectCard = null
        this.isCardActive.value = false
        this.isCardActive.id = null
      }
    },
    openMarkType(value) {
      if (value.id !== this.selectMarkType.id) this.selectMarkType = value
    },
  }
}
</script>

<style scoped>
.wrap-card-1 {
  width: 95%;
}
.active{
  background-color: #fc3 !important;
  width: 100%;
}
.wrap-card {
  padding: 2px 6px;
}
.wrapper-cards {
  max-height: calc(100vh - 156px);
  direction: rtl;
}
.wrap-cards {
  direction: ltr;
  padding-left: 12px;
}
.column-1 {
  min-width: 300px;
  max-width: 300px;
}
.column-2 {
  min-width: 400px;
  max-width: 400px;
}
.cursor-pointer {
  cursor: pointer;
}
.card-clients {
  min-height: 530px;
  max-height: 530px;
  overflow: hidden;
}
.search-input {
  height: 38px;
  border: 0;
  border-right: 1px solid #ced4da;
}
.search-input::placeholder {
  font-size: 12px;
}
.input-group-text {
  border: 0;
  height: 38px;
  background: transparent !important;
  cursor: pointer;
}
.input-group-text svg {
  color: #2c3e50;
  opacity: .3;
  transition: .3s;
}
.input-group-text svg:hover {
  opacity: .5;
}
.form-control:focus {
  border-color: #ced4da !important;
  box-shadow: none !important;
}
.empty {
  color: grey;
  font-size: 12px;
  padding: 0 4px;
}
</style>
<style>
.gear-icon {
  color: #2c3e50;
  opacity: .3;
  transition: .3s;
  cursor: pointer;
}
.gear-icon:hover {
  opacity: .5;
}
.page-content {
  overflow-x: hidden;
}
</style>