function solution(bridge_length, weight, truck_weights) {
  let answer = 0;

  const queue = [[truck_weights[0], bridge_length]];
  let currentWeight = truck_weights[0];

  let i = 1;

  while (true) {
    answer++;
    let isOutable = queue.length ? queue[0][1] <= answer : false;
    if (isOutable) {
      const [w] = queue.shift();
      currentWeight -= w;
    }
    if (queue.length === 0 && i >= truck_weights.length) {
      break;
    }

    let availableWeight = currentWeight + truck_weights[i];
    let availableLength = queue.length + 1;
    let isAvailable =
      availableWeight <= weight && availableLength <= bridge_length;

    if (isAvailable) {
      let time = bridge_length + answer;
      queue.push([truck_weights[i], time]);
      currentWeight += truck_weights[i];
      i++;
    }
  }

  return answer + 1;
}