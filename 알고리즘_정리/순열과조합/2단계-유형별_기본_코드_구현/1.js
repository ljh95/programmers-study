/**
1️⃣ 일반 순열 구현해보기
문제: [1,2,3] 중에서 2개를 뽑아 나열하는 경우 구하기
예상 결과: [1,2], [1,3], [2,1], [2,3], [3,1], [3,2]
한번 이 문제를 직접 구현해보시겠어요?
힌트가 필요하시다면:

재귀 함수를 사용합니다
현재 숫자를 고정하고 나머지 숫자들로 다시 순열을 만듭니다
forEach를 사용하면 편합니다

코드를 작성해보시고, 어려운 부분이 있다면 말씀해주세요!
 */

const arr = [1, 2, 3]; // 기본 배열
const r = 2; // 2개를 뽑는 상황

const fn = (arr, r) => {
  if (r === 1) return arr.length;
  let answer = 0;

  arr.forEach((_, idx) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    answer += fn(rest, r - 1);
  });

  return answer;
};

const permutation = (arr, r) => {
  if (r === 1) return arr.map((v) => [v]);
  let result = [];

  arr.forEach((fixed, idx) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    // answer += fn(rest, r - 1);
    const pp = permutation(rest, r - 1);
    const subresult = pp.map((p) => [fixed, ...p]);
    result.push(...subresult);
  });

  return result;
};
console.log(permutation(arr, r));
