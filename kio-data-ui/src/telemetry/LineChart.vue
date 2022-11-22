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
import {Chart as ChartJS, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, TimeScale, TimeSeriesScale, Colors} from 'chart.js'
import 'chartjs-adapter-date-fns';

ChartJS.register(Tooltip, Legend, LineElement, CategoryScale, PointElement, LinearScale, TimeScale, TimeSeriesScale, Colors)

export default {
  name: "LineChart",
  components: {Line},
  props: {
    chartId: {
      type: String,
      default: 'line-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    chartData: {
      type: Object
    },
    chartOptions: {
      type: Object
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
    }
  }
}
</script>

<style scoped>

</style>
