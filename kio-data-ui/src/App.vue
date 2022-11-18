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
      <component :is="menuOption"></component>
    </n-layout-content>
  </n-layout>
</template>

<script>
import {h, defineComponent} from "vue";
import {NIcon, NLayout, NLayoutSider, NLayoutContent, NMenu} from "naive-ui";
import {
  LockClosedOutline as LockIcon,
  AnalyticsOutline as TelemetryIcon,
  BodyOutline as OccupancyIcon,

} from "@vicons/ionicons5";

import AuthPopup from "./auth/AuthPopup.vue";
import TelemetryPage from "./telemetry/TelemetryPage.vue";
import OccupancyPage from "./occupancy/OccupancyPage.vue";

function renderIcon(icon) {
  return () => h(NIcon, null, {default: () => h(icon)});
}

const menuOptions = [
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
];
let menuOption = TelemetryPage.name

export default defineComponent({
  components: {
    NLayout, NLayoutSider, NLayoutContent, NMenu,
    AuthPopup, TelemetryPage, OccupancyPage
  },
  props(){},
  setup() {
    return {
      menuOptions,
      menuOption,
    };
  }
});
</script>

<style scoped>
.n-layout {
  height: 100vh;
}
</style>


