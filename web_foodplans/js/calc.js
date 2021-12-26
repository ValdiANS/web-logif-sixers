import { $, $$ } from "./general.js";

const imtForm = $('#imtForm');
const usia = $('#usia');
const tinggi = $('#tinggi');
const beratBadan = $('#beratBadan');
const radioInput = $$('.radio-input input');
let gender = '';

let imt;
let rekomendasi;
let rekomendasiParam;

radioInput.forEach((radioItem) => {
  radioItem.addEventListener('click', () => {
    gender = radioItem.value;
  });
});

imtForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const validate = validateFrom();

  if (!validate.valid) {
    $('#errorMsg').innerText = validate.msg;
    $('#errorMsg').classList.remove('d-none');
    hideImtResult();
    return;
  }

  $('#errorMsg').classList.add('d-none');

  // Rumus IMT
  imt = parseInt(beratBadan.value) / ((parseInt(tinggi.value) / 100) ** 2);

  imtForm.reset();

  if (imt < 18.5) {
    rekomendasi = 'menambah berat badan';
    rekomendasiParam = 'bulking';
  }
  
  else if (imt >= 18.5 && imt <= 25) {
    rekomendasi = 'menjaga berat badan';
    rekomendasiParam = 'jagaBB';
  }
  
  else if (imt > 25) {
    rekomendasi = 'menurunkan berat badan (diet)';
    rekomendasiParam = 'diet';
  }
  
  setImtResult(imt, rekomendasi, rekomendasiParam);

  $('.imt-result-container').scrollIntoView();
});

const setImtResult = (imt, rekomendasi, rekomendasiParam) => {
  const heading = $('#imtResult > h1');
  const detail = $('#imtResult > p');
  const recommendationLink = $('#imtFoodRecommendations');

  heading.innerText = `IMT Anda ${imt.toFixed(2)}`;
  detail.innerHTML = `
    Indeks massa tubuh anda <strong>${imt.toFixed(2)}</strong>, maka anda direkomendasikan untuk <strong>${rekomendasi}</strong>.
  `;

  recommendationLink.href = `./foodplans.html?rekomendasi=${rekomendasiParam}`;
  recommendationLink.innerText = `Lihat Rekomendasi Makanan Untuk ${rekomendasi}`;

  $('.imt-result-container').classList.remove('d-none');
};

const hideImtResult = () => {
  $('.imt-result-container').classList.add('d-none');
};

const validateFrom = () => {
  let errorList = [];
  
  if (gender === '') {
    errorList.push('jenis kelamin');
  }

  if (usia.value === '') {
    errorList.push('usia');
  }

  if (tinggi.value === '') {
    errorList.push('tinggi');
  }
  
  if (beratBadan.value === '') {
    errorList.push('berat badan');
  }

  if (errorList.length === 0) {
    return {
      valid: true,
    };
  }
  
  const errorMsg = `Field ${errorList.join(', ')} masih kosong!`;

  return {
    msg: errorMsg,
    valid: false,
  };
};
