function solution(survey, choices) {
  const arr = Array.from({ length: 4 }, (_) => 0);
  const idxArr = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];

  for (let i = 0; i < survey.length; i++) {
    const [idx, score] = calcScore(survey[i], choices[i]);
    arr[idx] += score;
  }

  return arr.reduce(
    (acc, _, curIdx) =>
      acc + (arr[curIdx] <= 0 ? idxArr[curIdx][0] : idxArr[curIdx][1]),
    ""
  );
}

function calcScore(type, choice) {
  const idxArr = ["R", "C", "J", "A"];
  let isReverse = false;

  const [t1, t2] = type.split("").reduce((acc, cur, curIdx) => {
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