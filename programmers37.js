// 주사위의 개수
// 정수 배열과 정수를 매개변수로 받는 함수 solution
// 정수 배열은 각각 상자의 가로 길이, 상자의 세로 길이, 상자의  높이를 나타낸다.
// 정수가 주사위 모서리의 길이일 때, 상자에 들어갈 수 있는 주사위의 최대 개수를 출력

function solution (box, num) {
    let result = 1

    for (let i = 0; i < box.length; i++){
        result = result * Math.floor(box[i] / num)
    }

    return result
}

console.log(solution([1, 1, 1], 1))

// 처음에 let [width, length, height] = box로 설정하고 하나씩 계산하는 것도 좋은 방법 

