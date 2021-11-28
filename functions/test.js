// test netlify functions

const { test } = process.env;

exports.handler = async () => {
  console.log('test function ran');
  console.log(`process.env.test: ${test}`);
  console.log(process.env);

  const data = {
    name: 'test',
    testArray: ['a', 1, true, { waw: 'wow' }],
  };

  // return response to browser
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
