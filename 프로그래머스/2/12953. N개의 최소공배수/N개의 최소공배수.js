function solution(arr) {
  function getGCD(a, b) {
    while (b > 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  function getLCM(a, b) {
    return (a * b) / getGCD(a, b);
  }

  let answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
    answer = getLCM(answer, arr[i]);
  }

  return answer;
}