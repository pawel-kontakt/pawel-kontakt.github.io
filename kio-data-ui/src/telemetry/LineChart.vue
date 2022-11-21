<template>
  <Line
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :styles="chartStyles"
  />
</template>

<script>
import {Line} from 'vue-chartjs'
import {Chart as ChartJS, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale} from 'chart.js'

ChartJS.register(Tooltip, Legend, LineElement,  CategoryScale, PointElement, LinearScale)

export default {
  name: "LineChart",
  components: {Line},
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    chartStyles: {
      type: Object,
      default: {
        height: `100vh`,
        width: `80vw`,
        position: 'relative'
      }
    },
    plugins: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March','4',5,6,7,8,9],
        datasets: [{data: [40, 20, 12, 11, 22,33,44,55,5]}]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
