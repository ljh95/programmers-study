function solution(want, number, discount) {
  var answer = 0;
  const resultArr = makeResultArr(want, number);

  for (let i = 0; i < discount.length - 9; i++) {
    const tmpArr = discount.slice(i, i + 10).sort();
    if (isEqualArr(resultArr, tmpArr)) answer++;
  }
  return answer;
}

function makeResultArr(want, number) {
  const arr = [];
  for (let i = 0; i < want.length; i++) {
    const count = number[i];
    const w = want[i];
    for (let j = 0; j < count; j++) {
      arr.push(w);
    }
  }
  return arr.sort();
}

function isEqualArr(arr, brr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== brr[i]) return false;
  }
  return true;
}

/**
 * 이렇게 푼 이유 (한번에 성공..!)
 * 1. 100,000 개의 제한
 * 2. 어차피 끝까지 체크해봐야 알 수 있음
 * 10개 정도의 배열을 정렬하는것은 상수 시간에 해당된다고 배웠..?
 */
