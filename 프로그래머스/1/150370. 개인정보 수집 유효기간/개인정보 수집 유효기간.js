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