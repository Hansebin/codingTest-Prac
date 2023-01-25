// 피자 나눠 먹기
// A 피자 가게는 피자 1판을 7조각으로 나눠준다.
// 1사람이 1조각은 반드시 먹기 위해서 피자 몇 판이 필요한지 계산하는 함수 solution

function solution(num){
    let result = 0

    // 매개변수 num에 대해서 7으로 나눈 몫을 기준으로 판단하기
    // 만약 num을 7로 나누었을 때 나머지가 0이라면 모두가 1조각씩 먹을 수 있는 상황 = 나머지 한 결과가 결과값
    // 반면 num을 7로 나누었을 때 나머지가 1이라도 생긴다면 누군가는 1조각을 먹을 수 없다는 것이기 때문에 몫만 가져와서 +1을 한다.

    if (num % 7 == 0) result = num / 7
    if (num % 7 != 0) result = parseInt(num / 7) + 1

    return result
}

console.log(solution(15))
// 삼항연산식으로 정리해도 좋을 것 같다!
// return n % 7 == 0? n / 7: parseInt(n / 7) + 1;