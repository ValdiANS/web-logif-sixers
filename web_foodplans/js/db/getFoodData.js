import CONFIG from "./config.js";

const getMakananPokok = async () => {

  try {
    const response = await fetch(CONFIG.makananPokokEndpoint);
    const respJson = await response.json();
  
    return respJson; 

  } catch (error) {
    console.log(error);

    return false;
  }
}

const getLaukPauk = async () => {

  try {
    const response = await fetch(CONFIG.laukPaukEndpoint);
    const respJson = await response.json();
  
    return respJson; 

  } catch (error) {
    console.log(error);

    return false;
  }
}

const getBuah = async () => {

  try {
    const response = await fetch(CONFIG.buahEndpoint);
    const respJson = await response.json();
  
    return respJson; 

  } catch (error) {
    console.log(error);

    return false;
  }
}

const getSayur = async () => {

  try {
    const response = await fetch(CONFIG.sayurEndpoint);
    const respJson = await response.json();
  
    return respJson; 

  } catch (error) {
    console.log(error);

    return false;
  }
}

const getFoodSmart = async ({ endpoint, criteria, customCriteria = {} }) => {

  try {

    if (criteria === 'custom') {
      const response = await fetch(
        CONFIG.customCriteriaEndpoint(endpoint, criteria),
        {
          method: 'POST',
          body: customCriteria,
        }
      );

      const respJson = await response.json();

      return respJson;
    }

    const response = await fetch(
      CONFIG.customCriteriaEndpoint(endpoint, criteria),
      {
        method: 'POST',
      }
    );

    const respJson = await response.json();

    return respJson;
  } catch (error) {

    if (error.message === 'Failed to fetch') {
      throw new Error('Check your internet');
    }

    return false;
  }
}

export {
  getMakananPokok,
  getLaukPauk,
  getBuah,
  getSayur,
  getFoodSmart,
};
