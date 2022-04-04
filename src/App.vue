<template>
  <main v-if="!isEmpty" class="main">
    <CountryDashboard />
  </main>
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent } from 'vue';
import { useStore } from '@/store/index';

export default defineComponent({
  name: 'App',
  components: {
    CountryDashboard: defineAsyncComponent(
      () => import('@/views/CountryDashboard.vue')
    ),
  },
  setup() {
    const store = useStore();

    const init = async () => {
      await store.dispatch('fetchCountry', 'PE');
    };

    init();
    return {
      isEmpty: computed(() => store.state.country === null),
    };
  },
});
</script>

<style lang="scss">
.main {
  background: url('@/assets/desert.jpg');
  height: 100vh;
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
