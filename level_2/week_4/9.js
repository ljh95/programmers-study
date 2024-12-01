function solution(priorities, location) {
  let index = location;
  let count = 0;

  while (priorities.length > 0) {
    const max = Math.max(...priorities);
    const first = priorities.shift();

    if (first < max) {
      priorities.push(first);
      index = index - 1 < 0 ? priorities.length - 1 : index - 1;
    } else {
      count++;
      if (index === 0) {
        break;
      }
      index = index - 1 < 0 ? priorities.length - 1 : index - 1;
    }
  }

  return count;
}
/**
 * 마찬가지로 쉽게 한것 같긴 한데.. 이렇게 대충 풀어도 되나 싶기도하다.
 * 시간이 남는다면 개선해보면 좋겠다.
 */
console.log(solution([1, 1, 9, 1, 1, 1], 0));
