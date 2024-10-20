function solution(sizes) {
  let maxW = 0;
  let maxH = 0;

  for (let i = 0; i < sizes.length; i++) {
    const [w, h] = sizes[i];

    // 가로, 세로 둘다 작으면 통과
    if (w <= maxW && h <= maxH) {
      continue;
      // 가로, 세로 둘다 크면, 무조건 바꾸기
    } else if (w > maxW && h > maxH) {
      maxW = w;
      maxH = h;
      continue;
    } else {
      // 중요한건 가로의 증가량이 큰가, 세로의 증가량이 큰가를 비교하는것
      const plus_a_w = w - maxW > 0 ? w - maxW : 0;
      const plus_a_h = h - maxH > 0 ? h - maxH : 0;
      const plus_b_w = w - maxH > 0 ? w - maxH : 0;
      const plus_b_h = h - maxW > 0 ? h - maxW : 0;

      if (plus_a_w + plus_a_h < plus_b_w + plus_b_h) {
        maxW = Math.max(maxW, w);
        maxH = Math.max(maxH, h);
      } else {
        maxW = Math.max(maxW, h);
        maxH = Math.max(maxH, w);
      }
    }
  }

  return maxW * maxH;
}

/**
 * 증가량(plus_x)을 비교하는게 핵심이라고 생각
 *
 */
