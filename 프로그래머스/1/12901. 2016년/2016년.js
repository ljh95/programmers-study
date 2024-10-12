function solution(a, b) {
  const cal = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const count =
    cal.reduce((acc, cur, i) => {
      if (i + 1 >= a) return acc;
      return acc + cur;
    }, 0) + b;

  const index = ((count + 5) % 7) === 0 ? 7 : ((count + 5) % 7)
  return day[index - 1];
}