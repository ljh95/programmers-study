function solution(cards1, cards2, goal) {
  return recursion(cards1, cards2, goal) ? "Yes" : "No";
}

const recursion = (c1, c2, g) => {
  if (g.length === 0) return true;

  if (c1[0] !== g[0] && c2[0] !== g[0]) return false;

  if (c1[0] === g[0]) return recursion(c1.slice(1), c2, g.slice(1));
  if (c2[0] === g[0]) return recursion(c1, c2.slice(1), g.slice(1));
};
