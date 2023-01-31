// 외계행성 나이
// 외계행성에서는 나이를 알파벳으로 말하고 있다. -> 숫자를 알파벳으로 변환하여 나이 표현
// a는 0, b는 1, c는 2...
// 나이가 매개변수로 주어지는 함수 solution
// 숫자 타입의 나이를 외계행성의 알파벳 문자 타입으로 변환하여 출력

function solution (age) {
    let str_age = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
    let result = ""

    // 매개변수로 받은 숫자를 문자로 먼저 변환 -> 반복문 돌리기 위해
    age = String(age)
    for (let i = 0; i < age.length; i++){
        result += str_age[age[i]]
        // str_age의 인덱스 값으로 매개변수로 들어온 숫자 하나하나를 넣기
    }

    return result
}

console.log(solution(100))