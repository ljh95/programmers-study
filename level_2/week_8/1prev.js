function solution(str1, str2) {
  // 주어진 string을 먼저 split으로 한글자씩 배열에 넣습니다. (이 때, 모두 대문자나 소문자로 통일해주면 수월해집니다)
  str1 = str1.toLocaleUpperCase().split("");
  str2 = str2.toLocaleUpperCase().split("");

  // 정규표현식과 match를 활용하여 연속된 두 글자가 모두 알파벳이 맞는지 확인한 후 새로운 배열에 넣습니다.
  let s1 = toUpperOnlyString(str1);
  let s2 = toUpperOnlyString(str2);
  // 객체를 사용하여 배열을 돌면서 같은 문자열의 갯수를 세줍니다.
  let obj1 = dupliObj(s1);
  let obj2 = dupliObj(s2);

  // 첫번째 객체를 돌면서 두번째 객체와 중복된 값이 있으면 그중에 작은값을 교집합의 갯수에 추가해주고
  // 4-1. 그 중에 큰 값을 합집합의 갯수에 추가해줍니다 4-1. 두번째 객체를 돌면서 첫번째 객체에 없는 value들을 합집합의 갯수에 추가해줍니다.
  let c_count = 0;
  let t_count = 0;

  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  obj1Keys.forEach((key) => {
    if (obj2Keys.includes(key)) {
      c_count += Math.min(obj1[key], obj2[key]);
      t_count += Math.max(obj1[key], obj2[key]);
    } else {
      t_count += obj1[key];
    }
  });

  obj2Keys.forEach((key) => {
    if (!obj1Keys.includes(key)) {
      t_count += obj2[key];
    }
  });

  // 합집합의 갯수가 0이면 교집합의 갯수도 당연히 0이므로 합집합의갯수를 조건연산자로 판단하여 0일 경우 65536 아닐경우에는 Math.floor(교집합/합집합*65536)를 하였습니다.

  return t_count === 0 ? 65536 : Math.floor((c_count / t_count) * 65536);
}

// (str): strList
function toUpperOnlyString(str) {
  let strList = [];
  let text = "";
  for (let i = 0; i < str.length - 1; i++) {
    text = str[i] + str[i + 1];
    if (text.match(/[A-Z]{2}/)) {
      strList.push(text);
    }
  }
  return strList;
}

// (obj, boolList, strList): obj
function dupliObj(strList) {
  let obj = {};
  let boolList = [];
  let text = "";

  for (let i = 0; i < strList.length; i++) {
    text = strList[i];
    if (boolList.includes(text)) {
      continue;
    }

    boolList.push(text);
    obj[text] = 1;
    strList.slice(i + 1).forEach((k) => {
      if (k === text) {
        obj[text]++;
      }
    });
  }
  return obj;
}
