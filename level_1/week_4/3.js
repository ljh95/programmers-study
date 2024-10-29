function solution(wallpaper) {
  var answer = [-1, -1, -1, -1];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      const element = wallpaper[i][j];
      if (element === "#") {
        if (answer[0] === -1) {
          answer[0] = i;
          answer[1] = j;
          answer[2] = i + 1;
          answer[3] = j + 1;
          continue;
        }

        answer[2] = i + 1;
        answer[1] = Math.min(answer[1], j);
        answer[3] = Math.max(answer[3], j + 1);
      }
    }
  }
  return answer;
}
/**
 * 생각보다 간단
 * 간단한 구현
 */
