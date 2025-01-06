const bfs = (graph, start) => {
  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const vertex = queue.shift();
    if (!visited.has(vertex)) {
      console.log(vertex);
      visited.add(vertex);
      queue.push(...graph[vertex]);
    }
  }
};

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

console.log("\nBFS 결과:");
bfs(graph, "A");
