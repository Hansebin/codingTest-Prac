// 편지
// 한글자를 2cm로 하여 매개뱐수로 받은 글씨를 편지로 적기 위해서는 편지지의 최소 가로 길이가 어떻게 되야 하는지 결과값을 출력하는 함수 solution

function solution (message) {
    let result = 0

    result = message.length * 2

    return result
}

console.log(solution("I love you~"))