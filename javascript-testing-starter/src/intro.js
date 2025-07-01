export function max(a, b) {
  return a > b ? a : b;
}

export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}

export function calculateAverage(numbers) {
  if (numbers.length === 0) return NaN;
  const sum = numbers.reduce((a, b) => {
    return (a += b);
  });
  return sum / numbers.length;
}

// 0! = 1
// 1! = 1
// 2! = 2 x 1
// 3! = 3 x 2 x 1

export function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
