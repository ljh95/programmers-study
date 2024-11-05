function solution(n) {
  if (n == 1 || n == 2) return n;
  if (n == 3) return 3;

  const arr = Array.from({ length: n + 1 }, (v, i) => BigInt(i));
  let acc = BigInt(1);
  for (let i = 4; i < arr.length; i++) {
    acc += arr[i - 2];
    arr[i] = (BigInt(2) + acc) % BigInt(1234567);
  }
  return Number(arr[n]);
}
