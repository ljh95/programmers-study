function solution(arr) {
    let answer = [0,0];
    
    function check (arr, x, y, size) {
        for(let i = x; i < x+size; i++) 
            for(let j = y; j < y+size; j++) 
                if(arr[x][y] !== arr[i][j]) return false;
        return true
    }
    
    function quad(arr, x, y, size) {
        if(check(arr, x, y, size)) {
            arr[x][y] === 1 ? answer[1]++ : answer[0]++;
        } else {
            quad(arr, x, y, size/2);
            quad(arr, x, y+size/2, size/2);
            quad(arr, x+size/2, y, size/2);
            quad(arr, x+size/2, y+size/2, size/2);
        }
    }
    
    quad(arr, 0, 0, arr.length)
    
    return answer;
}