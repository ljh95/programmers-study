function solution(d, budget) {
  if (sum(d) === budget) return d.length;
  if (d.length === 1) {
    return d[0] <= budget ? 1 : 0;
  }
  if (d.reduce((a, c) => a + c, 0) <= budget) return d.length;

  const arr = d.sort((a, b) => a - b);

  const len = arr.length;
  let i = Math.floor(len / 2);
  let start = 0;
  let end = len;

  while (true) {
    const prevArr = arr.slice(0, i);
    const nextArr = arr.slice(0, i + 1);

    if (sum(prevArr) <= budget && budget <= sum(nextArr)) {
      if (sum(nextArr) === budget) i++;
      break;
    } else if (sum(prevArr) < budget) {
      start = i;
      i = Math.floor((end + i) / 2);
    } else {
      end = i;
      i = Math.floor((start + i) / 2);
    }
  }
  return i;
}

const sum = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};
