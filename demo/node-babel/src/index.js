const myPromise = new Promise(resolve => setTimeout(() => resolve('boop'), 1000));

const bear = async() => {
  console.log('Before');

  const result = await myPromise;

  console.log('After', result);
};

bear();
