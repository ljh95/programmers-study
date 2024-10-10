function solution(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  const arr = [1];
  let sqrt = 0;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (Math.sqrt(n) === i) {
      sqrt = i;
      break;
    }
    if (n % i === 0) {
      arr.push(i);
    }
  }
  console.log(n);

  return (
    arr.reduce((acc, cur) => {
      return acc + (cur + n / cur);
    }, 0) + sqrt
  );
}
