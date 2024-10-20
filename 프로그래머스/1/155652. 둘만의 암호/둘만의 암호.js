function solution(s, skip, index) {
  const skip_ascii_arr = skip.split("").map((s) => s.charCodeAt());
  return s
    .split("")
    .map((v) => encrpyt(v, index, skip_ascii_arr))
    .join("");
}

const encrpyt = (a, index, skip_ascii_arr) => {
  let ascii = a.charCodeAt(a);
  for (let i = 0; i < index; i++) {
    ascii = convert(ascii + 1);
    while (skip_ascii_arr.includes(ascii)) {
      ascii = convert(ascii + 1);
    }
  }

  let r = ascii > 122 ? ((ascii - 122) % 26) + 96 : ascii;
  return String.fromCharCode(r);
};

const convert = (ascii) => {
  return ascii > 122 ? ((ascii - 122) % 26) + 96 : ascii;
};