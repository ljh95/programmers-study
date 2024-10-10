function solution(numbers) {
  let defualt = Array.from({ length: 10 }, (v, i) => i).reduce((a, c) => a + c);
  let minus = numbers.reduce((a, c) => a + c);

  return defualt - minus;
}
