function solution(k, tangerine) {
  const m = new Map();
  for (let i = 0; i < tangerine.length; i++) {
    const t = tangerine[i];
    m.set(t, (m.get(t) ?? 0) + 1);
  }
  const arr = Array.from(m).sort((a, b) => b[1] - a[1]);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i][1];
    if (count >= k) {
      return i + 1;
    }
  }
}
console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
