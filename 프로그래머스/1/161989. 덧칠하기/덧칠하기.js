function solution(n, m, section) {
  var answer = 0;

  while (section.length > 0) {
    answer++;

    const temp_arr = Array.from({ length: m }, (_x, idx) => section[0] + idx);

    for (let i = 0; i < m; i++) {
      if (temp_arr[m - 1] >= section[0]) {
        section.shift();
        if (section.length === 0) break;
      }
    }
  }

  return answer;
}