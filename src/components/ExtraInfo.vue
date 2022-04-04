<template>
  <div v-if="maps.length > 0" class="extra">
    <a :href="maps" target="_blank">
      <img src="@/assets/google-maps.png" alt="Google Maps Logo" />
      <span>Google Maps</span>
    </a>
  </div>
</template>

<script>
import { useStore } from '@/store/index';
import { computed } from '@vue/runtime-core';

export default {
  setup() {
    const store = useStore();

    return {
      maps: computed(() => {
        return store.state.country ? store.state.country.maps.googleMaps : '';
      }),
    };
  },
};
</script>

<style lang="scss" scoped>
.extra {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & a {
    display: block;
    width: 60%;
    text-decoration: none !important;
    color: inherit;
    transition: 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }

  & img {
    max-width: 100%;
    height: auto;
  }
}
</style>
