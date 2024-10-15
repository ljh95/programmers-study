function solution(arr) {
  return arr.filter((a, i) => {
    if (i === 0) return true;
    if (a === arr[i - 1]) return false;
    return true;
  });
}
