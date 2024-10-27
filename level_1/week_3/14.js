function solution(board, moves) {
  let answer = 0;
  let arr = [];

  for (let i = 0; i < moves.length; i++) {
    const m = moves[i];
    const [value, idx] = getValue(m, board);

    if (value === undefined) continue;
    board[idx][m - 1] = 0;
    const prev = arr.pop();

    if (prev === value) {
      answer += 2;
    } else {
      arr.push(prev);
      arr.push(value);
    }
  }

  return answer;
}

function getValue(m, board) {
  for (let i = 0; i < board.length; i++) {
    const element = board[i][m - 1];

    if (element === 0) continue;
    return [element, i];
  }

  return [undefined, 0];
}
