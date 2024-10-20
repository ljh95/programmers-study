function solution(keymap, targets) {
  var answer = [];
  const m = new Map();

  for (let i = 0; i < targets.length; i++) {
    const element = targets[i];
    const arr = [];

    for (let j = 0; j < element.length; j++) {
      const a = element[j];

      if (m.has(a)) {
        arr.push(m.get(a));
        continue;
      }

      let min = 99999999999;
      for (const key of keymap) {
        const cur = key.indexOf(a);
        min = cur === -1 ? min : Math.min(min, cur);
      }
      const v = min === 99999999999 ? -1 : min + 1;

      m.set(a, v);
      arr.push(v);
    }

    const result = arr.includes(-1)
      ? -1
      : arr.reduce((acc, cur) => acc + cur, 0);

    answer.push(result);
  }

  return answer;
}

/**
 * 반례를 생각해보는게 쉽지 않다ㅏ.
 * -1이 하나라도 있으면 -1을 반환해야됨을 찾는 과정이 너무 어렵다.
 * 식을 만드는것 뿐만 아니라 반례를 고민해보는 습관을 항상 가져보자
 * 왜 못찾았고 어떠헥 하면 찾을 수 잇을지 고민해보자.
 *
 */

// console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]));
// console.log(solution(["AA"], ["BB"]));
console.log(solution(["BC"], ["AC", "BC"]));
// console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"]));
