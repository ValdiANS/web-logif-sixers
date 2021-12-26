import { $ } from "./general.js";
import {
  getMakananPokok,
  getLaukPauk,
  getBuah,
  getSayur,
} from "./db/getFoodData.js";
import { foodComponent, emptyComponent } from "./component.js";

fetchMakananPokok();
fetchLaukPauk();
fetchBuah();
fetchSayur();

async function fetchMakananPokok() {
  showLoadingSpinner('makananPokok');
  const makananPokokData = await getMakananPokok();
  const makananPokokContainer = $('#makananPokokContainer');

  if (makananPokokData.daftarMakanan.length === 0) {
    makananPokokContainer.innerHTML += emptyComponent();
    
    hideLoadingSpinner('makananPokok');
    return;
  }
  
  makananPokokData.daftarMakanan.forEach((food) => {
    makananPokokContainer.innerHTML += foodComponent(food);
  });

  hideLoadingSpinner('makananPokok');
}

async function fetchLaukPauk() {
  showLoadingSpinner('laukPauk');
  const laukPaukData = await getLaukPauk();
  const laukPaukContainer = $('#laukPaukContainer');

  if (laukPaukData.daftarMakanan.length === 0) {
    laukPaukContainer.innerHTML += emptyComponent();
    
    hideLoadingSpinner('laukPauk');
    return;
  }
  
  laukPaukData.daftarMakanan.forEach((food) => {
    laukPaukContainer.innerHTML += foodComponent(food);
  });

  hideLoadingSpinner('laukPauk');
}


async function fetchBuah() {
  showLoadingSpinner('buah');
  const buahContainer = $('#buahContainer');
  const buahData = await getBuah();

  if (buahData.daftarMakanan.length === 0) {
    buahContainer.innerHTML += emptyComponent();
    
    hideLoadingSpinner('buah');
    return;
  }
  
  buahData.daftarMakanan.forEach((food) => {
    buahContainer.innerHTML += foodComponent(food);
  });

  hideLoadingSpinner('buah');
}

async function fetchSayur() {
  showLoadingSpinner('sayur');
  const sayurContainer = $('#sayurContainer');
  const sayurData = await getSayur();

  if (sayurData.daftarMakanan.length === 0) {
    sayurContainer.innerHTML += emptyComponent();
    
    hideLoadingSpinner('sayur');
    return;
  }
  
  sayurData.daftarMakanan.forEach((food) => {
    sayurContainer.innerHTML += foodComponent(food);
  });

  hideLoadingSpinner('sayur');
}

function showLoadingSpinner(section) {
  switch(section) {
    case 'makananPokok':
      $('#makananPokokContainer .loading-spinner-container').classList.remove('d-none');
      break;
    
    case 'laukPauk':
      $('#laukPaukContainer .loading-spinner-container').classList.remove('d-none');
      break;
    
    case 'buah':
      $('#buahContainer .loading-spinner-container').classList.remove('d-none');
      break;
    
    case 'sayur':
      $('#sayurContainer .loading-spinner-container').classList.remove('d-none');
      break;
  }
}

function hideLoadingSpinner(section) {
  switch(section) {
    case 'makananPokok':
      $('#makananPokokContainer .loading-spinner-container').classList.add('d-none');
      break;
    
    case 'laukPauk':
      $('#laukPaukContainer .loading-spinner-container').classList.add('d-none');
      break;
    
    case 'buah':
      $('#buahContainer .loading-spinner-container').classList.add('d-none');
      break;
    
    case 'sayur':
      $('#sayurContainer .loading-spinner-container').classList.add('d-none');
      break;
  }
}