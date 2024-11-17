function solution(s) {
  const ss = s + s;
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const str = ss.slice(i, s.length + i);

    if (isRight(str)) {
      answer++;
    }
  }

  return answer;
}

function isRight(s) {
  const arr = [s[0]];
  for (let i = 1; i < s.length; i++) {
    const v = s[i];

    if (["[", "{", "("].includes(v)) {
      arr.push(v);
    } else {
      const top = arr.pop();
      if (
        (v === "]" && top === "[") ||
        (v === "}" && top === "{") ||
        (v === ")" && top === "(")
      )
        continue;
      else {
        return false;
      }
    }
  }

  return arr.length === 0;
}

console.log(solution("{(})"));
console.log(solution("[](){}"));
console.log(solution("}]()[{"));
console.log(solution("[)(]"));

/**
 * 처음에 map으로 하려다가 14번 반례, "{(})"에서 스택으로 했어야 함을 깨닫게 됨
 * 왜 바로 스택를 떠올리지 못하고 map을 떠올렸을까..
 */
