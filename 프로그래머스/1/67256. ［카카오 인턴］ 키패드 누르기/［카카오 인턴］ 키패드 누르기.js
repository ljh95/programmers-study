function solution(numbers, hand) {
  let answer = "";
  let c_l = "*";
  let c_r = "#";
  numbers.forEach((n) => {
    if ([1, 4, 7].includes(n)) {
      c_l = n;
      answer += "L";
    } else if ([3, 6, 9].includes(n)) {
      c_r = n;
      answer += "R";
    } else {
      const result = getDistance(c_l, c_r, n, hand);
      answer += result;
      result === "L" ? (c_l = n) : (c_r = n);
    }
  });
  return answer;
}

// left, right, equal
function getDistance(c_l, c_r, num, hand) {
  const coord_l = getCoord(c_l);
  const coord_r = getCoord(c_r);
  const coord_num = getCoord(num);

  const d_l =
    Math.abs(coord_l[0] - coord_num[0]) + Math.abs(coord_l[1] - coord_num[1]);
  const d_r =
    Math.abs(coord_r[0] - coord_num[0]) + Math.abs(coord_r[1] - coord_num[1]);

  if (d_l < d_r) return "L";
  if (d_l > d_r) return "R";

  return hand === "left" ? "L" : "R";
}

const m = {
  1: [0, 0],
  2: [0, 1],
  3: [0, 2],
  4: [1, 0],
  5: [1, 1],
  6: [1, 2],
  7: [2, 0],
  8: [2, 1],
  9: [2, 2],
  0: [3, 1],
  "*": [3, 0],
  "#": [3, 2],
};
function getCoord(num) {
  return m[num];
}
