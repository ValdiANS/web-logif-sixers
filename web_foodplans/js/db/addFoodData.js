import CONFIG from './config.js';

import {
  getMakananPokok,
  getLaukPauk,
  getBuah,
  getSayur,
} from './getFoodData.js';

const addMakananPokok = async (food) => {
  try {
    const foodData = await getMakananPokok();

    const checkData = foodData.daftarMakanan.some((foodItem) => {
      return foodItem.nama === food.nama;
    });

    if (checkData) {
      return {
        error: true,
        msg: `${food.nama} already exist !!!`,
      };
    }

    const response = await fetch(CONFIG.makananPokokEndpoint, {
      method: 'POST',
      body: JSON.stringify(food),
    });

    const respJson = await response.json();
    console.log(respJson);

    return respJson;

  } catch(err) {
    console.log(err);

    return {
      error: true,
      msg: `Error: ${err}`,
    };
  }
};

const addLaukPauk = async (food) => {
  try {
    const foodData = await getLaukPauk();

    const checkData = foodData.daftarMakanan.some((foodItem) => {
      return foodItem.nama === food.nama;
    });

    if (checkData) {
      return {
        error: true,
        msg: `${food.nama} already exist !!!`,
      };
    }

    const response = await fetch(CONFIG.laukPaukEndpoint, {
      method: 'POST',
      body: JSON.stringify(food),
    });

    const respJson = await response.json();

    return respJson;

  } catch(err) {
    console.log(err);

    return {
      error: true,
      msg: `Error: ${err}`,
    };
  }
};

const addBuah = async (food) => {
  try {
    const foodData = await getBuah();

    const checkData = foodData.daftarMakanan.some((foodItem) => {
      return foodItem.nama === food.nama;
    });

    if (checkData) {
      return {
        error: true,
        msg: `${food.nama} already exist !!!`,
      };
    }

    const response = await fetch(CONFIG.buahEndpoint, {
      method: 'POST',
      body: JSON.stringify(food),
    });

    const respJson = await response.json();

    return respJson;

  } catch(err) {
    console.log(err);

    return {
      error: true,
      msg: `Error: ${err}`,
    };
  }
};

const addSayur = async (food) => {
  try {
    const foodData = await getSayur();

    const checkData = foodData.daftarMakanan.some((foodItem) => {
      return foodItem.nama === food.nama;
    });

    if (checkData) {
      return {
        error: true,
        msg: `${food.nama} already exist !!!`,
      };
    }

    const response = await fetch(CONFIG.sayurEndpoint, {
      method: 'POST',
      body: JSON.stringify(food),
    });

    const respJson = await response.json();

    return respJson;
  } catch(err) {
    console.log(err);

    return {
      error: true,
      msg: `Error: ${err}`,
    };
  }
};

export {
  addMakananPokok,
  addLaukPauk,
  addBuah,
  addSayur,
};
