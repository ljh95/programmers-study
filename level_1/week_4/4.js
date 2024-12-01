function solution(today, terms, privacies) {
  var answer = [];
  for (let i = 0; i < privacies.length; i++) {
    const privacy = privacies[i];
    if (isAfter(privacy, terms, today)) {
      answer.push(i + 1);
    }
  }
  return answer;
}

function isAfter(privacy, terms, today) {
  const [date, c_type] = privacy.split(" ");
  let [y, m, d] = date.split(".").map((a) => Number(a));
  const term = getTerm(c_type, terms);

  const total = m + term;
  const isLastMonth = total % 12 === 0;

  y += isLastMonth ? Math.floor(total / 12) - 1 : Math.floor(total / 12);
  m = isLastMonth ? 12 : total % 12;

  m = m < 10 ? "0" + m : m;
  d = d < 10 ? "0" + d : d;

  return Number(today.replaceAll(".", "")) >= Number("" + y + m + d);
}

function getTerm(c_type, terms) {
  for (let i = 0; i < terms.length; i++) {
    const [ty, te] = terms[i].split(" ");
    if (ty === c_type) return Number(te);
  }
}

/**
 * 역시 내용 자체는 어렵지 않은데, 자잘한 곳에서 예상치못하게 틀린부분이 많았다 적어보자.
 *
 * 1. getTerm()에서 if (ty === c_type) return Number(te);,
 * 마지막 te를 Number()만들지 않아서 수가 이상하게 되었다.
 *
 * 2. Math.floor를 안해서 소수점으로 계산하게 되었다.
 *
 * 3. today를 replaceAll로 '.'를 제거하지 않았다.
 *
 * 4. 마지막에 부등호도 return Number(today.replaceAll(".", "")) >= Number("" + y + m + d);
 * 결과를 확인하고 나서 바꿨다. 나름 제대로 했다고 했는데 정 반대로 생각했다.
 *
 * 5.
 * m = m < 10 ? "0" + m : m;
 * d = d < 10 ? "0" + d : d;
 * 이 부분도 처음에 놓쳤다, 나름 여러번 나왔었는데 자꾸 놓친게 아쉽다.
 *
 */

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
);
console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
);
