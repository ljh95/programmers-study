function solution(n, m, section) {
  var answer = 0;

  while (section.length > 0) {
    answer++;
    const lastNum = section[0] + m - 1;

    for (let i = 0; i < m; i++) {
      if (lastNum >= section[0]) {
        section.shift();
        if (section.length === 0) break;
      }
    }
  }

  return answer;
}

console.log(solution(8, 4, [2, 3, 6]));
/**
 * 일단 가장 속도 상관없이 그냥 없애는걸로 햇는데
 * 아마, 배열이니까 더더 성능이 안좋았을거 같다.
 *
 * 비교할 수 있는 수를 만들고
 * 하나씩 빼면서 배열의 길이를 체크
 */

/**
 * 배열을 한번만 쓸 수 있도록 해야함
 * 
 */