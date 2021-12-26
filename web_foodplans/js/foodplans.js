import { $, $$ } from "./general.js";
import { getFoodSmart } from "./db/getFoodData.js";
import { foodSmartComponent } from "./component.js";

const criteriaForm = $('#criteriaForm');
const submitBtn = $('form button[type="submit"]');
const radioInputs = $$('input[name="criteria"]')
let radioInputSelection = '';

// custom criteria field
const allCustomCriteriaField = $$('#customCriteriaContainer input[type="number"]');
const customKalori = $('#customKalori');
const customKarbohidrat = $('#customKarbohidrat');
const customProtein = $('#customProtein');
const customLemak = $('#customLemak');

// result container
const makananPokokResultContainer = $('#makananPokokResultContainer');
const laukPaukResultContainer = $('#laukPaukResultContainer');
const buahResultContainer = $('#buahResultContainer');
const sayurResultContainer = $('#sayurResultContainer');

criteriaForm.addEventListener('submit', (e) => {
  e.preventDefault();

  makananPokokResultContainer.innerHTML = '';
  laukPaukResultContainer.innerHTML = '';
  buahResultContainer.innerHTML = '';
  sayurResultContainer.innerHTML = '';

  if (radioInputSelection === 'custom') {
    const customCriteria = JSON.stringify({
      customCriteria: {
        kalori: parseFloat(customKalori.value),
        karbohidrat: parseFloat(customKarbohidrat.value),
        protein: parseFloat(customProtein.value),
        lemak: parseFloat(customLemak.value),
      }
    });

    fetchMakananPokokSmart(
      true,
      radioInputSelection,
      customCriteria,
    );

    fetchLaukPaukSmart(
      true,
      radioInputSelection,
      customCriteria,
    );

    fetchBuahSmart(
      true,
      radioInputSelection,
      customCriteria,
    );

    fetchSayurSmart(
      true,
      radioInputSelection,
      customCriteria,
    );
    
    return;
  }

  fetchMakananPokokSmart(radioInputSelection);
  fetchLaukPaukSmart(radioInputSelection);
  fetchBuahSmart(radioInputSelection);
  fetchSayurSmart(radioInputSelection);
});

radioInputs.forEach((radioItem) => {
  radioItem.addEventListener('click', (e) => {
    // fetch result according radio input selection when user click radio input

    if (radioItem.value === 'custom') {
      // show custom criteria form
      showCustomCriteriaForm();

      submitBtn.disabled = true;
    } else {
      // hide custom criteria form
      hideCustomCriteriaForm();
      submitBtn.disabled = false;
    }

    radioInputSelection = radioItem.value;
  })

  const rekomendasi = checkUrlParam();

  if (rekomendasi) {
    radioItem.checked = false;

    if (radioItem.value === rekomendasi) {
      radioItem.checked = true;
    }
  }

  if(radioItem.checked) {
    // fetch result according radio input selection for the first time
    radioInputSelection = radioItem.value;

    fetchMakananPokokSmart(radioInputSelection);
    fetchLaukPaukSmart(radioInputSelection);
    fetchBuahSmart(radioInputSelection);
    fetchSayurSmart(radioInputSelection);
  }
});

allCustomCriteriaField.forEach((inputField) => {
  inputField.addEventListener('input', (e) => {
    const checkForm = validateCustomCriteriaForm();
    
    if (checkForm) {
      submitBtn.disabled = false;
      return;
    }

    submitBtn.disabled = true;
  });
});

// fetch food
async function fetchMakananPokokSmart(custom = false, criteria, customCriteria = {}) {
  hideErrorMsg('makanan-pokok');
  showLoadingSpinner('makanan-pokok');

  let makananPokokSmartResult;

  try {
    if (custom) {
      makananPokokSmartResult = await getFoodSmart({
        endpoint: 'makanan_pokok',
        criteria: radioInputSelection,
        customCriteria,
      });
    } else {
      makananPokokSmartResult = await getFoodSmart({
        endpoint: 'makanan_pokok',
        criteria: radioInputSelection,
      });
    }
  
    makananPokokResultContainer.innerHTML = '';
    makananPokokSmartResult.forEach((food, index) => { 
      makananPokokResultContainer.innerHTML += foodSmartComponent(food, index+1);
    }); 
  } catch (error) {
    // console.log(error);

    setErrorMsg(error.message);
    showErrorMsg('makanan-pokok');
  }

  hideLoadingSpinner('makanan-pokok');
}

