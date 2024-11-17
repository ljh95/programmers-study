function solution(A, B) {
  var answer = 0;
  const len = A.length;
  const Arr = A.sort((a, b) => a - b);
  const Brr = B.sort((a, b) => a - b);

  for (i = 0; i < len; i++) {
    const minA = Arr[i];
    const maxB = Brr[len - i - 1];

    answer = answer + minA * maxB;
  }

  return answer;
}
