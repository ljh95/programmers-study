function solution(s) {
  const str = s.toLowerCase();
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "p") count++;
    if (str[i] === "y") count--;
  }

  return count === 0;
}
