function solution(nums, target) {
  let answer = 0;
  let length = nums.length;
  getAnswer(0, 0);
  function getAnswer(idx, value) {
    if (idx < length) {
      getAnswer(idx + 1, value + nums[idx]);
      getAnswer(idx + 1, value - nums[idx]);
    } else {
      if (value === target) {
        answer++;
      }
    }
  }
  return answer;
}
