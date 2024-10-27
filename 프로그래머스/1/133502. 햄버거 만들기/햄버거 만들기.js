function solution(ingredient) {
  let answer = 0;

  for (let i = 0; i < ingredient.length; i++) {
    if (findBurger(i, ingredient)) {
      answer++;
      ingredient.splice(i, 4);
      i = i - 4 < 0 ? -1 : i - 4;
    }
  }

  return answer;
}

function findBurger(i, arr) {
  return "" + arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] === "1231";
}