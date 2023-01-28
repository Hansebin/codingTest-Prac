// 암호 해독
// 문자열과 숫자를 매개변수로 받는 함수 solution
// 문자열에서 숫자의 배수 번째만 진짜 암호
// 진짜 암호를 출력

function solution (str, num){
    let result = ""

    for (let i = 1; i <= Math.floor(str.length / num); i++){
        // str.length만큼 i가 다 돌면 undefined값도 함께 붙기 때문에 str를 num으로 나누었을 때의 몫만큼만 돌린다.
        result += str[(i*num)-1]
        // 살제 문자열 인덱스와 우리가 인식하는 문자의 시작점이 다르기 때문에 -1을 해줌으로써 일반적인 문자열 시작점으로 인식해준다.
    }

    return result
}

console.log(solution("pfqallllabwaoclk", 2))


// 참고할 표현
// for (let i = num - 1; i < str.length; i = i + num){
//     result += str[i]
// }