function solution(n) {
  let answer = 0;

  // 약수 찾기
  const num = n - 1;
  answer = findSmallestDivisor(num);
  // for(let i = 2; i <= num; i++) {
  //     if(num % i === 0) {
  //         answer = i;
  //         break;
  //     }
  // }

  return answer;
}

function findSmallestDivisor(num) {
  if (num <= 1) return num;
  if (num % 2 === 0) return 2;
  if (num % 3 === 0) return 3;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0) return i;
    if (num % (i + 2) === 0) return i + 2;
  }

  return num;
}
