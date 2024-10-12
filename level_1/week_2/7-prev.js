function solution(sizes) {
  let sum = 0;
  let w_max = 0;
  let h_max = 0;
  sizes.forEach((v) => {
    const [w, h] = v;

    if (sum === 0) {
      w_max = w;
      h_max = h;
      sum = w * h;
    } else {
      let a = Math.max(w_max, w);
      let b = Math.max(h_max, h);
      let c = a * b;

      let q = Math.max(w_max, h);
      let e = Math.max(h_max, w);
      let r = q * e;

      if (c < r) {
        w_max = a;
        h_max = b;
        sum = c;
      } else {
        w_max = q;
        h_max = e;
        sum = r;
      }
    }
  });

  var answer = 0;
  return sum;
}
