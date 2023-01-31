// 배열 회전시키기
// 정수가 담긴 배열과 문자열을 매개변수로 받는 함수 solution
// 문자열이 right면 원소들이 오른쪽으로 한 칸씩 회전되고 left면 왼쪽으로 한 칸식 회전되는 배열 출력

function solution (numbers, direction) {

    if (direction === "right") {
        numbers.unshift(numbers.pop());
    }  else {
        numbers.push(numbers.shift());
    }

    return numbers
}

console.log(solution([1, 2, 3], "right"))

// 모르는 문제... 공유!!