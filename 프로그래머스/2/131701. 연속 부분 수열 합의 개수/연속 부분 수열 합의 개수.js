function solution(elements) {
  const set = new Set();

  // 얼마만큼 뭉치로 만들것인가
  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      const start = 0 + j;
      const end = Math.min(i + j, elements.length);
      let arr = elements.slice(start, end);
      if (i + j > elements.length) {
        const newArr = elements.slice(0, i + j - elements.length);
        arr = [...arr, ...newArr];
      }

      const sum = arr.reduce((acc, cur) => acc + cur, 0);
      set.add(sum);
    }
  }

  return set.size;
}