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