function solution(n, words) {
  let answer = [0, 0];
  const set = new Set();

  for (let i = 1; i < words.length; i++) {
    set.add(words[i - 1]);

    if (isWrong(words[i - 1], words[i], set)) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
  }

  return answer;
}

function isWrong(prev, cur, set) {
  if (set.has(cur)) return true;
  return prev[prev.length - 1] !== cur[0];
}

console.log(solution(3, ["abc", "cbd", "ddd", "ddd", "dbc", "cbd"]));
