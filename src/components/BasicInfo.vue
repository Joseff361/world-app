<template>
  <div class="results">
    <div class="results__info">
      <span>Languages</span>
      <strong>{{ languages }}</strong>
    </div>
    <div class="results__info">
      <span>Region</span>
      <strong>{{ region }}</strong>
    </div>
    <div class="results__info">
      <span>Currency</span>
      <strong>{{ currency }}</strong>
    </div>
    <div class="results__info">
      <span>Capital</span>
      <strong>{{ capital }}</strong>
    </div>
  </div>
</template>

<script>
import { useStore } from '@/store/index';
import { computed } from '@vue/runtime-core';

export default {
  setup() {
    const store = useStore();

    return {
      languages: computed(() => {
        if (!store.state.country) return '-';

        const countriesObj = store.state.country.languages;
        const languages = Object.keys(countriesObj).map(
          key => countriesObj[key]
        );
        return languages.join(',');
      }),
      region: computed(() => {
        return store.state.country ? store.state.country.region : '-';
      }),
      currency: computed(() => {
        if (!store.state.country) return '-';

        const currencyObj = store.state.country.currencies;
        const key = Object.keys(currencyObj)[0];
        return currencyObj[key].name;
      }),
      capital: computed(() => {
        return store.state.country ? store.state.country.capital[0] : '-';
      }),
    };
  },
};
</script>

<style lang="scss" scoped>
.results {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 15px;

  &__info {
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    background-color: #fff;
    border-radius: 8px;
    flex: 0.25;

    span {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.5);
      flex: 0.2;
    }

    strong {
      text-align: center;
      flex: 0.8;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000;
    }
  }
}
</style>
