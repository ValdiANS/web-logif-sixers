const {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} = require('firebase/firestore');
const { db } = require('./firebase.config');

exports.handler = async (event) => {
  const makananPokokRef = doc(db, 'makanan', 'makananPokok');

  if (event.httpMethod === 'GET') {
    const makananPokokSnap = await getDoc(makananPokokRef);

    return {
      statusCode: 200,
      body: makananPokokSnap.exists() ? JSON.stringify(makananPokokSnap.data()) : 'No Such Document',
    };
  }

  if (event.httpMethod === 'POST') {
    await updateDoc(makananPokokRef, {
      daftarMakanan: arrayUnion(JSON.parse(event.body)),
    });

    const makananPokokSnap = await getDoc(makananPokokRef);

    console.log(event.body);

    return {
      statusCode: 200,
      body: makananPokokSnap.exists() ? JSON.stringify(makananPokokSnap.data()) : 'No Such Document',
    };
  }

  return {
    statusCode: 405,
    body: 'Method Not Allowed',
  };
};
