<template>
  <b-card class='position-relative'>
    <b-button
      class='btn-close'
    >
    </b-button>
    <b-row>
      <b-col cols='5'>
        <div class='avatar-wrap'>
          <img
            :src="require('@/assets/images/default-user-image.png')"
            alt=' '
            class='avatar'
          >
        </div>
        <b-button class='action-btn py-3 mt-2' variant="danger">
          Виписати послугу
        </b-button>
      </b-col>
      <b-col cols='7' class='ps-4'>
        <b-card-text class='mb-2' style='font-size: 18px;'>Вовков Андрій</b-card-text>
        <div class='mb-4'>
          <span class='px-2 py-1 me-2 small-btn'>
            0 <b-icon class='ms-1' icon='piggy-bank-fill' size='16px'></b-icon>
          </span>
          <span class='px-2 py-1 small-btn'>
            0 <b-icon class='ms-1' icon='star-fill' size='16px'></b-icon>
          </span>
        </div>
        <b-card-text class='mb-4'>22 роки</b-card-text>
        <b-icon class='gear-icon' font-scale='1.2' icon='telephone-fill'></b-icon>
        <b-dropdown
          id='dropdown-left'
          text='+380632281859'
          no-caret
          toggle-class='phone-numb'
          variant='link'
        >
          <b-dropdown-item
            v-for='item in markType'
            :key='item.id'
          >
            <div class='py-2'>
              <b-icon class='me-2' font-scale='1.2' :icon='item.icon'></b-icon>
              {{ item.name }}
            </div>
          </b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
    <b-row class='px-0 py-0 mx-0 my-0 mt-4'>
      <presentation-client/>
    </b-row>
    <b-row class='mt-4'>
      <b-tabs content-class='mt-3' justified>
        <b-tab active title='Послуги'><p>I'm the first tab</p></b-tab>
        <b-tab title='Товари'><p>I'm the second tab</p></b-tab>
        <b-tab title='Відвідування'><p>I'm the second tab</p></b-tab>
        <b-tab title='Запис'><p>I'm the second tab</p></b-tab>
      </b-tabs>
    </b-row>
    <b-row class='mt-4'>
      <b-button-group class='button-group-wrap'>
        <b-button
          class='px-2 btn-group-client'
          variant='link'
          @click='getServices'
        >
          <b-icon class='me-1' icon='card-checklist'/>
          Послуга
        </b-button>
        <b-button
          class='header-btn-center px-2 btn-group-client'
          variant='link'
          @click='getGoods'
        >
          <b-icon class='me-1' icon='basket2-fill'/>
          Товар
        </b-button>
        <b-button
          class='px-2 btn-group-client'
          variant='link'
          @click='openLessonModal'
        >
          <b-icon class='me-1' icon='calendar2-event'/>
          Запись
        </b-button>
      </b-button-group>
      <services-modal
        :is-open='isServicesModalOpen'
        @close-modal='closeServicesModal'
      />
      <goods-modal
        :is-open='isGoodsModalOpen'
        @close-modal='closeGoodsModal'
      />
      <lesson-registration-modal
        :is-open='isLessonModalOpen'
        @close-modal='closeLessonModal'
      />
    </b-row>
  </b-card>
</template>

<script>
import PresentationClient from '@/views/pages/checkVisit/presentation-client'
import servicesModal from '@/components/modals/services-modal'
import goodsModal from '@/components/modals/goods-modal'
import lessonRegistrationModal from '@/components/modals/lesson-registration-modal'
export default {
  name: 'client-card',
  components: { PresentationClient, servicesModal, goodsModal, lessonRegistrationModal },

  data() {
    return {
      isServicesModalOpen: false,
      isGoodsModalOpen: false,
      isLessonModalOpen: false,
      markType: [
        {
          id: 1,
          name: 'Зателефонувати',
          icon: 'telephone-fill',
          link: ''
        },
        {
          id: 2,
          name: 'Написати в WhatsAp',
          icon: 'whatsapp',
          link: ''
        },
        {
          id: 3,
          name: 'Написати в Telegram',
          icon: 'telegram',
          link: ''
        }
      ],
    }
  },
  methods: {
    getServices() {
      this.isServicesModalOpen = true
    },
    closeServicesModal() {
      this.isServicesModalOpen = false
    },
    getGoods() {
      this.isGoodsModalOpen = true
    },
    closeGoodsModal() {
      this.isGoodsModalOpen = false
    },
    openLessonModal() {
      this.isLessonModalOpen = true
    },
    closeLessonModal() {
      this.isLessonModalOpen = false
    }
  }
}
</script>

<style scoped>
.btn-close {
  padding: 0 !important;
  margin: 0 !important;
  position: absolute;
  top: 20px;
  right: 20px;
}
.btn-close:hover {
  background-color: transparent !important;
}
.avatar-wrap {
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 220px;
  height: 220px;
}
.avatar {
  position: absolute;
  width: auto;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}
.action-btn{
  width: 220px;
}
.small-btn{
  background-color: rgb(183, 186, 189);
  color: white;
  border-radius: 3px;
}
::v-deep .phone-numb{
  color: gray;
  text-decoration: none;
}
::v-deep .phone-numb:hover{
  text-decoration: underline;
}
.button-group-wrap{
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.btn-group-client{
  color: #000000;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  border-radius: 0;
  transition: .3s;
}
.btn-group-client:hover{
  border-bottom: 3px solid gray;
}
</style>