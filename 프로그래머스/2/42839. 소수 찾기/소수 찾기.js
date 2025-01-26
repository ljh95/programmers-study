function solution(numbers) {
  var answer = 0;
  const nums = numbers.split("");
  let set = new Set(nums.map((b) => Number(b)));

  for (let i = 2; i <= nums.length; i++) {
    permutation(nums, i).forEach((n) => set.add(Number(n)));
  }

  for (const n of Array.from(set)) {
    if (isPrime(n)) {
      answer++;
    }
  }

  return answer;
}

// 소수 판별하기
function isPrime(num) {
  const sqrt = Math.sqrt(num);

  if (num < 2) return false;

  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 순열 만들기
function permutation(arr, r) {
  const result = [];

  function dfs(nums, path) {
    if (path.length === r) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const next = nums.filter((_, index) => index !== i);
      path.push(nums[i]);
      dfs(next, path);
      path.pop();
    }
  }

  dfs(arr, []);
  return result.map((r) => r.join(""));
}