const kriteriaBulking = [
  {
    bobot: 100,
    nama: 'kalori',
    jenisData: 'benefit',
  },
  {
    bobot: 40,
    nama: 'protein',
    jenisData: 'cost',
  },
  {
    bobot: 90,
    nama: 'lemak',
    jenisData: 'benefit',
  },
  {
    bobot: 70,
    nama: 'karbohidrat',
    jenisData: 'benefit',
  },
];

const kriteriaDiet = [
  {
    bobot: 90,
    nama: 'kalori',
    jenisData: 'cost',
  },
  {
    bobot: 90,
    nama: 'protein',
    jenisData: 'benefit',
  },
  {
    bobot: 80,
    nama: 'lemak',
    jenisData: 'cost',
  },
  {
    bobot: 70,
    nama: 'karbohidrat',
    jenisData: 'benefit',
  },
];

const kriteriaJagaBB = [
  {
    bobot: 50,
    nama: 'kalori',
    jenisData: 'cost',
  },
  {
    bobot: 50,
    nama: 'protein',
    jenisData: 'benefit',
  },
  {
    bobot: 50,
    nama: 'lemak',
    jenisData: 'cost',
  },
  {
    bobot: 50,
    nama: 'karbohidrat',
    jenisData: 'benefit',
  },
];

const custom = [
  {
    bobot: null,
    nama: 'kalori',
    jenisData: 'benefit',
  },
  {
    bobot: null,
    nama: 'protein',
    jenisData: 'benefit',
  },
  {
    bobot: null,
    nama: 'lemak',
    jenisData: 'benefit',
  },
  {
    bobot: null,
    nama: 'karbohidrat',
    jenisData: 'benefit',
  },
];

module.exports = {
  bulking: kriteriaBulking,
  diet: kriteriaDiet,
  jagaBB: kriteriaJagaBB,
  custom,
};
