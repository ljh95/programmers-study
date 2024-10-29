function solution(new_id) {
  var answer = new_id
    .toLowerCase()
    .replace(/[^\w|\.|\-]/g, "")
    .replace(/\.{2,}/g, ".") // .이 두개 이상
    .replace(/^\.|\.$/g, "") // 처음과 끝에 .
    .replace(/^$/, "a") // 빈 문자열..!
    .slice(0, 15)
    .replace(/\.$/, "");
  const len = answer.length;

  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
