import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { Country } from '@/shared/interfaces';
import countriesApi from '@/api/countriesApi';

export interface CustomState {
  country: Country | null;
}

export const key: InjectionKey<Store<CustomState>> = Symbol();

export const store = createStore<CustomState>({
  state: {
    country: null,
  },
  getters: {
    getCountry: (state): Country | null => {
      return state.country;
    },
  },
  mutations: {
    setCountry: (state, country: Country) => {
      state.country = country;
    },
  },
  actions: {
    fetchCountry: async ({ commit }, countryCode) => {
      try {
        const { data } = await countriesApi.get(countryCode);
        if (data && data.length > 0) {
          commit('setCountry', data[0]);
          return true;
        } else {
          return;
        }
      } catch (e) {
        return;
      }
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
