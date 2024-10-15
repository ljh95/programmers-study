const getCombinations = function (arr, selectNum) {
  const results = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, i) => {
    const rest = arr.slice(i + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((c) => [fixed, ...c]);
    results.push(...attached);
  });
  return results;
};

function solution(nums) {
  var answer = 0;
  const combinations = getCombinations(nums, 3);
  combinations.forEach((c) => {
    let sum = c[0] + c[1] + c[2];
    if (isPrime(sum)) answer++;
  });

  return answer;
}

function isPrime(n) {
  if (n === 2) return true;
  if (n < 2 || n % 2 === 0) return false;
  let result = true;

  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i === 0) {
      result = false;
      break;
    }
  }
  return result;
}
