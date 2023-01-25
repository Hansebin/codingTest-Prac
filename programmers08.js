// 잔돈 계산하는 함수
// 아이스 아메리카노 1잔은 5,500원 -> 매개변수로 들어온 금액을 기준으로 몇 잔을 살 수 있는지, 나머지 돈은 얼마인지 배열로 출력하는 함수 solution

function solution(money){
    let result = []
    // 결과값을 담는 빈 배열 생성
    let get = 0
    let left = 0
    // 잔 수와 남은 금액을 담는 변수 생성

    get = parseInt(money / 5500)
    // 5500원으로 나눴을 때 몫만 가져오기 = 살 수 있는 아아 잔 수
    left = money - (get * 5500)
    // 위에서 나온 몫 결과값을 5500원으로 곱해서 get만큼의 금액 구하기 -> 전체 금액에서 빼면 나머지 금액

    return result = [get, left]
}

console.log(solution(25000))