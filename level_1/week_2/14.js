function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) {
      let i = 0;
      let result = 0;
      while (true) {
        // 앞에서 부터 비교해서 하나라도 다른게 나오면 끝
        // 끝이면 앞이 작으면 -1을 아니면 1을 리턴
        if (a[i].charCodeAt(0) !== b[i].charCodeAt(0)) {
          result = a[i].charCodeAt(0) - b[i].charCodeAt(0);
          break;
        }
        i++;
      }
      return result;
    }
    return a[n].charCodeAt(0) - b[n].charCodeAt(0);
  });
}
