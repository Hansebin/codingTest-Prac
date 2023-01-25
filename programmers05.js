// 점의 위치 구하는 함수 solution
// x좌표 y좌표가 모두 양수면 1사분면
// x좌표 y좌표가 모두 음수면 3사분면
// x좌표가 양수 y좌표가 음수면 4사분
// x좌표가 음수 y좌표가 양수면 2사분면

function solution (dot){
    let result = 0

    if (dot[0] > 0 && dot[1] > 0){
        result = 1
    } else if (dot[0] < 0 && dot[1] > 0){
        result = 2
    } else if (dot[0] > 0 && dot[1] < 0){
        result = 4
    } else {
        result = 3
    }
    // 배열의 길이가 2로 정해져 있기 때문에 인덱스별로 비교 후 result값 대입
    // 조건문을 한 줄로 정리하는 것도 좋은 방법!

    return result
}

console.log(solution([-2, -4]))