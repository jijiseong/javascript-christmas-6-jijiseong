function sum(arr) {
  const total = arr.reduce((acc, value) => acc + value, 0);
  return total;
}

export default sum;
