// 문자열 안에 문자열
// 문자열 2개를 매개변수로 받는 함수 solution
// 문자열1에 문자열2가 있다면 1을 출력, 없다면 2를 출력

function solution (str1, str2) {
    let result = 0

    str1.split(str2).length > 1? result = 1 : result = 2
    // 만약 str1에 str2가 있다면 split로 잘랐을 때 배얄 안의 원소가 1개 이상이 된다. -> split로 자른 배열의 원소 개수로 판단하기

    return result
}

console.log(solution("ppprrrogrammers", "pppp"))