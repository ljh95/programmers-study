process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const dd = data.split(" ");
  const n = Number(dd[0]),
    m = Number(dd[1]);

  let result = "";
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result += "*";
    }
    console.log(result);
    result = "";
  }
});
