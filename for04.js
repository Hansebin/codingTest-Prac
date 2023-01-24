// 주어진 숫자가 소수면 true 아니면 false를 출력하는 프로그램
// 소수 판별 프로그램
// 소수는 자기 자신과 1을 약수로 가지는 숫자를 말한다.
// 1은 소수가 아니다. -> 제외시켜야 한다.

let num = 89
let result = true
// result의 기본값으로 true 설정

for (let i = 2; i < num; i++){
    // 소수는 자기 자신과 1만을 약수로 가지기 때문에 i를 2와 num전까지로 범위를 지정한다.
    if (num === 1){
        // 1은 소수가 아니기 때문에 1이면 바로 false
        result = false
    } else if (num % i == 0){
        result = false
        // num이 2부터 num-1까지의 수들 중에서 이들로 나누었을 때 나머지가 0이 나온다면 그것을 약수로 가진다는 의미이기 때문에 반복문으로 i를 돌리고, 이들 중에서 하나라도 나머지가 0으로 나눠진다면 소수가 아니므로 false
    }
}

console.log(result)