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

console.log(solution([7, 9, 1, 1, 4]));

/**
 * 다른 사람 풀이에서
 * circular 개념이 좋았다.
 * 어차피 최대 개수가 0~2n 까지므로, 배열을 2번 넣어 1개의 배열로 만들고
 *
 * 근데 합을 구함에 있어, 저렇게 할 수 있나..?
 * sum += circular[i+j]
 * set.add(sum)
 * -> 이 부분이 킥인거 같은데, 생각해낼 수 있을지 모르겠당 이렇게 풀라고 만든 문제이려나..?
 * 확실히 메모리적으로나 시간적으로나 효율적일것 같다.... 이런 방식을 배워야 겠지,,? 근데 어떻게 알아!
 */
