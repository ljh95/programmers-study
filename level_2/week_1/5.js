function solution(s) {
  let count = 0;
  let zCount = 0;

  while (s.length > 1) {
    count++;
    zCount += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }

  return [count, zCount];
}
