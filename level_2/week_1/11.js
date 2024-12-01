function solution(arr) {
  // 두 수의 최대공약수를 구하는 함수
  function getGCD(a, b) {
    while (b > 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // 두 수의 최소공배수를 구하는 함수
  function getLCM(a, b) {
    return (a * b) / getGCD(a, b);
  }

  // 배열의 모든 수들의 최소공배수 구하기
  let answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
    answer = getLCM(answer, arr[i]);
  }

  return answer;
}

console.log(solution([5, 10, 15, 20, 25]));
console.log(solution([1, 10, 100, 1000, 5000, 3, 9999]));
