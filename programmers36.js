// 가위 바위 보
// 가위는 2, 바위는 0, 보는 5로 표현
// 가위 바위 보를 내는 순서를 매개변수로 받는 함수 solution
// 매개변수로 받은 가위 바위 보를 이기기 위한 문자열을 반환
// 205 -> 052 출력

function solution (rsp) {
    let result = ""

    for (let i = 0; i < rsp.length; i++){
        if (rsp[i] === "2") result += "0"
        if (rsp[i] === "0") result += "5"
        if (rsp[i] === "5") result += "2"
    }

    return result
}

console.log(solution("2"))