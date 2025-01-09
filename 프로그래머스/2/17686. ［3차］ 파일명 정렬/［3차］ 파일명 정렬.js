function solution(files) {
  const list = files.map((file) => {
    const arr = file.split("");
    const numIdx = arr.findIndex((s) => {
      if (s !== " " && !isNaN(Number(s))) return true;
      return false;
    });
    const head = file.slice(0, numIdx).toLowerCase();

    let num = "";
    for (let i = 0; i < 5; i++) {
      const s = arr[numIdx + i];
      if (s !== "" && !isNaN(Number(s))) num += s;
      else break;
    }

    return { head, num: Number(num), origin: file };
  });

  var answer = list
    .sort(({ head: aHead, num: aNum }, { head: bHead, num: bNum }) => {
      if (aHead < bHead) return -1;
      if (aHead > bHead) return 1;

      if (aNum < bNum) return -1;
      if (aNum > bNum) return 1;
      return 0;
    })
    .map(({ origin }) => origin);
  return answer;
}