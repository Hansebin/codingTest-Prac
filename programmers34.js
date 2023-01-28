// 대문자 소문자 변환
// 문자열을 매개변수로 받는 함수 solution
// 매개변수로 받은 문자열에서 소문자는 대문자로, 대문자는 소문자로 변환하여 출력

function solution (string) {
    let result = ""

    for (let i = 0; i <string.length; i++){
        if (string[i] === string[i].toLowerCase())  {
            result += string[i].toUpperCase()
            // i번째의 문자가 소문자면 대문자로 변환하여 result에 추가
        }else {
            result += string[i].toLowerCase()
            // i번째의 문자가 대문자면 소문자로 변환하여 result에 추가
        } 
    }

    return result
}

console.log(solution("abCdEfghIJ"))