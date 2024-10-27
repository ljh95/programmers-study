function solution(k, score) {
  let min = 2000;
  const answer = [];
  const list = [];

  for (let i = 0; i < score.length; i++) {
    const element = score[i];
    if (i < k) {
      list.push(element);

      min = Math.min(min, element);
      answer.push(min);
      continue;
    }

    list.push(element);
    list.sort((a, b) => a - b);
    list.shift();

    answer.push(list[0]);
  }
  return answer;
}
