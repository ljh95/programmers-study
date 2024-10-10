function solution(n) {
  let three = n.toString(3);
  let reverse = three
    .split("")
    .reverse((a, b) => a - b)
    .join("");
  return parseInt(reverse, 3);
}
