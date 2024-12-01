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
      // todo what, use currentPerm
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