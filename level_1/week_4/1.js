function solution(survey, choices) {
  const arr = Array.from({ length: 4 }, (_) => 0);
  // 사전순으로 정한 상태
  const idxArr = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];

  // 주어진 배열을 다 돌면서, 각각의 index에 값을 더하거나 감소시킴
  for (let i = 0; i < survey.length; i++) {
    const [idx, score] = calcScore(survey[i], choices[i]);
    arr[idx] += score;
  }

  return arr.reduce((acc, _, curIdx) => {
    return acc + (arr[curIdx] <= 0 ? idxArr[curIdx][0] : idxArr[curIdx][1]);
  }, "");
}

// 몇번째 index와 해당되는 점수를 반환하는 함수
function calcScore(type, choice) {
  const idxArr = ["R", "C", "J", "A"];
  // isReverse를 통해서 점수가 음수인지 양수인지 판단한다.
  let isReverse = false;

  const [t1] = type.split("").reduce((acc, cur, curIdx) => {
    if (idxArr.includes(cur)) acc.unshift(cur);
    else {
      if (curIdx === 0) isReverse = true;
      acc.push(cur);
    }
    return acc;
  }, []);

  const score = isReverse ? 4 - choice : choice - 4;
  const idx = idxArr.findIndex((a) => a === t1);

  return [idx, score];
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
