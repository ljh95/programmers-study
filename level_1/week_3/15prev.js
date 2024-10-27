function solution(numbers, hand) {
  var answer = "";
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [-1, 0, -1],
  ];

  let lx = 0;
  let rx = 2;
  let ly = 3;
  let ry = 3;

  for (let index = 0; index < numbers.length; index++) {
    for (let i = 0; i < keypad.length; i++) {
      for (let j = 0; j < keypad.length; j++) {
        let d_l = Math.abs(lx - j) + Math.abs(ly - i);
        let d_r = Math.abs(rx - j) + Math.abs(ry - i);
        if (numbers[index] == keypad[i][j]) {
          if (j == 0) {
            lx = j;
            ly = i;
            answer += "L";
          } else if (j == 2) {
            rx = j;
            ry = i;
            answer += "R";
          } else {
            if (d_l < d_r) {
              lx = j;
              ly = i;
              answer += "L";
            } else if (d_l > d_r) {
              rx = j;
              ry = i;
              answer += "R";
            } else {
              if (d_l == d_r && hand == "left") {
                lx = j;
                ly = i;
                answer += "L";
              } else {
                rx = j;
                ry = i;
                answer += "R";
              }
            }
          }
        }
      }
    }
  }
  return answer;
}
