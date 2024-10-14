function solution(nums) {
  var answer = 0;
  let halfLength = nums.length / 2;
  let setNums = new Set(nums);
  if (setNums.size >= halfLength) {
    answer = halfLength;
  } else {
    answer = setNums.size;
  }

  return answer;
}
//prev
