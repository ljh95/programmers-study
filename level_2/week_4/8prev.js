function solution(s) {
  s = s.replace(/},/g, "}.");
  s = s.slice(1, s.length - 1);
  s = s.split(".");
  s.sort((a, b) => a.length - b.length);
  s = s.map((d) =>
    d
      .slice(1, d.length - 1)
      .split(",")
      .map((c) => Number(c))
      .sort((a, b) => a - b)
  );
  let answer = s[0];

  let dd = [s[0][0]];

  s.forEach((arr, i) => {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== answer[j]) {
        answer.push(arr[j]);
        dd.push(arr[j]);
        answer.sort((d, v) => d - v);
        break;
      }
    }
  });
  return dd;
}
