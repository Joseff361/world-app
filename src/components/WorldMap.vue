<template>
  <object
    :data="require('@/assets/world.svg')"
    width="100%"
    height="100%"
    type="image/svg+xml"
    ref="mapRef"
  ></object>
</template>

<script>
import { ref, watch } from 'vue';
import { useStore } from '@/store/index';
import countries from '@/shared/countries';

export default {
  setup() {
    const mapRef = ref(null);
    const store = useStore();

    watch(
      () => store.state.country,
      () => {
        for (let code in countries) {
          const country = mapRef.value.contentDocument.getElementById(code);

          if (country) {
            if (code === store.state.country.cca2) {
              country.style.fill = '#478bf8';
            } else {
              country.style.fill = '#f2f2f2';
            }
          }
        }
      }
    );

    return {
      mapRef,
    };
  },
};
</script>
