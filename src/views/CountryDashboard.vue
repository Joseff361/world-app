<template>
  <section class="dashboard">
    <h3 class="dashboard__title">WorldApp</h3>
    <div class="dashboard__header">
      <SearchHeader />
    </div>
    <div class="dashboard__body">
      <div class="dashboard__body__results">
        <ResultsBar />
      </div>
      <div class="dashboard__body__content">
        <div class="dashboard__body__content__map">
          <WorldMap />
        </div>
        <div class="dashboard__body__content__info">
          <ExtraInfo />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'CountryDashboard',
  components: {
    SearchHeader: defineAsyncComponent(
      () => import('@/components/SearchHeader.vue')
    ),
    ResultsBar: defineAsyncComponent(
      () => import('@/components/ResultsBar.vue')
    ),
    WorldMap: defineAsyncComponent(() => import('@/components/WorldMap.vue')),
    ExtraInfo: defineAsyncComponent(() => import('@/components/ExtraInfo.vue')),
  },
});
</script>

<style lang="scss" scoped>
.dashboard {
  width: 70vw;
  height: 85vh;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  padding: 20px 25px;
  display: flex;
  flex-direction: column;

  &__title {
    font-size: 30px;
  }

  &__header {
    margin-top: 30px;
  }

  &__body {
    background: #fff;
    width: 100%;
    flex-grow: 1;
    margin-top: 20px;
    border-radius: 8px;
    padding: 15px;
    overflow: auto;

    display: flex;
    flex-direction: column;

    &__content {
      flex-grow: 1;
      margin-top: 15px;
      display: flex;

      &__map {
        width: 75%;
      }
    }
  }
}
</style>
