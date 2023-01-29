// 피자 나눠먹기 - 2
// 피자 1판은 6조각
// 피자를 나눠 먹을 사람의 수 n이 매개변수로 주어지는 함수 solution
// 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지 출력
// 6명 -> 1판 / 10명 -> 5판 / 4명 -> 2판

function solution(num) {
    let piece = 6


    // while true -> 무한루프를 사용할 때는 break가 필수! => 무한 루프에서 나올 수 있게
    while (true) {

        if (piece % num === 0){
            break
        }
        piece += 6
        // 6의 배수 -> 1판이 6조각이기 때문에
    }
    // 이번 반복문에서는 범위에 따로 지정이 되지 않기 때문에 while문 사용해서 무한루프로 돌리고 조건을 만족하면 break로 나올 수 있게 하기!

    return piece / 6
}

console.log(solution(32))
