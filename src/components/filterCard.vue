<template>
  <div class="filter-card-wrapper bg-white rounded-2xl p-4 pb-12">
    <h3 class="text-2xl font-medium">
      Filter
    </h3>

    <hr class="border-none h-0.5 bg-gray-600 my-3">

    <form>
      <span class="block text-lg">
        <input type="radio" id="bulking" name="filter" value="bulking" checked>
        <label for="bulking" class="ml-4">Bulking</label>
      </span>

      <span class="block">
        <input type="radio" id="diet" name="filter" value="diet">
        <label for="diet" class="ml-4">Diet</label>
      </span>

      <span class="block">
        <input type="radio" id="jagaBB" name="filter" value="jagaBB">
        <label for="jagaBB" class="ml-4">Jaga Berat Badan</label>
      </span>
    </form>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

</style>
