<template>
  <div class="results">
    <div class="results__box --country">
      <span>Country</span>
      <strong>{{ country }}</strong>
    </div>
    <div class="results__box --population">
      <span>Population</span>
      <strong>{{ population }}</strong>
    </div>
    <div class="results__box --flag">
      <span>Flag</span>
      <strong>
        <img :src="flag" alt="Country Flag" />
      </strong>
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
      country: computed(() => store.state.country.name.common),
      population: computed(() => store.state.country.population),
      flag: computed(() => store.state.country.flags.png),
    };
  },
};
</script>

<style lang="scss" scope>
.results {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: #fff;

  &__box {
    padding: 10px;
    border-radius: 8px;
    width: 33%;
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
      flex: 0.2;
    }

    strong {
      text-align: center;
      flex: 0.8;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 15px;
    }

    & img {
      max-width: 80px;
      height: auto;
    }

    &.--country {
      background-color: #478bf8;
    }

    &.--population {
      background-color: #a24829;
    }

    &.--flag {
      background-color: #f7973d;
    }
  }
}
</style>
