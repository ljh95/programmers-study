function solution(num) {
  if (num === 1) return 0;

  let count = 0;
  const getCollatzNumber = (number, cnt) => {
    if (number % 2 === 0) {
      number /= 2;
    } else {
      number = number * 3 + 1;
    }
    cnt += 1;

    if (number === 1) {
      return cnt;
    } else if (cnt > 500) {
      return -1;
    } else {
      return getCollatzNumber(number, cnt);
    }
  };
  return getCollatzNumber(num, count);
  var answer = 0;
  return answer;
}
