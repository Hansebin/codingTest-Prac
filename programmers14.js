// 특정 문자 제거하기
// 문자열 2개를 매개변수로 받는 함수 solution
// 1번째 매개변수인 문자에서 2번째 매개변수인 문자를 삭제한 후 출력

function solution(string, letter){
    let result = ""

    let regexAll = new RegExp(letter, "g")
    result = string.replace(regexAll, "")
    // replace에서는 매개변수로 문자만 인식하기 때문에 변수를 넣을 수 없다. -> 정규식 사용

    return result
}

console.log(solution("BCBdbe", "B"))