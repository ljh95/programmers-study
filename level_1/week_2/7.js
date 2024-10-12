function solution(sizes) {
  let maxW = 0;
  let maxH = 0;

  for (let i = 0; i < sizes.length; i++) {
    const [w, h] = sizes[i];

    if (w <= maxW && h <= maxH) {
      continue;
    } else if (w > maxW && h > maxH) {
      maxW = w;
      maxH = h;
      continue;
    } else {
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
