function solution(fees, records) {
  const map = new Map();
  records.forEach((record, idx) => {
    const [time, name, IO] = record.split(" ");

    if (map.has(name) == false) {
      map.set(name, { acc: 0, isOut: false, lastTime: time });
    }

    if (IO === "OUT") {
      const last = map.get(name);
      const lastTime = last.lastTime;
      const calcedMin = calcMin(time, lastTime);
      map.set(name, { acc: last.acc + calcedMin, isOut: true, lastTime: time });
    }

    if (IO === "IN") {
      map.set(name, { ...map.get(name), isOut: false, lastTime: time });
    }

    if (idx === records.length - 1) {
      map.forEach((value, key) => {
        if (value.isOut === false) {
          const acc = calcMin("23:59", value.lastTime);
          map.set(key, { ...value, acc: value.acc + acc });
        }

        const cur = map.get(key);
        map.set(key, { ...cur, fee: calcFee(cur, fees) });
      });
    }
  });

  // 누적 주차시간 구하기 완 + 주차 요금 계산기 완

  var answer = Array.from(map)
    .sort((a, b) => a[0] - b[0])
    .map(([key, value]) => {
      return value.fee;
    });
  return answer;
}

function calcFee(value, fees) {
  const { acc: accMin } = value;
  const [dm, df, pm, pf] = fees;

  if (accMin < dm) {
    return df;
  }
  const result = Math.ceil((accMin - dm) / pm) * pf;

  return df + result;
}

function calcMin(time, lastTime) {
  const [h, m] = time.split(":").map((v) => Number(v));
  const [lh, lm] = lastTime.split(":").map((v) => Number(v));

  let rh = h - lh;
  let rm;
  if (m < lm) {
    rh -= 1;
    rm = m + 60 - lm;
  } else {
    rm = m - lm;
  }

  return rm + 60 * rh;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);
