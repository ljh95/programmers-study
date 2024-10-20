const obj = {
  S: 1,
  D: 2,
  T: 3,
};

function solution(dartResult) {
  const ss = dartResult.match(/\d+\D*(?=\d|$)/g);
  let arr = [];

  for (let i = 0; i < ss.length; i++) {
    const element = ss[i];
    const [s_num, s_pow, grad] = element.match(/\d+|\w|\W/g);
    const num = Number(s_num);
    const pow = obj[s_pow];

    const v = Math.pow(num, pow);

    if (!grad) {
      arr.push(v);
      continue;
    }

    if (grad === "*") {
      if (i > 0) {
        arr = arr.map((a, idx) => {
          if (idx === i - 1) return a * 2;
          return a;
        });
      }
      arr.push(v * 2);
    } else {
      arr.push(v * -1);
    }
  }

  return arr.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution("1D2S3T*"));

/**
문자열 관련 문제가 나올때마다, 정규식 표현식을 알고잇다면 훨씬 간단해지는 것을 자주 체감한다.
또 요즘 터미널 명령어를 다룰 때가 많은데, 정규식 표현을 많이 사용하게된다.
알게 모르게, 데이터를 파싱하는 부분에서 정규식은 자주 사용되므로 강의를 구매하여 익히는게 좋아보인다.
이번에는 일단 ai의 도움을 받았고, 차후 보강하자.

##1. 
이 정규 표현식 /\d+\D*(?=\d|$)/g의 의미는 다음과 같습니다:

\d+: 하나 이상의 숫자
\D*: 숫자가 아닌 문자 0개 이상
(?=\d|$): 다음에 숫자가 오거나 문자열이 끝나는 위치를 확인 (이는 실제로 매치되는 부분에 포함되지 않음)
g: 전역 검색 (문자열 전체에서 모든 일치 항목을 찾음)


##2.
여기서 사용된 정규 표현식 /\d+|\w|\W/g의 의미는 다음과 같습니다:

\d+: 하나 이상의 연속된 숫자
|: 또는
\w: 단일 단어 문자 (알파벳, 숫자, 밑줄)
\W: 단일 비단어 문자 (특수 문자)
g: 전역 검색 (문자열 전체에서 모든 일치 항목을 찾음)

이 정규 표현식은 다음과 같이 동작합니다:


 */
