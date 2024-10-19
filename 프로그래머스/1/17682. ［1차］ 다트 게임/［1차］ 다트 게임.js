const obj = {
  S: 1,
  D: 2,
  T: 3,
};

function solution(dartResult) {
  const ss = dartResult.match(/\d+\D*(?=\d|$)/g);
  let arr = [];

  for (let i = 0; i < ss.length; i++) {
    const element = ss[i];
    const [s_num, s_pow, grad] = element.match(/\d+|\w|\W/g);
    const num = Number(s_num);
    const pow = obj[s_pow];

    const v = Math.pow(num, pow);

    if (!grad) {
      arr.push(v);
      continue;
    }

    if (grad === "*") {
      if (i > 0) {
        arr = arr.map((a, idx) => {
          if (idx === i - 1) return a * 2;
          return a;
        });
      }
      arr.push(v * 2);
    } else {
      arr.push(v * -1);
    }
  }

  return arr.reduce((acc, cur) => acc + cur, 0);
}