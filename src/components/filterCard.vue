<!-- eslint-disable max-len -->
<template>
  <div class="filter-card-wrapper bg-white rounded-2xl p-4 pb-12">
    <h3 class="text-2xl font-medium">
      Filter
    </h3>

    <hr class="border-none h-0.5 bg-gray-600 my-3">

    <form>
      <span class="block text-lg">
        <input type="radio" id="bulking" name="filter" value="bulking" checked class="cursor-pointer">
        <label for="bulking" class="pl-4 cursor-pointer">Bulking</label>
      </span>

      <span class="block">
        <input type="radio" id="diet" name="filter" value="diet" class="cursor-pointer">
        <label for="diet" class="pl-4 cursor-pointer">Diet</label>
      </span>

      <span class="block">
        <input type="radio" id="jagaBB" name="filter" value="jagaBB" class="cursor-pointer">
        <label for="jagaBB" class="pl-4 cursor-pointer">Jaga Berat Badan</label>
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
