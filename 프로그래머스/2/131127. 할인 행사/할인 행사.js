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
