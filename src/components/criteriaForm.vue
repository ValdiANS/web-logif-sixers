<!--eslint-disable max-len-->
<template>
  <form class="bg-white rounded-2xl p-4 pb-10">
    <h3 class="text-2xl font-medium">
      Kriteria
    </h3>

    <hr class="border-none h-0.5 bg-gray-600 my-3">

    <span class="flex justify-between items-center my-3">
      <label for="kalori">Kalori</label>
      <input type="number" id="kalori" name="kalori" min="0" max="100" class="border-gray-600 focus:border-black focus:outline-none border-solid border-b focus:border-b-2 text-right w-16 px-1">
    </span>
    <span class="flex justify-between items-center my-3">
      <label for="protein">Protein</label>
      <input type="number" id="protein" name="protein" min="0" max="100" class="border-gray-600 focus:border-black focus:outline-none border-solid border-b focus:border-b-2 text-right w-16 px-1">
    </span>
    <span class="flex justify-between items-center my-3">
      <label for="lemak">Lemak</label>
      <input type="number" id="lemak" name="lemak" min="0" max="100" class="border-gray-600 focus:border-black focus:outline-none border-solid border-b focus:border-b-2 text-right w-16 px-1">
    </span>
    <span class="flex justify-between items-center my-3">
      <label for="karbohidrat">karbohidrat</label>
      <input type="number" id="karbohidrat" name="karbohidrat" min="0" max="100" class="border-gray-600 focus:border-black focus:outline-none border-solid border-b focus:border-b-2 text-right w-16 px-1">
    </span>
  </form>
</template>

<script>
export default {

};
</script>

<style>

</style>
