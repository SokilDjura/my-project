<template>
  <div>
    <b-row class='px-0 py-0 mx-0 my-0'>
      <b-col class='ps-0' cols='5'>
        <div class='position-relative'>
          <div :class="infoSeasonTicket.isActive ? 'green' : 'red'" class='is-active-ticket mt-2 me-2'></div>
          <b-card-text class='mb-1 ps-3 text-card'>Волков Андрій (22 роки) дуже гарний і дивиться в ліс</b-card-text>
          <b-card-text class='ps-3' style='color: grey; font-size: 14px;'>Дорослий - 1800</b-card-text>
        </div>
      </b-col>
      <b-col cols='5' >
        <div>
          <span>8</span> з <span>8</span> занять залишилось
        </div>
        <div class='h-divider'></div>
        <div>
          <span>0</span> з <span>30</span> днів залишилось
        </div>
      </b-col>
      <b-col cols='2'>
        <div class='d-flex justify-content-end flex-column'>
          <b-icon class='gear-icon ms-auto mb-1' font-scale='1' icon='card-heading'></b-icon>
          <b-icon class='gear-icon ms-auto mb-1' font-scale='1' icon='snow'></b-icon>
          <b-icon class='gear-icon ms-auto' font-scale='1' icon='clock-history'></b-icon>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'presentation-client',
  data() {
    return {
      infoSeasonTicket: {
        isActive: false
      }
    }
  }
}
</script>

<style scoped>
.is-active-ticket {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  z-index: 12;
  position: absolute;
  top: 0;
  left: 0;
}
.red {
  background-color: red;
}
.green {
  background-color: green;
}
.text-card {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.h-divider{
  height:1px;
  width:70%;
  margin: 4px auto;
  background-color: gray;
}
</style>