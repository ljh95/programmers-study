function solution(answers) {
    var answer = [];
    let a1 = [1, 2, 3, 4, 5];
    let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    // 정답자를 배열에 담고
    let a_arr = [0, 0, 0];
    for(let i in answers) {
        if(answers[i] === a1[i % a1.length]) a_arr[0]++;
        if(answers[i] === a2[i % a2.length]) a_arr[1]++;
        if(answers[i] === a3[i % a3.length]) a_arr[2]++;
    }
    console.log(a_arr);
    // 최고값을 가져내서
    let _max = Math.max(...a_arr);
    
    // 최고값과 비교했을 때 맞으면 해당 index+1을 answer배열에 push
    for(let i = 0; i < a_arr.length; i++) {
        if(_max === a_arr[i]) answer.push(i+1)
    }
    return answer;
}