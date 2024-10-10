function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, i) => {
    if (signs[i]) {
      return acc + cur;
    } else {
      return acc - cur;
    }
  }, 0);
}
