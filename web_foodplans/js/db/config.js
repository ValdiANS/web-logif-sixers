const baseUrl = 'https://sixers.netlify.app/.netlify/functions';

const CONFIG = {
  baseUrl,
  makananPokokEndpoint: `${baseUrl}/makanan_pokok`,
  laukPaukEndpoint: `${baseUrl}/lauk_pauk`,
  buahEndpoint: `${baseUrl}/buah`,
  sayurEndpoint: `${baseUrl}/sayur`,

  customCriteriaEndpoint: (endpoint, criteria) => (
    `${baseUrl}/${endpoint}?isSmart=true&kriteria=${criteria}`
  ),
};

export default CONFIG;
