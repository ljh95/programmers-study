function solution(phone_number) {
  const len = phone_number.length;
  const starLen = len - 4;
  return "*".repeat(starLen) + phone_number.slice(starLen);
}
