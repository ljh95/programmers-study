function solution(arr) {
  let prev = -1;

  return arr.reduce((acc, cur, i) => {
    if (i == 0) {
      prev = cur;
      return [cur];
    }
    if (prev === cur) {
      return acc;
    } else {
      prev = cur;
      acc.push(cur);
      return acc;
    }
  }, []);
}
