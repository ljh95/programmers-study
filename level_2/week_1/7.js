function solution(n) {
  let answer = 0;
  let small = n.toString(2); // bin() 대신 toString(2) 사용
  let small_count = 0;

  // 이진수에서 1의 개수 세기
  for (let s of small) {
    if (s === "1") {
      small_count++;
    }
  }

  n++;

  while (true) {
    let big = n.toString(2);
    let big_count = 0;

    // 새로운 수의 이진수에서 1의 개수 세기
    for (let s of big) {
      if (s === "1") {
        big_count++;
      }
    }

    if (big_count === small_count) {
      answer = n;
      break;
    } else {
      n++;
    }
  }

  return answer;
}
