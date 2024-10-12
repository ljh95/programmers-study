function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let va = numbers[i] + numbers[j];
      if (!answer.includes(va)) answer.push(va);
    }
  }

  return answer.sort((a, b) => a - b);
}
// prev
