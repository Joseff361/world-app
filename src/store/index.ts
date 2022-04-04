import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { Country } from '@/shared/interfaces';
import countriesApi from '@/api/countriesApi';

export interface CustomState {
  country: Country | null;
  isLoading: boolean;
}

export const key: InjectionKey<Store<CustomState>> = Symbol();

export const store = createStore<CustomState>({
  state: {
    country: null,
    isLoading: false,
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
    setLoad: (state, isLoading: boolean) => {
      state.isLoading = isLoading;
    },
  },
  actions: {
    fetchCountry: async ({ commit }, countryCode) => {
      try {
        commit('setLoad', true);
        const { data } = await countriesApi.get(countryCode);
        commit('setLoad', false);
        if (data && data.length > 0) {
          commit('setCountry', data[0]);
          return true;
        } else {
          return;
        }
      } catch (e) {
        commit('setLoad', false);
        return;
      }
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
