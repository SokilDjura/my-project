<template>
  <b-container fluid>
    <b-row class='mb-4'>
      <b-col class='col-lg-auto mb-4 mb-lg-0' cols='12'>
        <v-date-picker
          v-model='calendarRange'
          :firstDayOfWeek='2'
          class='date-picker'
          is-range
        />
      </b-col>
      <b-col col>
        <b-card class='sales-charts'>
          <b-row class='d-flex justify-content-between mb-4'>
            <b-col class='p-0' col>
              <h4 class='text-center'>Продажі</h4>
            </b-col>
            <b-col class='col-auto p-0'>
              <b-button
                class='show-more text-black py-0'
                variant='link'
                @click='openSalesModal'
              >
                <b-icon font-scale='1' icon='collection-fill'></b-icon>
              </b-button>
            </b-col>
          </b-row>
          <b-row class='justify-content-around'>
            <b-col
              class='d-flex justify-content-center'
              cols='3'
            >
              <div class='position-relative'>
                <doughnut
                  :chart-data='chartData'
                  :chart-options='chartOptions'
                  :height='140'
                  :width='200'
                />
                <div class='back-text'><p>3</p></div>
                <p class='title'>Chart №1</p>
              </div>
            </b-col>
            <b-col
              class='d-flex justify-content-center'
              cols='3'
            >
              <div class='position-relative'>
                <doughnut
                  :chart-data='chartData'
                  :chart-options='chartOptions'
                  :height='140'
                  :width='200'
                />
                <div class='back-text'><p>7</p></div>
                <p class='title'>Chart №2</p>
              </div>
            </b-col>
            <b-col
              class='d-flex justify-content-center'
              cols='3'
            >
              <div class='position-relative'>
                <doughnut
                  :chart-data='chartData'
                  :chart-options='chartOptions'
                  :height='140'
                  :width='200'
                />
                <div class='back-text'><p>5</p></div>
                <p class='title'>Chart №3</p>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row class='flex-column-reverse flex-lg-row mb-4'>
      <b-col
        cols='12'
        lg='5'
      >
        <b-card class='doughnut-visiting-card'>
          <b-row class='mb-4'>
            <b-col class='p-0' col>
              <h4 class='text-center'>Відвідування</h4>
            </b-col>
          </b-row>
          <div class='position-relative d-flex justify-content-center'>
            <doughnut
              :chart-data='chartData'
              :chart-options='chartOptions'
              :height='280'
              :width='300'
            />
            <div class='back-text back-text-visiting'>Відвідування<br>за період<p>5</p>клієнтів</div>
          </div>
        </b-card>
      </b-col>
      <b-col
        class='mb-4 mb-lg-0'
        cols='12'
        lg='7'
      >
        <b-card>
          <b-row class='d-flex justify-content-between mb-4'>
            <b-col class='p-0' col>
              <h4 class='text-center'>Баланс</h4>
            </b-col>
            <b-col class='col-auto p-0'>
              <b-button
                class='show-more text-black py-0'
                variant='link'
                @click='openBalanceModal'
              >
                <b-icon font-scale='1' icon='collection-fill'></b-icon>
              </b-button>
            </b-col>
          </b-row>
          <bar
            :chart-data='barChartData'
            :chart-options='barChartOptions'
            :height='240'
          >
          </bar>
          <div class='balance d-flex justify-content-center mt-3'>
            <div class='d-flex flex-column text-center me-4'>
              <span class='small'>доход</span>
              <span class='sum'>7 600</span>
            </div>
            <div class='d-flex flex-column text-center me-4'>
              <span class='small'>расход</span>
              <span class='sum'>7 600</span>
            </div>
            <div class='d-flex flex-column text-center'>
              <span class='small'>итого</span>
              <span class='sum'>7 600</span>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        class='mb-4'
        cols='12'
        lg='3'
      >
        <b-card>
          <b-container fluid>
            <b-row class='mb-2'>
              <b-col class='p-0' col>
                <h5 class='text-break text-center'>Групові відвідування</h5>
              </b-col>
              <b-col class='col-auto p-0'></b-col>
            </b-row>
            <div class='visits-list'>
              <a class='text-break' href='#'>Соболева Оксана</a>
            </div>
          </b-container>
        </b-card>
      </b-col>
      <b-col
        class='mb-4'
        cols='12'
        lg='3'
      >
        <b-card>
          <b-container fluid>
            <b-row class='mb-2'>
              <b-col class='p-0' col>
                <h5 class='text-break text-center'>Групові відвідування</h5>
              </b-col>
              <b-col class='col-auto p-0'></b-col>
            </b-row>
            <div class='visits-list'>
              <a class='text-break' href='#'>Соболева Оксана</a>
            </div>
          </b-container>
        </b-card>
      </b-col>
      <b-col
        class='mb-4'
        cols='12'
        lg='3'
      >
        <b-card>
          <b-container fluid>
            <b-row class='mb-2'>
              <b-col class='p-0' col>
                <h5 class='text-break text-center'>Групові відвідування</h5>
              </b-col>
              <b-col class='col-auto p-0'></b-col>
            </b-row>
            <div class='visits-list'>
              <a class='text-break' href='#'>Соболева Оксана</a>
            </div>
          </b-container>
        </b-card>
      </b-col>
      <b-col
        class='mb-4'
        cols='12'
        lg='3'
      >
        <b-card>
          <b-container fluid>
            <b-row class='d-flex justify-content-between mb-2'>
              <b-col class='p-0' col>
                <h5 class='text-break text-center'>Групові відвідування</h5>
              </b-col>
              <b-col class='col-auto p-0'>
                <b-button class='show-more text-black p-0' variant='link'>
                  <b-icon font-scale='1' icon='collection-fill'></b-icon>
                </b-button>
              </b-col>
            </b-row>
            <div class='visits-list'>
              <a class='text-break' href='#'>Соболева Оксана</a>
            </div>
          </b-container>
        </b-card>
      </b-col>
    </b-row>
    <sales-info-modal
      :is-open='isSalesModalOpen'
      @close-modal='closeSalesModal'
    />
    <balance-info-modal
      :is-open='isBalanceModalOpen'
      @close-modal='closeBalanceModal'
    />
  </b-container>
