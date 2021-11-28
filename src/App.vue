<!-- eslint-disable max-len -->
<template>
  <div class="app-wrapper container mx-auto mb-16">
    <header class="mt-2">
      <navbar />
    </header>

    <main>
      <h1 class="text-4xl font-medium my-12 text-center">
        Implementasi Metode SMART
      </h1>

      <div class="flex gap-x-6">
        <aside>
          <div class="mb-6">
            <filter-card />
          </div>

          <button @click="toggleCriteria" class="border-gray-400 border-solid border p-1 bg-gray-50 m-1">
            Toggle form
          </button>
          <div :class="classObject">
            <criteria-form />
          </div>
        </aside>

        <section class="flex-grow">
          <ranking />
        </section>
      </div>

      <div class="mt-32">
        <food-nav />

        <div class="food-card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center mt-8">
          <food-card />
          <food-card />
          <food-card />
          <food-card />
          <food-card />
          <food-card />
          <food-card />
          <food-card />
          <food-card />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import { ref, computed } from 'vue';

import Navbar from './components/navbar.vue';
import Ranking from './components/ranking.vue';
import FilterCard from './components/filterCard.vue';
import CriteriaForm from './components/criteriaForm.vue';
import FoodNav from './components/foodNav.vue';
import FoodCard from './components/foodCard.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Ranking,
    FilterCard,
    CriteriaForm,
    FoodNav,
    FoodCard,
  },

  setup() {
    const test = ref(true);
    const toggleCriteria = () => {
      test.value = !test.value;
    };

    const classObject = computed(() => ({
      hidden: test.value,
    }));

    return {
      toggleCriteria,
      classObject,
    };
  },
};
</script>

<style lang="scss">

body {
  font-family: Poppins, Helvetica, Arial, sans-serif;
}
</style>
