// test netlify functions
exports.handler = async () => {
  console.log('test function ran');

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
