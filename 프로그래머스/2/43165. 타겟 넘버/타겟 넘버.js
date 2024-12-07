function solution(nums, target) {
  let count = 0;
  function dfs(index, sum) {
    if (index === nums.length) {
      if (sum === target) {
        count++;
      }
      return;
    }

    dfs(index + 1, sum + nums[index]);
    dfs(index + 1, sum - nums[index]);
  }
  dfs(0, 0);
  return count;
}
