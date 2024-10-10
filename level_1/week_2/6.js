function solution(arr) {
  let count = 0;
  const len = arr.length;
  for (let i = 2; i < len; i++) {
    for (let j = i; j < len; j++) {
      for (let k = j; k < len; k++) {
        if (arr[i - 2] + arr[j - 1] + arr[k] === 0) count++;
      }
    }
  }
  return count;
}
