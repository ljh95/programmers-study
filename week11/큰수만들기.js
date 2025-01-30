function solution(number, k) {
  const stack = [];
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    const current = number[i];

    // 스택의 top이 현재 숫자보다 작다면 제거
    while (count < k && stack.length > 0 && stack[stack.length - 1] < current) {
      stack.pop();
      count++;
    }

    stack.push(current);
  }

  // k개를 아직 다 제거하지 못한 경우 뒤에서부터 제거
  while (count < k) {
    stack.pop();
    count++;
  }

  return stack.join("");
}

/**
 * 
 * 
 * 
 * 
function solution(number, k) {
  let answer = "0";

  const len = number.length - k;
  const list = combination(number.split(""), len);

  list.forEach((s) => {
    if (Number(answer) < Number(s)) answer = s;
  });

  return answer;
}

function combination(arr, r) {
  const result = [];

  function dfs(start, path) {
    if (path.length === r) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      dfs(i + 1, path);
      path.pop();
    }
  }

  dfs(0, []);
  return result.map((r) => r.join(""));
}

console.log(solution("1231234", 3));


 * 
 */
