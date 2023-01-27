// 옷 가게 할인 받기
// 10만원 이상을 사면 5% 30만원 이상을 사면 10% 50만원 이상을 사면 20% 할인
// 구매한 옷 가격을 매개변수로 받는 함수 solution
// 할인된 가격을 계산하여 출력 -> 소수점 이하 버림

function solution (price) {
    let total = 0

    if (price >= 500000) total = price * 0.8
    // 20%할인이면 전체 금액의 80%만 지불 -> 0.8을 곱한다.
    else if (price >= 300000) total = price * 0.9
    else if (price >= 100000) total = price * 0.95
    else if (price < 100000) total = price

    return Math.floor(total)
    // 소수점 이하는 버림이기 때문에 Math,floor 함수 사용
}

console.log(solution(580000))