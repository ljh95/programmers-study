function solution(land) {
    const n = land.length;
    
    // 이전 행의 각 열을 선택했을 때의 최대값을 저장
    const dp = Array.from(land[0]);
    
    // 각 행에 대해
    for (let i = 1; i < n; i++) {
        // 이전 행의 값들을 저장
        const prev = [...dp];
        
        // 현재 행의 각 열에 대해
        for (let j = 0; j < 4; j++) {
            // 이전 행에서 현재 열을 제외한 값들 중 최대값을 찾아 더함
            dp[j] = land[i][j] + Math.max(
                ...[...prev.slice(0, j), ...prev.slice(j + 1)]
            );
        }
    }
    
    return Math.max(...dp);
}