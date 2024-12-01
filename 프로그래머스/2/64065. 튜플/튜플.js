function solution(s) {
  const arr = s.split("},{").map((a) => {
    return a.replaceAll("{", "").replaceAll("}", "");
  });
  arr.sort((a, b) => {
    return a.length - b.length;
  });

  let answer = new Set();
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    v.split(",").forEach((d) => answer.add(Number(d)));
  }

  return Array.from(answer);
}