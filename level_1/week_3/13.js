function solution(ingredient) {
  return find(ingredient);
}

const find = (arr) => {
  let si = -1;
  let ei = 0;
  let cnt = 0;
  let ddd = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === si) {
      i = ei;
      continue;
    }

    if (ddd.length >= 4) {
      ddd = [...ddd.slice(1), arr[i]];
    } else {
      ddd.push(arr[i]);
    }

    if (ddd.join("") === "1231") {
      ddd = [];
      cnt++;
      if (si === -1) {
        ei = i;
        si = i - 3;
      } else {
        si = i - 4 - (ei - si);
        ei = i;
      }
      i = -1;
    }
  }
  return cnt;
};

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
