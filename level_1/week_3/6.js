function solution(lottos, win_nums) {
  var answer = [];
  let count = 0;
  let countZero = 0;
  lottos.forEach((lo) => {
    if (win_nums.includes(lo)) count++;
    else if (lo === 0) countZero++;
  });
  // 거기서 0의 개수도 센다. => let countZero;
  // 6 - 최소포함개수 = 최하등수 2 => 4
  // 6 - 최소포함개수 + countZero 2+2 => 2
  answer = [
    count + countZero === 0 ? 6 : 7 - (count + countZero),
    count === 0 ? 6 : 7 - count,
  ];
  return answer;
}
