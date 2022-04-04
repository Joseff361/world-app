<template>
  <header class="search-box">
    <div class="search-box__search">
      <label for="country-choice">Choose a country</label>
      <input
        v-model="countrySelected"
        list="countries"
        name="country-choice"
        id="country-selector"
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
      <div class="search-box__results__info">
        <span>Language</span>
        <strong>-</strong>
      </div>
      <div class="search-box__results__info">
        <span>Region</span>
        <strong>-</strong>
      </div>
      <div class="search-box__results__info">
        <span>Currency</span>
        <strong>-</strong>
      </div>
      <div class="search-box__results__info">
        <span>Capital</span>
        <strong>-</strong>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import countriesList from '@/shared/countries';

export default defineComponent({
  name: 'SearchHeader',
  setup() {
    const countries = ref<Record<string, string>>(countriesList);
    const countrySelected = ref(null);

    return {
      countries,
      countrySelected,
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
      }
    }
  }
}
</style>
