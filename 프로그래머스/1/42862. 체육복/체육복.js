function solution(n, lost, reserve) {
  var answer = n;

  lost = lost.sort((a, b) => a - b);
  reserve = reserve.sort((a, b) => a - b);
  lost = lost.filter((ls) => {
    if (reserve.includes(ls)) {
      reserve = reserve.filter((r) => r != ls);
      return false;
    }
    return true;
  });

  for (const ls of lost) {
    const arr = [ls - 1, ls + 1];
    let has = false;

    for (const a of arr) {
      if (reserve.includes(a)) {
        has = true;
        reserve = reserve.filter((r) => r != a);
        break;
      }
    }
    if (has === false) answer--;
  }
  return answer;
}
