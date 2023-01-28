// 문자열 정렬하기
// 문자열을 매개변수로 받는 함수 solution
// 문자열 안에 있는 숫자만 골라 오름차순으로 정렬한 배열을 출력

function solution (string) {
    let result = []

    for (let i = 0; i < string.length; i++){
        if (Number(string[i]) || Number(string[i]) === 0) {
             result.push(Number(string[i]))
         } 
     }
    
     result.sort(function(a, b) {
         return a - b
     })
    
     return result
}

console.log(solution("abcde0"))






