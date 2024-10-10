function solution(arr, divisor) {
  const array = [];

  arr.forEach((v) => {
    if (v % divisor === 0) {
      array.push(v);
    }
  });
  return array.length === 0 ? [-1] : array.sort((a, b) => a - b);
}
