function solution(str1, str2) {
  const o1 = makeObject(str1);
  const o2 = makeObject(str2);

  if (Object.keys(o1).length === 0 && Object.keys(o2).length === 0) {
    return 65536;
  }

  const sub = getSubObj(o1, o2);
  const add = getAddObj(o1, o2, sub);

  if (sub === 0) return 0;

  return Math.floor((sub / add) * 65536);
}

function makeObject(s) {
  const obj = {};
  const regex = /^[a-z]+$/;
  for (let i = 0; i < s.length - 1; i++) {
    const a = (s[i] + s[i + 1]).toLowerCase();

    if (regex.test(a))
      if (obj[a]) {
        obj[a] += 1;
      } else {
        obj[a] = 1;
      }
  }
  return obj;
}

function getSubObj(o1, o2) {
  const o2Key = Object.keys(o2);
  let minCount = 0;

  Object.entries(o1).forEach(([key, value]) => {
    if (o2Key.includes(key)) {
      minCount += Math.min(value, o2[key]);
    }
  });
  return minCount;
}

function getAddObj(o1, o2, sub) {
  let result =
    Object.values(o1).reduce((acc, cur) => acc + cur, 0) +
    Object.values(o2).reduce((acc, cur) => acc + cur, 0);
  return result - sub;
}

console.log(solution("aa1+aa2", "AAAA12"));
