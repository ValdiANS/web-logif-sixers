<!--eslint-disable max-len-->
<template>
  <nav class="bg-white overflow-hidden rounded-2xl w-max mx-auto">
    <ul class="flex flex-col sm:flex-row w-full">
      <li class="sm:w-32 md:w-40 lg:w-48">
        <input type="radio" v-model="selected" id="all" name="foodNav" value="all" class="hidden">
        <label
          for="all"
          class="block w-full text-center py-3 px-4 sm:px-0 cursor-pointer"
          :class="[ isActive.all ? activeClass : '' ]"
        >
          All
        </label>
      </li>
      <li class="sm:w-32 md:w-40 lg:w-48">
        <input type="radio" v-model="selected" id="makananPokok" name="foodNav" value="makananPokok" class="hidden">
        <label
          for="makananPokok"
          class="block w-full text-center py-3 px-4 sm:px-0 cursor-pointer"
          :class="[ isActive.makananPokok ? activeClass : '' ]"
        >
          Makanan Pokok
        </label>
      </li>
      <li class="sm:w-32 md:w-40 lg:w-48">
        <input type="radio" v-model="selected" id="sayur" name="foodNav" value="sayur" class="hidden">
        <label
          for="sayur"
          class="block w-full text-center py-3 px-4 sm:px-0 cursor-pointer"
          :class="[ isActive.sayur ? activeClass : '' ]"
        >
          Sayur
        </label>
      </li>
      <li class="sm:w-32 md:w-40 lg:w-48">
        <input type="radio" v-model="selected" id="buah" name="foodNav" value="buah" class="hidden">
        <label
          for="buah"
          class="block w-full text-center py-3 px-4 sm:px-0 cursor-pointer"
          :class="[ isActive.buah ? activeClass : '' ]"
        >
          Buah
        </label>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const selected = ref('all');

    // eslint-disable-next-line arrow-body-style
    const isActive = computed(() => ({
      all: selected.value === 'all',
      makananPokok: selected.value === 'makananPokok',
      sayur: selected.value === 'sayur',
      buah: selected.value === 'buah',
    }));

    const activeClass = 'bg-green-700 text-white';

    return {
      selected,
      isActive,
      activeClass,
    };
  },
};
</script>

<style>

</style>
