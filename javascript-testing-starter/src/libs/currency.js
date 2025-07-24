export const getExchangeRate = (from, to) => {
  console.log(`Getting the exchange rate ${from}-${to}...`);
  // To make sure our test are trust worthy, we have to make sure they are not dependent on any random values or current date and time, or any global state cause these values can change from one execution to another.
  return Math.random();
};
