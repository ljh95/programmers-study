function solution(n) {
  const str = String(n);
  return str.split("").reduce((acc, cur) => {
    return acc + Number(cur);
  }, 0);
}
