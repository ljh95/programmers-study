function solution(video_len, pos, op_start, op_end, commands) {
  const last = transeSec(video_len);
  const isOp = (ss) => {
    return transeSec(op_start) <= ss && ss <= transeSec(op_end);
  };
  let cur = transeSec(pos);
  const op_end_sec = transeSec(op_end);

  for (let i = 0; i < commands.length; i++) {
    const c = commands[i];

    if (isOp(cur)) {
      cur = op_end_sec;
    }

    if (c === "prev") {
      cur = Math.max(0, cur - 10);
    } else {
      cur = Math.min(last, cur + 10);
    }

    if (isOp(cur)) {
      cur = op_end_sec;
    }
  }

  return transMin(cur);
}

function transeSec(str) {
  const [m, s] = str.split(":").map((n) => Number(n));
  return s + m * 60;
}

function transMin(sec) {
  let m = String(Math.floor(sec / 60));
  m = m.length === 1 ? "0" + m : m;
  const s = sec % 60 < 10 ? "0" + (sec % 60) : String(sec % 60);
  return `${m}:${s}`;
}
