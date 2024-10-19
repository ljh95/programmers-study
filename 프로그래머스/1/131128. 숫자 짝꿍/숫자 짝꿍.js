function solution(X, Y) {
  const mx = new Map();
  const my = new Map();

  X.split("").forEach((v) => {
    if (mx.has(v)) {
      mx.set(v, mx.get(v) + 1);
    } else {
      mx.set(v, 1);
    }
  });
  Y.split("").forEach((v) => {
    if (my.has(v)) {
      my.set(v, my.get(v) + 1);
    } else {
      my.set(v, 1);
    }
  });

  let answer = "";
  let isZero = true;

  for (let i = 9; i >= 0; i--) {
    const s = String(i);
    if (mx.has(s) && my.has(s)) {
      if (i > 0) isZero = false;
      answer += s.repeat(Math.min(mx.get(s), my.get(s)));
    }
  }

  return answer === "" ? "-1" : isZero ? "0" : answer;
}