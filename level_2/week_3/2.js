function solution(arr, brr) {
  var answer = Array.from({ length: arr.length }, () =>
    Array.from({ length: brr[0].length }, () => 0)
  );

  const rotatedAndReversedBrr = reverseArr(rotateRightArr(brr));

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < brr[0].length; j++) {
      answer[i][j] = makeResult(arr[i], rotatedAndReversedBrr[j]);
    }
  }
  return answer;
}

function makeResult(arr, brr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i] * brr[i];
  }

  return result;
}

function rotateRightArr(arr) {
  const newArr = Array.from({ length: arr[0].length }, () =>
    Array.from({ length: arr.length }, () => 0)
  );

  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      newArr[i][j] = arr[arr.length - j - 1][i];
    }
  }
  return newArr;
}

function reverseArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].reverse();
  }
  return arr;
}

/**
 * 생각보다 개 오래 걸린듯 하다.. 한 1시간..?
 * 문제 자체는 간단했지만, 배열을 어떻게 넣어야 좋을지 고민.. 젤 어렵..
 * 굳이 안 돌려도 괜찮았겠지만, 내 뇌의 한계로 최대한 간단하게 해볼 수 잇는 방법이었음..
 * 이런식으로 문제를 풀어나가는게 도움이 되는지 클로드에게 물어볼 필요가 있음
 */
