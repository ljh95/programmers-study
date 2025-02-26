function solution(arr) {
  if (arr.length < 2) return [-1];

  const min = Math.min(...arr);
  return arr.filter((v) => v !== min);
}
