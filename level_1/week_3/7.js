function solution(s) {
  var answer = 0;
  const counting = (s) => {
    const x = s[0];
    let x_cnt = 1;

    let idx = 1;
    for (let i = 1; i < s.length; i++) {
      const element = s[i];
      if (element === x) {
        x_cnt++;
        idx++;
      } else {
        x_cnt--;
      }

      if (x_cnt === 0) {
        break;
      }
    }

    answer++;

    if (s.length <= idx * 2) {
      return;
    } else {
      counting(s.slice(idx * 2));
    }
  };

  counting(s);

  return answer;
}

/**
 * 조건을 꼼꼼히 보자
 * 연속되면 안된다고 하는경우도 잇고
 * 추가되는 경우도 있다.
 * 조금 더 꼼꼼히 하면 문제를 푸슨 시간을 더욱 단축할 수 있을것 같다.
 * 이번에도 재귀로 풀었는데
 * 뭔가 맞는진 모르겠다.
 *
 */
