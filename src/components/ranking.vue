<template>
  <div class="ranking-wrapper bg-white rounded-2xl py-4 px-12 h-full w-full">
    <h1 class="text-3xl font-semibold">
      Alternative Ranking
    </h1>

    <ol class="list-decimal mt-4">
      <li v-for="makanan in test" :key="makanan.nama">
        {{ makanan.nama }} : {{ makanan.nilaiAkhir }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  setup() {
    const test = [
      {
        nama: 'Nasi Putih',
        nilaiAkhir: 100,
      },
      {
        nama: 'Nasi Merah',
        nilaiAkhir: 100,
      },
      {
        nama: 'Roti Tawar',
        nilaiAkhir: 100,
      },
      {
        nama: 'Crackers',
        nilaiAkhir: 100,
      },
      {
        nama: 'Ketan Putih',
        nilaiAkhir: 100,
      },
      {
        nama: 'Sagu',
        nilaiAkhir: 100,
      },
      {
        nama: 'Singkong',
        nilaiAkhir: 100,
      },
      {
        nama: 'Ubi Jalar',
        nilaiAkhir: 100,
      },
      {
        nama: 'Jagung',
        nilaiAkhir: 100,
      },
    ];

    return {
      test,
    };
  },
};
</script>

<style>

</style>
