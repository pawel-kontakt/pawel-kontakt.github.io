<template>
  <LineChart ref="telemetryChart" :chart-data="chartData" :chart-options="chartOptions"/>
</template>

<script>

import {EnvSettings} from "@/auth/Env.js";
import {telemetryService} from "@/telemetry/TelemetryService.js";
import LineChart from "@/telemetry/LineChart.vue";

export default {
  name: "TelemetryPage",
  components: {LineChart},
  props: {
    env: EnvSettings
  },
  data() {
    return {
      chartData: {
        datasets: [{
          label: '110HQ',
          parsing: {
            xAxisKey: 'timestamp',
            yAxisKey: 'temperature'
          },
          data: [{temperature: 18, timestamp: new Date('2022-11-21T20:00:00.000Z')}]
        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'timeseries'
          },
          y: {
            type: 'linear',
            grace: '10%',
            display: true,
            position: 'left',
          }
        }
      }
    }
  },
  computed: {
    allParamsProvided() {
      return !!this.env.apiKey;
    },
    chartOptionsC() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'timeseries'
          },
          y: {
            type: 'linear',
            grace: '10%',
            display: true,
            position: 'left',
          }
        }
      }
    },
    chartDataC() {
      return {
        datasets: [{
          label: '110HQ',
          parsing: {
            xAxisKey: 'timestamp',
            yAxisKey: 'temperature'
          },
          data: [{temperature: 18, timestamp: new Date('2022-11-21T20:00:00.000Z')}]
        }]
      }
    }
  },
  watch: {
    allParamsProvided() {
      this.loadTelemetry();
    }
  },
  methods: {
    loadTelemetry() {
      console.log('Load telemetry for Env: %o', this.env);
      this.chartData.datasets[0].data.push({temperature: 18, timestamp: new Date('2022-11-21T20:01:00.000Z')});
      telemetryService.loadTelemetry(this.env, {}, telemetryBatch => {
        console.log(this.chartData.datasets[0].data);
        // this.chartData.datasets[0].data.push(telemetryBatch);
        console.log(telemetryBatch);
        // this.$refs.telemetryChart.updateChart();

      });
    }
  }
}
</script>

<style scoped>

</style>
