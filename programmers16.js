// 피자 나눠 먹기 -3
// 피자 조각 수와 먹는 사람의 수를 매개변수로 받는 함수
// 1사람이 최소 1조각을 먹기 위해서 몇 판을 주문해야 하는지 결과를 출력

function solution(slice, num){
    let result = 0

    num % slice != 0? result = Math.floor(num / slice) + 1 : result = num / slice
    // num을 slice로 나눴을 때 나머지가 0이 아니라면 조각이 부족하다는 의미이기 때문에 몫에 +1을 해준다.
    // 만약 num을 slice로 나눴을 때 나머지가 0이라면 딱 맞아 떨어지기 때문에 나누기 결과값을 그대로 반환한다.

    return result
}

console.log(solution(7, 10)) 
// -> 3 출력