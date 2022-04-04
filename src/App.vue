<template>
  <main class="main">
    <PureLoader v-if="isLoading" />
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
    PureLoader: defineAsyncComponent(() => import('@/views/PureLoader.vue')),
  },
  setup() {
    const store = useStore();
    return {
      isLoading: computed(() => store.state.isLoading),
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
@media (max-width: 768px) {
  .main {
    height: auto;
    padding-top: 30px;
    padding-bottom: 30px;
  }
}
</style>
