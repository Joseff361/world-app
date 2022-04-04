<template>
  <main class="main">
    <CountryDashboard />
  </main>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    CountryDashboard: defineAsyncComponent(
      () => import('@/views/CountryDashboard.vue')
    ),
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
