const sum = (numbers) => {
  return numbers.reduce((a, b) => Number(a) + Number(b));
};
const argv = [...process.argv];
const numbers = argv.slice(2, argv.length);
console.log(sum(numbers));
