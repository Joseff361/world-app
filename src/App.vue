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

<style lang="scss"></style>
