<template>
  <n-modal v-model:show="show" :on-close="closeModal" :mask-closable="false"
           preset="dialog" title="Authenticate for environment" >
    <template #header>
      <div>Authenticate for environment</div>
    </template>
    <div>
      <n-space vertical>
        <n-select
            placeholder="Please select environment"
            label-field="name"
            value-field="name"
            :value="env.name"
            :options="envs"
            @update:value="envSelected"
        />
        <n-input v-model:value="env.apiKey" type="text" placeholder="Your Api-Key for REST API" />
      </n-space>
    </div>
    <template #action>
      <n-button type="primary" @click="closeModal">OK</n-button>
    </template>
  </n-modal>

</template>

<script>
import {NSelect, NModal, NButton, NInput, NSpace} from 'naive-ui';
import {envs, EnvSettings} from '@/auth/Env.js';

export default {
  name: "AuthPopup",
  components: {NSelect, NModal, NButton, NInput, NSpace},
  props: {
    env: EnvSettings,
    show: Boolean
  },
  emits: [
      'update:show',
      'update:env',
  ],
  data() {
    return {
      envs,
      _env: {...this.env},
    }
  },
  watch: {
  },
  methods: {
    envSelected(value, option) {
      console.log('Env option selected: %o', option);
      this._env = option;
      this.$emit('update:env', option);
    },
    closeModal() {
      this.$emit('update:show', false);
    }
  }
}
</script>

<style scoped>

</style>
