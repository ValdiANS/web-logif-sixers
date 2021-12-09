// test netlify functions
const Smart = require('./smart');

const { test } = process.env;

exports.handler = async () => {
  console.log('test function ran');
  console.log(`process.env.test: ${test}`);

  const sm = new Smart(
    [
      {
        test: 'test 123',
      },
    ],

    [
      {
        bobot: 100,
        nama: 'Kalori',
        jenisData: 'benefit',
      },
      {
        bobot: 40,
        nama: 'Protein',
        jenisData: 'cost',
      },
      {
        bobot: 90,
        nama: 'Lemak',
        jenisData: 'benefit',
      },
      {
        bobot: 70,
        nama: 'Karbohidrat',
        jenisData: 'benefit',
      },
    ],
  );

  const data = {
    name: 'test',
    testArray: ['a', 1, true, { waw: 'wow' }],
    kriteria: sm.criteria,
  };

  // return response to browser
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
};
