function solution(phone_book) {
  var answer = true;

  for (let i = 0; i < phone_book.length; i++) {
    const s = phone_book[i];
    const len = s.length;

    for (let j = i + 1; j < phone_book.length; j++) {
      const v = phone_book[j];
      let prefix = "";
      if (v.length < len) {
        prefix = v;
        if (prefix === s.slice(0, v.length)) return false;
      } else {
        prefix = v.slice(0, len);
        if (prefix === s) return false;
      }
    }
  }

  return answer;
}

/**
 * 그래도 반례를 빨리 찾은건 고무적..? 근데 워낙 문제가 단순해서 저기말고 반례가 존재할만한 곳이 없긴했음
 * 문제는 시간 복잡도를 어떻게 개선하냐인데.. 솔직히 당장 떠오르는 방법이 없음.
 * 이럴때는 시간을 살짝 둬서, 머리를 리프레쉬한후 천천히 고민해보자.
 *
 */

console.log(solution(["123", "456", "789"]));
