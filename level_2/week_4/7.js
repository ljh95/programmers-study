function solution(k, dungeons) {
  let answer = -1;
  const arr = getPermutations(dungeons);

  for (let i = 0; i < arr.length; i++) {
    const dungeon = arr[i];
    answer = Math.max(answer, getAnswer(k, dungeon));
  }

  return answer;
}

function getAnswer(initValue, dungeon) {
  let count = 0;

  for (let i = 0; i < dungeon.length; i++) {
    const [minimum, reduceValue] = dungeon[i];
    if (initValue >= minimum) {
      count++;
      initValue -= reduceValue;
    } else {
      break;
    }
  }

  return count;
}

function getPermutations(arr) {
  const result = [];
  const used = new Array(arr.length).fill(false);
  const currentPerm = [];

  function generatePermutaion() {
    if (currentPerm.length === arr.length) {
      result.push([...currentPerm]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (!used[i]) {
        used[i] = true;
        currentPerm.push(arr[i]);
        generatePermutaion();

        // 백트래킹: 이전 상태로 되돌림
        currentPerm.pop();
        used[i] = false;
      }
    }
  }

  generatePermutaion();
  return result;
}
/**
 * 클로드의 도움을 받았으며, 어떻게 순열된 배열을 만들것인가를 다룸
 * 이전에 순열 공부했을때와 다른 순열, 즉 순열이 아닌것 같은데 한번 알아봐야겠음 이건 어떤 문제의 종류인지?
 * 그래도.. 특정 부분만 빌리고 전체적인 개념은 내가 떠올렸으니까.. 반반 성공?
 */

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
