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

console.log(solution(5, [4, 2], [3, 5]));

/**
 * 이 문제는 풀이보다 반례가 궁금했다.
 * 왜 정렬을 했어야 했고,
 * 왜 같은자리는 제거를 미리 했어야 했을까?
 *
 * 클로드에게 답을 구했다.
 * 1번 정렬을 해야하는 이유는 그래야 최대값을 더 정확히 계산할 수 있었기 때문이고
 * 2번은 조건 자체에 그렇게 명시되어있기에 그렇게 해야함이다.
 *
 *
 */
