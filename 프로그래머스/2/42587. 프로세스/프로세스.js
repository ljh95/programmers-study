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
