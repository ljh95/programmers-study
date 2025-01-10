function solution(record) {
  const map = new Map();
  const list = [];
  record.forEach((r) => {
    const command = r.split(" ")[0];
    const userId = r.split(" ")[1];

    if ((command === "Enter" && !map.has(userId)) || command === "Change") {
      const newNick = r.split(" ")[2];
      map.set(userId, newNick);
    }

    if (command === "Enter") {
      const newNick = r.split(" ")[2];
      if (newNick !== map.get(userId)) {
        map.set(userId, newNick);
      }
    }

    if (command === "Enter" || command === "Leave") {
      list.push([command, userId]);
    }
  });

  return list.map((v) => translate(v, map));
}

function translate(v, map) {
  const [command, userId] = v;
  return `${map.get(userId)}님이 ${
    command === "Enter" ? "들어왔습니다." : "나갔습니다."
  }`;
}