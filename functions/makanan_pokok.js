/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
const {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} = require('firebase/firestore');
const Smart = require('./smart');
const criteriaValue = require('./criteriaValue');
const { db } = require('./firebase.config');

exports.handler = async (event) => {
  const { isSmart, kriteria } = event.queryStringParameters;

  const makananPokokRef = doc(db, 'makanan', 'makananPokok');

  if (event.httpMethod === 'GET') {
    const makananPokokSnap = await getDoc(makananPokokRef);

    let body = makananPokokSnap.exists() ? JSON.stringify(makananPokokSnap.data()) : { message: 'No Such Document' };
    let smartData;

    if (isSmart) {
      if (criteriaValue[kriteria]) {
        if (kriteria === 'custom') {
          const { customCriteria } = JSON.parse(event.body);

          criteriaValue.custom.forEach((crit) => {
            crit.bobot = customCriteria[crit.nama];
          });

          console.log(criteriaValue.custom);

          smartData = new Smart(makananPokokSnap.data().daftarMakanan, criteriaValue.custom);
        } else {
          smartData = new Smart(makananPokokSnap.data().daftarMakanan, criteriaValue[kriteria]);
        }

        body = JSON.stringify(smartData.food);
      } else {
        const criteriaError = 'Kriteria yang anda maksud tidak ditemukan';
        body = criteriaError;
      }
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    };
  }

  if (event.httpMethod === 'POST') {
    await updateDoc(makananPokokRef, {
      daftarMakanan: arrayUnion(JSON.parse(event.body)),
    });

    const makananPokokSnap = await getDoc(makananPokokRef);

    console.log(event.body);

    const successRespon = {
      message: `Makanan ${JSON.parse(event.body).nama} berhasil ditambahkan`,
      data: makananPokokSnap.data(),
    };

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: makananPokokSnap.exists() ? JSON.stringify(successRespon) : { message: 'No Such Document' },
    };
  }

  return {
    statusCode: 405,
    body: 'Method Not Allowed',
  };
};
