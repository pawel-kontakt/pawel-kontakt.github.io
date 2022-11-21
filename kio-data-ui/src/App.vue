<template>
  <n-layout has-sider>
    <n-layout-sider
        bordered
        show-trigger
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :native-scrollbar="false"
    >
      <n-menu
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
          @update:value="menuSelection"
      />
    </n-layout-sider>
    <n-layout-content>
      <component :is="menuOption" v-bind="{env}"></component>
    </n-layout-content>
  </n-layout>
  <AuthPopup v-model:show="authConfig" v-model:env="env"></AuthPopup>
</template>

<script>
import {h} from "vue";
import {NIcon, NLayout, NLayoutSider, NLayoutContent, NMenu, NButton} from "naive-ui";
import {
  LockClosedOutline as LockIcon,
  AnalyticsOutline as TelemetryIcon,
  BodyOutline as OccupancyIcon,

} from "@vicons/ionicons5";

import AuthPopup from "@/auth/AuthPopup.vue";
import TelemetryPage from "@/telemetry/TelemetryPage.vue";
import OccupancyPage from "@/occupancy/OccupancyPage.vue";
import {prodUs} from "@/auth/Env.js";

function renderIcon(icon) {
  return () => h(NIcon, null, {default: () => h(icon)});
}

export default {
  name: "App",
  components: {
    NIcon, NLayout, NLayoutSider, NLayoutContent, NMenu, NButton,
    AuthPopup, TelemetryPage, OccupancyPage
  },
  data() {
    return {
      menuOptions: [
        {
          label: "Authenticate",
          key: AuthPopup.name,
          icon: renderIcon(LockIcon)
        },
        {
          label: "Telemetry",
          key: TelemetryPage.name,
          icon: renderIcon(TelemetryIcon),
        },
        {
          label: "Occupancy",
          key: OccupancyPage.name,
          icon: renderIcon(OccupancyIcon),
        }
      ],
      menuOption: TelemetryPage.name,
      authConfig: false,
      env: prodUs
    }
  },
  methods: {
    menuSelection(key) {
      switch (key) {
        case TelemetryPage.name:
          this.authConfig = false;
          this.menuOption = key;
          break;
        case AuthPopup.name:
          this.authConfig = true;
          break;
        case OccupancyPage.name:
          this.authConfig = false;
          this.menuOption = key;
          break;
      }
    },
  }
}

</script>

<style scoped>

</style>
