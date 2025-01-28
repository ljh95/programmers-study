function solution(sequence, k) {
  let answer = [];
  let start = 0;
  let end = 0;
  let sum = sequence[start];

  while (end < sequence.length) {
    if (sum === k) {
      answer.push([start, end]);
      sum -= sequence[start];
      start++;
    } else if (sum < k) {
      end++;
      if (end < sequence.length) sum += sequence[end];
    } else {
      sum -= sequence[start];
      start++;
    }
  }

  answer.sort((a, b) => {
    const [aStart, aEnd] = a;
    const [bStart, bEnd] = b;

    const aLen = aEnd - aStart;
    const bLen = bEnd - bStart;

    if (bLen === aLen) {
      return aStart - bStart;
    } else {
      return aLen - bLen;
    }
  });
  return answer[0];
}