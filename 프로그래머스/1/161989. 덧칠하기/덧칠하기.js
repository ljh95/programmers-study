function solution(n, m, section) {
  var answer = 0;

  while (section.length > 0) {
    answer++;

    // const temp_arr = Array.from({ length: m }, (_x, idx) => section[0] + idx);
    const aa = section[0] + m - 1

    for (let i = 0; i < m; i++) {
      if (aa >= section[0]) {
        section.shift();
        if (section.length === 0) break;
      }
    }
  }

  return answer;
}
