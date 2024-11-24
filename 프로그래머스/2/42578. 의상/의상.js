function solution(clothes) {
    const types = {};
    
    // 의상 종류별로 개수 계산
    clothes.forEach(([name, type]) => {
        types[type] = (types[type] || 0) + 1;
    });
    
    // 각 종류별로 (의상 개수 + 1)을 곱함
    // (+1은 해당 종류를 입지 않는 경우를 포함)
    return Object.values(types).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
    // 마지막에 -1은 아무것도 입지 않는 경우를 제외
}