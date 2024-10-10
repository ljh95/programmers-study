function solution(s) {
  return s
    .split(" ")
    .map((v) =>
      v
        .split("")
        .map((v, i) => {
          if (i % 2 === 0) return v.toUpperCase();
          return v.toLowerCase();
        })
        .join("")
    )
    .join(" ");
}
