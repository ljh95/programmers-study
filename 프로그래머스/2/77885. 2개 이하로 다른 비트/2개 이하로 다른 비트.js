function solution(numbers) {
  function fn(n) {
    // Case 1: 모든 비트가 1인 경우 (2^n - 1)
    const log = Math.log2(n + 1);
    if (log === Math.floor(log)) {
      const bitLength = n.toString(2).length;
      return n + Math.pow(2, bitLength - 1);
    }

    // m 찾기 (가장 작은 자릿수의 0의 위치)
    const binary = n.toString(2);
    let m = -1;
    for (let i = binary.length - 1; i >= 0; i--) {
      if (binary[i] === '0') {
        m = binary.length - 1 - i;
        break;
      }
    }

    // Case 2: m=1 (끝자리가 0)
    if (m === 0) {
      return n + 1;
    }

    // Case 3: m>1
    const bits = binary.split('');
    // m 위치의 0을 1로
    bits[bits.length - 1 - m] = '1';
    // m-1 위치의 1을 0으로
    bits[bits.length - m] = '0';
    // m+1 이후 위치는 그대로 유지
    
    return parseInt(bits.join(''), 2);
  }
  
  return numbers.map(n => fn(n));
}