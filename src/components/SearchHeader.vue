<template>
  <header class="search-box">
    <div class="search-box__search">
      <label for="country-choice">Choose a country</label>
      <input
        v-model="countrySelected"
        list="countries"
        name="country-choice"
        id="country-selector"
        @change="onSelect"
      />
      <datalist id="countries">
        <option
          v-for="country in countries"
          :value="country"
          :key="country"
        ></option>
      </datalist>
    </div>
    <div class="search-box__results">
      <BasicInfo />
    </div>
  </header>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from 'vue';
import countriesList from '@/shared/countries';
import { useStore } from '@/store/index';

export default defineComponent({
  name: 'SearchHeader',
  components: {
    BasicInfo: defineAsyncComponent(() => import('@/components/BasicInfo.vue')),
  },
  setup() {
    const countries = ref<Record<string, string>>(countriesList);
    const countrySelected = ref<string | null>();
    const store = useStore();

    const onSelect = async () => {
      let countryCode = null;
      for (let code in countries.value) {
        if (countries.value[code] === countrySelected.value) countryCode = code;
      }

      if (countryCode) {
        const resp = await store.dispatch('fetchCountry', countryCode);
      }
    };

    return {
      countries,
      countrySelected,
      onSelect,
    };
  },
});
</script>

<style lang="scss" scoped>
.search-box {
  width: 100%;
  display: flex;

  &__search {
    flex: 0.35;
    display: flex;
    flex-direction: column;
    padding-right: 15px;
    gap: 10px;

    & input {
      border: none;
      border: none;
      outline: none;
      background: #fff;
      padding: 10px;
      border-radius: 8px;
      font-family: inherit;
      font-size: 14px;
    }
  }

  &__results {
    flex: 0.65;
  }
}
</style>
