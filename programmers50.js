// 중복된 문자 제거
// 문자열이 매개변수로 주어지는 함수 solution
// 문자열에서 중복된 문자의 경우 하나만 나오게 출력

function solution (string) {
    let result = [];
    string = string.split("")
    
    for (let i = 0; i < string.length; i++){
        if (result.includes(string[i]) === false){
            result.push(string[i])
        }
    }
    return result.join("")
}

console.log(solution("We are the world"))

// Set은 중복되지 않는 값들의 유일한 집합
// return [...new Set(string)].join('')