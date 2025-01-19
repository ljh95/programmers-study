function solution(queue1, queue2) {
    const sum1 = queue1.reduce((acc, cur) => acc + BigInt(cur), 0n);
    const sum2 = queue2.reduce((acc, cur) => acc + BigInt(cur), 0n);
    const total = sum1 + sum2;
    
    if (total % 2n !== 0n) return -1;  // 전체 합이 홀수면 불가능
    const target = total / 2n;
    
    // 두 큐를 하나의 배열로 합치고 포인터로 관리
    const q = [...queue1, ...queue2];
    let start = 0;
    let end = queue1.length - 1;
    let currentSum = sum1;
    let count = 0;
    const maxCount = queue1.length * 3;  // 최대 이동 횟수 제한
    
    while (count <= maxCount) {
        if (currentSum === target) {
            return count;
        }
        
        if (currentSum < target && end < q.length - 1) {
            // 현재 합이 작으면 end 포인터를 이동
            end++;
            currentSum += BigInt(q[end]);
            count++;
        } else if (currentSum > target && start <= end) {
            // 현재 합이 크면 start 포인터를 이동
            currentSum -= BigInt(q[start]);
            start++;
            count++;
        } else {
            break;
        }
    }
    
    return -1;
}