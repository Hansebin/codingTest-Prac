// 인덱스 바꾸기
// 문자열과 정수 2개를 매개변수로 받는 함수 solution
// 문자열에서 정수 1과 2의 인덱스를 서로 바꿔서 결과를 출력

function solution(string, num1, num2){
    let result = ""
    let first = string[num1]
    let second = string[num2]

    string = string.split("")
    string[num1] = second
    string[num2] = first
    result = string.join('')
    

    return result
}

console.log(solution("I love you", 3, 6))


// my_string = my_string.split('');
// [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
// 구조 분해 할당 -> 쉽게 생각해보기!!
// return my_string.join('');