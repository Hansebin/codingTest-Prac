// 문자열을 뒤집는 함수
// 문자로 매개변수를 받는 함수 solution은 해당 문자열을 뒤집어 다시 반환한다.
// hello -> olleh로 반환

function solution (str){
    let result = ""

    for (let i = str.length - 1; i >= 0; i--){
        // 문자열은 배열과 같이 인덱스로 표현 가능하다!
        // 배열 뒤집기 문제 -> programmers09.js와 같이 반복문의 시작점을 인덱스의 끝번호로 시작해 0으로 오는 로직
        // 빈 변수 result에 하나씩 더해준다.
        result += str[i]
    }
    return result
}

console.log(solution("Hello!"))