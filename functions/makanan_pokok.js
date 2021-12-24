/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
const {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} = require('firebase/firestore');
const Smart = require('./smart/smart');
const criteriaValue = require('./smart/criteriaValue');
const { db } = require('./config/firebase_config');

exports.handler = async (event) => {
  const { isSmart, kriteria } = event.queryStringParameters;

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST',
    'Content-Type': 'application/json',
  };

  const makananPokokRef = doc(db, 'makanan', 'makananPokok');

  if (event.httpMethod === 'GET') {
    const makananPokokSnap = await getDoc(makananPokokRef);

    const body = makananPokokSnap.exists() ? JSON.stringify(makananPokokSnap.data()) : { message: 'No Such Document' };

    return {
      statusCode: 200,
      headers,
      body,
    };
  }

  if (event.httpMethod === 'POST') {
    let makananPokokSnap = await getDoc(makananPokokRef);

    let body = makananPokokSnap.exists() ? JSON.stringify(makananPokokSnap.data()) : { message: 'No Such Document' };
    let successRespon;

    if (isSmart) {
      let smartData;

      if (criteriaValue[kriteria]) {
        if (kriteria === 'custom') {
          const { customCriteria } = JSON.parse(event.body);

          criteriaValue.custom.forEach((crit) => {
            crit.bobot = customCriteria[crit.nama];
          });

          smartData = new Smart(makananPokokSnap.data().daftarMakanan, criteriaValue.custom);
        } else {
          smartData = new Smart(makananPokokSnap.data().daftarMakanan, criteriaValue[kriteria]);
        }

        body = JSON.stringify(smartData.food);
      } else {
        const criteriaError = 'Kriteria yang anda maksud tidak ditemukan';
        body = criteriaError;
      }

      successRespon = JSON.parse(body);
    } else {
      await updateDoc(makananPokokRef, {
        daftarMakanan: arrayUnion(JSON.parse(event.body)),
      });

      makananPokokSnap = await getDoc(makananPokokRef);

      console.log(event.body);

      successRespon = {
        error: false,
        message: `Makanan ${JSON.parse(event.body).nama} berhasil ditambahkan`,
        data: JSON.parse(body),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: makananPokokSnap.exists() ? JSON.stringify(successRespon) : { message: 'No Such Document' },
    };
  }

  return {
    statusCode: 405,
    body: 'Method Not Allowed',
  };
};
