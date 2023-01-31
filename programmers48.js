// 믄자열 정렬하기 -2
// 영어 대소문자가 포함된 문자열을 매개변수로 받는 함수 solution
// 대문자를 소문자로 변환하고 오름차순 정렬을 하여 출력

function solution (string) {

    return string.toLowerCase().split("").sort().join("")
}

console.log(solution("heLLo"))
// 	"abcd"출력