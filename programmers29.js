// 개미 군격
// 장군개미는 5의 공격력 / 병정개미는 3의 공격력 / 일개미는 1의 공격력
// 최소한의 병력을 구해서 출력하는 함수 solution


function solution (hp) {
    let result = 0
    let hps = [5, 3, 1]
    // 능력치 담는 배열 생성

    for (let i = 0; i < hps.length; i++){
        // 배열을 반복문으로 돌려서 원소 하나씩 꺼내와 hp를 나눈 몫을 구한다.
        result += Math.floor(hp / hps[i])
        hp -= hps[i] * Math.floor(hp / hps[i])
        // 몫만 가져와서 전체 hp에서 몫*능력치만큼 빼준다. -> 나머지 hp 구하기
    }

    return result
}

console.log(solution(999))
// 5 출력