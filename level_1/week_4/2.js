function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^\w|\.|\-]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "");
  const l = answer.length;
  return l > 2 ? answer : answer + answer[l - 1].repeat(3 - l);
}

/**
 * 이 문제는 이전에 풀었던 문제였고, 다시 따라쳐보면서 그냥 학습해봄
 * 역시 정규식 필요한가.. 그냥 공부하라고 만든 문제같음
 */
