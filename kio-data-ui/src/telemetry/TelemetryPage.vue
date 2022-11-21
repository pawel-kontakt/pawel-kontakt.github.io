<template>
  <LineChart/>
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
      telemetrySeries: {}
    }
  },
  computed: {
    allParamsProvided() {
      return !!this.env.apiKey;
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
      telemetryService.loadTelemetry(this.env, {}, this.telemetrySeries);
    }
  }
}
</script>

<style scoped>

</style>
