function solution(m, n, board) {
    // 문자열 배열을 2차원 배열로 변환
    const boardArr = board.map(v => v.split(''));
    let answer = 0;
    
    while (true) {
        // 이번 턴에 지워질 블록 위치를 저장할 set
        const blocks = new Set();
        
        // 2x2 블록 찾기
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const current = boardArr[i][j];
                if (
                    current && 
                    current === boardArr[i][j + 1] && 
                    current === boardArr[i + 1][j] && 
                    current === boardArr[i + 1][j + 1]
                ) {
                    blocks.add(`${i},${j}`);
                    blocks.add(`${i},${j + 1}`);
                    blocks.add(`${i + 1},${j}`);
                    blocks.add(`${i + 1},${j + 1}`);
                }
            }
        }
        
        // 더 이상 지울 블록이 없다면 종료
        if (blocks.size === 0) break;
        answer += blocks.size;
        
        // 블록 지우기 (0으로 변경)
        blocks.forEach(pos => {
            const [i, j] = pos.split(',').map(Number);
            boardArr[i][j] = 0;
        });
        
        // 블록 내리기
        for (let j = 0; j < n; j++) {
            for (let i = m - 1; i > 0; i--) {
                // 현재 위치가 0이면 위에서 내릴 블록 찾기
                if (!boardArr[i][j]) {
                    let row = i - 1;
                    while (row >= 0) {
                        if (boardArr[row][j]) {
                            boardArr[i][j] = boardArr[row][j];
                            boardArr[row][j] = 0;
                            break;
                        }
                        row--;
                    }
                }
            }
        }
    }
    
    return answer;
}