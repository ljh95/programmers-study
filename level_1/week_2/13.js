function solution(food) {
  const arr = food.slice(1).map((f) => Math.floor(f / 2));
  const front = [];
  const back = [];
  for (let i = 0; i < arr.length; i++) {
    const s = `${i + 1}`.repeat(arr[i]);
    front.push(s);
    back.unshift(s);
  }
  return front.join("") + "0" + back.join("");
}

/**
 * 문제가 긴것 치곤 간단했다.
 * 별다른 트릭도 없었고 시간복잡도를 고려할 필요는 없었다.
 * 다만 unshift, repeat를 잘 알았어야 했다.
 */
