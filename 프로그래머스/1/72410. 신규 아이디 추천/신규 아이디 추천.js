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
