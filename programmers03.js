// 식당 계산서 함수
// 1인분에 12,000원 / 음료수는 1개 당 2,000원
// 10인분을 시키면 음료수 1개 서비스
// 서비스 금액을 제외한 총 걔선 금약 출력하는 함수 solution

function solution (n, k){
    let result = 0

    if (n >= 10){
        // 10인분 이상이 서비스 기준이기 때문에 n이 10이상일 때
        result = (n * 12000) + (k * 2000)
        // 원래 금액
        result -= (Math.floor(n / 10)) * 2000
        // Math.floor은 소수점 이하를 버리는 함수 -> n을 10으로 나누었을 때 몫만 가져오기 * 음료수 값
    }else {
        result = (n * 12000) + (k * 2000)
        // n이 10이상이 아니면 그냥 원래 계산식으로
    }
    return result
}

console.log(solution(64, 6))