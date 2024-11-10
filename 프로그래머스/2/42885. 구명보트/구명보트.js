function solution(people, limit) {
    let answer = 0;
    
    // 오름차순 정렬
    people.sort((a, b) => a - b);
    
    let start = 0;
    let end = people.length - 1;
    let pair_count = 0;
    
    while(start < end) {
        if (people[start] + people[end] <= limit) {
            pair_count++;
            start++;
        }
        end--;
    }
    
    answer = people.length - pair_count;
    return answer;
}