</template>

<script>
import { Bar, Doughnut } from 'vue-chartjs/legacy'
import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js'
import SalesInfoModal from '@/components/modals/sales-info-modal'
import BalanceInfoModal from '@/components/modals/balance-info-modal'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, BarElement, LinearScale)

export default {
  name: 'DashboardPage',
  components: {
    Doughnut,
    Bar,
    SalesInfoModal,
    BalanceInfoModal
  },
  data() {
    return {
      isSalesModalOpen: false,
      isBalanceModalOpen: false,
      calendarRange: {
        start: new Date(),
        end: new Date()
      },
      chartData: {
        labels: ['VueJs', 'ReactJs'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651'],
            data: [2, 5],
            hoverOffset: 4
          }
        ]
      },
      barChartData: {
        labels: [
          'Абонементи',
          'Разові заняття',
          'Продаж товарів',
          'Поповнення депозиту',
          'Вивід з депозиту',
          'Повернення',
          'Виплата викладачам',
          'Виплата адміністраторам',
          'Закупка товарів',
          'Дод. витрати'
        ],
        datasets: [
          {
            barPercentage: 0.5,
            categoryPercentage: 1,
            backgroundColor: '#41B883',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20]
          }
        ]
      },
      chartOptions: {
        cutout: '85%',
        responsive: false,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'bottom',
            align: 'center',
            labels: {
              boxWidth: 15,
              boxHeight: 15
            }
          }
        }
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: {
            display: false
          }
        }
      }
    }
  },
  methods: {
    openSalesModal() {
      this.isSalesModalOpen = true
    },
    closeSalesModal() {
      this.isSalesModalOpen = false
    },
    openBalanceModal() {
      this.isBalanceModalOpen = true
    },
    closeBalanceModal() {
      this.isBalanceModalOpen = false
    }
  }
}
</script>

<style lang='scss' scoped>
.sales-charts {
  height: 100%;
}
.back-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 26px;
  text-align: center;
  p {
    font-size: 34px;
    margin: 0;
  }
}
.back-text-visiting {
  padding-top: 60px;
}
.title {
  position: absolute;
  width: 100%;
  bottom: -34px;
  text-align: center;
  margin: 0;
  font-weight: 500;
}
.doughnut-visiting-card {
  height: 100%;
}
.balance {
  .sum {
    font-size: 20px;
    font-weight: 500;
    color: green;
  }
}
.visits-list {
  a {
    font-size: 18px;
    text-decoration: none;
  }
}
.show-more {
  font-size: 14px;
}
</style>