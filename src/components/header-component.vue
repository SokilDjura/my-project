<template>
  <header>
    <div class='header-wrap d-flex'>
      <div class='icon-wrap my-2 me-2'>
        <b-icon class='me-2' font-scale='1.3' icon='gear-fill'/>
        <b-icon class='mx-2' font-scale='1.3' icon='calendar2-check-fill'/>
        <b-icon class='mx-2' font-scale='1.3' icon='bell-fill'/>
        <b-icon class='mx-2' font-scale='1.3' icon='question-circle-fill'/>
      </div>
      <b-col class=' me-auto' lg='4' xl='5'>
        <b-input-group>
          <b-input class='search-input' placeholder='Пошук'/>
          <template #append>
            <b-input-group-text>
              <b-icon class='mx-2' font-scale='1.4' icon='search'/>
            </b-input-group-text>
          </template>
        </b-input-group>
      </b-col>
      <b-button-group class='button-group-wrap'>
        <b-button
          class='px-4'
          variant='primary'
          @click='openServicesModal'
        >
          <b-icon class='me-1' icon='card-checklist'/>
          Послуга
        </b-button>
        <b-button
          class='header-btn-center px-4'
          variant='primary'
          @click='openGoodsModal'
        >
          <b-icon class='me-1' icon='basket2-fill'/>
          Товар
        </b-button>
        <b-button
          class='px-4'
          variant='primary'
          @click='openLessonModal'
        >
          <b-icon class='me-1' icon='calendar2-event'/>
          Запись
        </b-button>
      </b-button-group>
    </div>
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
  </header>
</template>

<script>
import ServicesModal from '@/components/modals/services-modal'
import GoodsModal from '@/components/modals/goods-modal'
import LessonRegistrationModal from '@/components/modals/lesson-registration-modal'

export default {
  name: 'HeaderComponent',
  components: {
    ServicesModal,
    GoodsModal,
    LessonRegistrationModal
  },
  data() {
    return {
      isServicesModalOpen: false,
      isGoodsModalOpen: false,
      isLessonModalOpen: false
    }
  },
  methods: {
    openServicesModal() {
      this.isServicesModalOpen = true
    },
    closeServicesModal() {
      this.isServicesModalOpen = false
    },
    openGoodsModal() {
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
header {
  z-index: 1000;
  padding-left: 80px;
  position: fixed;
  width: 100%;
  z-index: 2;
  background-color: #fff;
}
.header-wrap {
  padding: 8px 12px;
  border-bottom: 1px solid #ced4da;
  box-shadow: 3px 3px 3px rgb(128 95 95 / 5%);
}
.icon-wrap svg {
  color: #2c3e50;
  opacity: .3;
  transition: .3s;
  cursor: pointer;
}
.icon-wrap svg:hover {
  opacity: .5;
}
.search-input {
  height: 38px;
  border-right: 0;
}
.input-group-text {
  border-left: 0;
  border-radius: 0 0.375rem 0.375rem 0;
  height: 38px;
  background: transparent !important;
  cursor: pointer;
}
.input-group-text svg {
  color: #2c3e50;
  opacity: .5;
}
.header-btn-center {
  border-right: 2px solid #0062cb;
  border-left: 2px solid #0062cb;
}
.button-group-wrap {
  height: 38px;
}
.form-control:focus {
  border-color: #ced4da !important;
  box-shadow: none !important;
}
</style>
