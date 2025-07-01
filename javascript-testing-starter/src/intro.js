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
  // refactor implementation for the new test case
  if (numbers.length === 0) return NaN;
  const sum = numbers.reduce((a, b) => {
    return (a += b);
  });
  return sum / numbers.length;
}
