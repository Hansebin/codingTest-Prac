// 순서쌍의 개수
// 순서쌍이란? 두 개의 숫자를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기한다.
// 자연수를 매개변수로 받는 함수 solution은 순서쌍의 갯수를 출력한다.

function solution (num) {
    let count = 0

    for (let i = 1; i <= num; i++){
        if (num % i == 0) count++
        // 순서쌍은 둘이 곱했을 때 정수가 되는 것 = 나누어 떨어지는 숫자를 찾는 것이다.
        // 1부터 num까지의 숫자를 하나씩 돌려 해당 숫자가 Num으로 나누어 떨어진다면 순서쌍이기 때문에 count를 하나씩 증가시켜준다.
    }

    return count
}

console.log(solution(100))