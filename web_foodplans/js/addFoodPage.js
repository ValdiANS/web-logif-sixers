import { $ } from "./general.js";
import {
  addMakananPokok,
  addLaukPauk,
  addBuah,
  addSayur,
} from "./db/addFoodData.js";

const foodForm = $('#foodForm');
const resetBtn = $('button[type="reset"]');

const nama = $('#nama');
const kalori = $('#kalori');
const karbohidrat = $('#karbohidrat');
const protein = $('#protein');
const lemak = $('#lemak');
const imageUrl = $('#imageUrl');
const kategori = $('#kategori');

// Card
const cardImg = $('.card img');
const cardTitle = $('.card .card-body .card-title');
const cardKalori = $('.card .card-body .nilai-kalori');
const cardKarbohidrat = $('.card .card-body .nilai-karbohidrat');
const cardProtein = $('.card .card-body .nilai-protein');
const cardLemak = $('.card .card-body .nilai-lemak');

foodForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  hideErrorMsg();
  hideSuccessMsg();
  showLoadingSpinner();

  const formValidation = await validateForm();

  if (!formValidation.valid) {
    setErrorMsg(formValidation.msg);
    
    hideLoadingSpinner();
    showErrorMsg();
    return;
  }

  const foodData = {
    nama: nama.value,
    imageUrl: imageUrl.value,
    kandungan: {
      kalori: parseFloat(kalori.value),
      karbohidrat: parseFloat(karbohidrat.value),
      protein: parseFloat(protein.value),
      lemak: parseFloat(lemak.value),
    },
  }

  let addFood;

  switch (kategori.value) {
    case 'makananPokok':
      addFood = await addMakananPokok(foodData);
      break;

    case 'laukPauk':
      addFood = await addLaukPauk(foodData);
      break;

    case 'buah':
      addFood = await addBuah(foodData);
      break;

    case 'sayur':
      addFood = await addSayur(foodData);
      break;
  }

  if (addFood.error) {
    hideLoadingSpinner();
    setErrorMsg(addFood.msg);
    showErrorMsg();

    return;
  }

  hideLoadingSpinner();
  showSuccessMsg();

  foodForm.reset();
});


foodForm.addEventListener('change', async (e) => {
  hideErrorMsg();
  hideSuccessMsg();

  cardTitle.innerText = nama.value;
  cardKalori.innerText = `Kalori : ${kalori.value || 0}`;
  cardKarbohidrat.innerText = `Karbohidrat : ${karbohidrat.value || 0}`;
  cardProtein.innerText = `Protein : ${protein.value || 0}`;
  cardLemak.innerText = `Lemak : ${lemak.value || 0}`;

  try {
    const image = await checkIfImageExists(imageUrl.value);
    cardImg.src = image;
    
  } catch (error) {
    cardImg.src = 'https://via.placeholder.com/300?text=Food+Thumbnail+Preview';
    console.log(error);
  }
  
})

resetBtn.addEventListener('click', (e) => {
  hideErrorMsg();
  hideSuccessMsg();

  cardImg.src = 'https://via.placeholder.com/300?text=Food+Thumbnail+Preview';
  cardTitle.innerText = nama.value;
  cardKalori.innerText = `Kalori : ${kalori.value || 0}`;
  cardKarbohidrat.innerText = `Karbohidrat : ${karbohidrat.value || 0}`;
  cardProtein.innerText = `Protein : ${protein.value || 0}`;
  cardLemak.innerText = `Lemak : ${lemak.value || 0}`;
})

// Check Image
async function checkIfImageExists(url) {
  const img = new Image();
  img.src = url;

  return new Promise((resolve, reject) => {
    img.onload = () => {
      resolve(url);
    };

    img.onerror = () => {
      reject(
        `${url} is not an image !!!`
      );
    }
  })
}

async function validateForm() {
  let errorList = [];

  if (!nama.value) {
    errorList.push('nama');
  }

  if (!kalori.value) {
    errorList.push('kalori');
  }

  if (!karbohidrat.value) {
    errorList.push('karbohidrat');
  }

  if (!protein.value) {
    errorList.push('protein');
  }

  if (!lemak.value) {
    errorList.push('lemak');
  }

  if (!imageUrl.value) {
    errorList.push('image URL');

  } else {
    try {
      const image = await checkIfImageExists(imageUrl.value);

    } catch (error) {
      console.log(`Error : ${error}`);

      return {
        valid: false,
        msg: 'Image URL is not an image',
      }
    }

  }

  if (errorList.length === 0) {
    return {
      valid: true,
      msg: 'Valid',
    };
  }

  return {
    valid: false,
    msg: `Field ${errorList.join(', ')} is empty !!!`,
  }
}

function showErrorMsg() {
  $('.error-msg-container').classList.remove('d-none');
}

function hideErrorMsg() {
  $('.error-msg-container').classList.add('d-none');
}

function setErrorMsg(msg) {
  $('#errorMsg').innerText = msg;
}

function showSuccessMsg() {
  $('.success-msg-container').classList.remove('d-none');
}

function hideSuccessMsg() {
  $('.success-msg-container').classList.add('d-none');
}

function showLoadingSpinner() {
  $('.loading-spinner-container').classList.remove('d-none');
}

function hideLoadingSpinner() {
  $('.loading-spinner-container').classList.add('d-none');
}
