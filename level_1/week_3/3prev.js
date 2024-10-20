function solution(N, stages) {
  var answer = [];
  let arr = [];
  for (let i = 0; i < N + 2; i++) {
    arr[i] = 0;
  }

  for (let i = 0; i < stages.length; i++) {
    let val = stages[i];
    if (arr[val] == false) {
      arr[val] = 1;
    } else {
      arr[val] += 1;
    }
  }
  let len = arr.reduce((f, b) => f + b);
  answer[0] = -1;
  for (let i = 1; i < arr.length - 1; i++) {
    if (len == 0) {
      answer[i] = 0;
      continue;
    }
    answer[i] = arr[i] / len;
    len -= arr[i];
  }
  let notsortedArr = [...answer].slice(1);
  let sortedArr = answer.sort((a, b) => b - a).slice(0, arr.length - 2);
  let newArr = [];
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < notsortedArr.length; j++) {
      if (sortedArr[i] == notsortedArr[j] && !newArr.includes(j + 1)) {
        newArr[i] = j + 1;
        break;
      }
    }
  }
  return newArr;
}
