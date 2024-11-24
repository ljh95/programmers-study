function solution(cacheSize, cities) {
  let cacheArr = Array.from({ length: cacheSize }, () => 0);
  var answer = 0;

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();

    if (cacheArr.includes(city)) {
      answer += 1;
      if (cacheSize === 0) continue;
      const index = cacheArr.findIndex((c) => c === city);

      const newCacheArr = [
        ...cacheArr.slice(0, index),
        ...cacheArr.slice(index + 1),
      ];
      newCacheArr.unshift(city);
      cacheArr = [...newCacheArr];
    } else {
      answer += 5;
      if (cacheSize === 0) continue;
      cacheArr.pop();
      cacheArr.unshift(city);
    }
  }
  return answer;
}