async function fetchLaukPaukSmart(custom = false, criteria, customCriteria = {}) {
  hideErrorMsg('lauk-pauk');
  showLoadingSpinner('lauk-pauk');

  let laukPaukSmartResult;

  try {
    if (custom) {
      laukPaukSmartResult = await getFoodSmart({
        endpoint: 'lauk_pauk',
        criteria: radioInputSelection,
        customCriteria,
      });
    } else {
      laukPaukSmartResult = await getFoodSmart({
        endpoint: 'lauk_pauk',
        criteria: radioInputSelection,
      });
    }
  
    laukPaukResultContainer.innerHTML = '';
    laukPaukSmartResult.forEach((food, index) => { 
      laukPaukResultContainer.innerHTML += foodSmartComponent(food, index+1);
    }); 
  } catch (error) {
    // console.log(error);

    setErrorMsg(error.message);
    showErrorMsg('lauk-pauk');
  }

  hideLoadingSpinner('lauk-pauk');
}

async function fetchBuahSmart(custom = false, criteria, customCriteria = {}) {
  hideErrorMsg('buah');
  showLoadingSpinner('buah');

  let buahSmartResult;

  try {
    if (custom) {
      buahSmartResult = await getFoodSmart({
        endpoint: 'buah',
        criteria: radioInputSelection,
        customCriteria,
      });
    } else {
      buahSmartResult = await getFoodSmart({
        endpoint: 'buah',
        criteria: radioInputSelection,
      });
    }
  
    buahResultContainer.innerHTML = '';
    buahSmartResult.forEach((food, index) => { 
      buahResultContainer.innerHTML += foodSmartComponent(food, index+1);
    }); 
  } catch (error) {
    // console.log(error);

    setErrorMsg(error.message);
    showErrorMsg('buah');
  }

  hideLoadingSpinner('buah');
}

async function fetchSayurSmart(custom = false, criteria, customCriteria = {}) {
  hideErrorMsg('sayur');
  showLoadingSpinner('sayur');

  let sayurSmartResult;

  try {
    if (custom) {
      sayurSmartResult = await getFoodSmart({
        endpoint: 'sayur',
        criteria: radioInputSelection,
        customCriteria,
      });
    } else {
      sayurSmartResult = await getFoodSmart({
        endpoint: 'sayur',
        criteria: radioInputSelection,
      });
    }
  
    sayurResultContainer.innerHTML = '';
    sayurSmartResult.forEach((food, index) => { 
      sayurResultContainer.innerHTML += foodSmartComponent(food, index+1);
    }); 
  } catch (error) {
    // console.log(error);

    setErrorMsg(error.message);
    showErrorMsg('sayur');
  }

  hideLoadingSpinner('sayur');
}

function checkUrlParam() {
  const url = new URL(window.location.href);
  const urlParam = new URLSearchParams(url.search);

  if (urlParam.has('rekomendasi')) {
    return urlParam.get('rekomendasi');
  }

  return false;
}

function validateCustomCriteriaForm() {
  let check = true;

  allCustomCriteriaField.forEach((inputField) => {
    if (inputField.value === '') {
      check = false;
    }
  });

  return check;
}

function showCustomCriteriaForm() {
  $('#customCriteriaContainer').classList.remove('d-none');
}

function hideCustomCriteriaForm() {
  $('#customCriteriaContainer').classList.add('d-none');
}

function showErrorMsg(selector) {
  $(`.${selector} + .error-msg-container`).classList.remove('d-none');
}

function hideErrorMsg(selector) {
  $(`.${selector} + .error-msg-container`).classList.add('d-none');
}

function setErrorMsg(selector, msg) {
  $(`.${selector} + .error-msg-container #errorMsg`).innerText = msg;
}

function showLoadingSpinner(selector) {
  $(`.${selector}.loading-spinner-container`).classList.remove('d-none');
}

function hideLoadingSpinner(selector) {
  $(`.${selector}.loading-spinner-container`).classList.add('d-none');
}
