export default () => {
  console.log("hello, world");
};

export const factorial = (n) => {
  if (n <= 0) return 1;
  if (n >= 1) return n * factorial(n - 1);
};

export const world = () => {
  console.log("world");
};
