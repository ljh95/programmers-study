function solution(t, p) {
  var answer = 0;

  const p_len = p.length;
  const t_len = t.length;

  for (let i = 0; i <= t_len - p_len; i++) {
    const t_subStr = Number(t.substring(i, i + p_len));
    if (isBig(t_subStr, p)) answer++;
  }

  return answer;
}

function isBig(a, b) {
  return Number(a) <= Number(b);
}
