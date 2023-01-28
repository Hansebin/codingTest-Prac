// 숨어 있는 숫자의 덧셈 - 1
// 문자열을 매개변수로 받는 함수 solution
// solution은 매개변수로 들어온 문자열에 포함된 숫자들의 합을 구해 반환한다.

function solution (str) {
    let result = 0

    for (let i = 0; i < str.length; i++){
        let num = Number(str[i])
        if (isNaN(num) == false){
            result += num
        }
    }

    return result
}

console.log(solution("1a2b3c4d123"))