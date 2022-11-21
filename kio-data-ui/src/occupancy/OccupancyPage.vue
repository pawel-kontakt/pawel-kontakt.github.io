<template>
Occupancy
  {{JSON.stringify(env)}}
</template>

<script>
import {EnvSettings} from "@/auth/Env.js";

export default {
  name: "OccupancyPage",
  props: {
    env: EnvSettings
  }
}
</script>

<style scoped>

</style>
