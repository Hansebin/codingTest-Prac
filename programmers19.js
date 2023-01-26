// 문자 반복해서 출력하는 함수 solution
// 문자열과 정수를 매개변수로 받는 함수 solution은 문자열에서 정수만큼 문자를 반복해서 출력한다.
// "hello", 2 -> hheelllloo로 출력

function solution(str, num){
    let result = ""
    for (let i = 0; i < str.length; i++){
        // 문자열을 인덱스로 구분해서 하나씩 잘라 돌리기
        result += str[i].repeat(num)
        // 특정 문자를 3번 반복할 수 있게 함수 repeat 사용!
    }
    return result
}

console.log(solution("hello", 3))
