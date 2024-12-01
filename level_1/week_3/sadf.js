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