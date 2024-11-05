function solution(n) {
  const arr = Array.from({ length: n + 1 }, (_, i) => BigInt(i));
  arr.forEach((_, i) => {
    if (i > 1) {
      arr[i] = (arr[i - 1] + arr[i - 2]) % BigInt(1234567);
    }
  });
  return Number(arr[n]);
}