function solution(citations) {
  let answer = 0;
  const len = citations.length;

  citations.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    const h = citations[i];
    const k = len - i;

    if (k <= h) {
      answer = k;
      break;
    }
  }

  return answer;
}
