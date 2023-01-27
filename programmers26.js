// 자릿수 더하기
// 정수 하나가 매개변수로 주어지는 함수 solution
// 정수의 자릿수를 하나씩 더해서 총 합을 구해 출력한다.

function solution (num) {
    let sum = 0
    let str = num.toString()
    // 매개변수로 받은 정수를 문자로 변환 -> 반복문을 돌리기 위해서

    for (let i = 0; i < str.length; i++){
        sum += Number(str[i])
        // 하나씩 원소를 가져오고 그 원소를 숫자로 바꿔 더한다.
        // 문자열을 숫자로 변환 -> parseInt / ParseFloat / Number -> 좀 더 정확!
    }

    return sum
}

console.log(solution(930211))