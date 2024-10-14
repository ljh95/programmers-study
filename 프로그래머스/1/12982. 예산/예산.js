function solution(d, budget) {
  d.sort((a, b) => a - b);

  let left = 0;
  let right = d.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = calculateSum(d, mid);

    if (sum <= budget) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}

function calculateSum(arr, mid) {
  return arr.slice(0, mid).reduce((acc, cur) => acc + cur, 0);
}
