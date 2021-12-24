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

  const sayurRef = doc(db, 'makanan', 'sayur');

  if (event.httpMethod === 'GET') {
    const sayurSnap = await getDoc(sayurRef);

    const body = sayurSnap.exists() ? JSON.stringify(sayurSnap.data()) : { message: 'No Such Document' };
    // let smartData;

    // if (isSmart) {
    //   if (criteriaValue[kriteria]) {
    //     if (kriteria === 'custom') {
    //       const { customCriteria } = JSON.parse(event.body);

    //       criteriaValue.custom.forEach((crit) => {
    //         crit.bobot = customCriteria[crit.nama];
    //       });

    //       console.log(criteriaValue.custom);

    //       smartData = new Smart(sayurSnap.data().daftarMakanan, criteriaValue.custom);
    //     } else {
    //       smartData = new Smart(sayurSnap.data().daftarMakanan, criteriaValue[kriteria]);
    //     }

    //     body = JSON.stringify(smartData.food);
    //   } else {
    //     const criteriaError = 'Kriteria yang anda maksud tidak ditemukan';
    //     body = criteriaError;
    //   }
    // }

    return {
      statusCode: 200,
      headers,
      body,
    };
  }

  if (event.httpMethod === 'POST') {
    let sayurSnap = await getDoc(sayurRef);

    let body = sayurSnap.exists() ? JSON.stringify(sayurSnap.data()) : { message: 'No Such Document' };
    let successRespon;

    if (isSmart) {
      let smartData;

      if (criteriaValue[kriteria]) {
        if (kriteria === 'custom') {
          const { customCriteria } = JSON.parse(event.body);

          criteriaValue.custom.forEach((crit) => {
            crit.bobot = customCriteria[crit.nama];
          });

          smartData = new Smart(sayurSnap.data().daftarMakanan, criteriaValue.custom);
        } else {
          smartData = new Smart(sayurSnap.data().daftarMakanan, criteriaValue[kriteria]);
        }

        body = JSON.stringify(smartData.food);
      } else {
        const criteriaError = 'Kriteria yang anda maksud tidak ditemukan';
        body = criteriaError;
      }

      successRespon = JSON.parse(body);
    } else {
      await updateDoc(sayurRef, {
        daftarMakanan: arrayUnion(JSON.parse(event.body)),
      });

      sayurSnap = await getDoc(sayurRef);

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
      body: sayurSnap.exists() ? JSON.stringify(successRespon) : { message: 'No Such Document' },
    };
  }

  return {
    statusCode: 405,
    body: 'Method Not Allowed',
  };
};
