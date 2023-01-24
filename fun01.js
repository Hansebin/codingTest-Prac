// 이름을 매개변수로 받아 다양한 인사를 출력할 수 있는 함수
// 이름만 return값으로 반환 받기

function greetName (name){
    console.log(`안녕하세요. 제 이름은 ${name}입니다.`)
    // 백틱 템플릿 활용하기
    return name
}

const name = greetName("이지훈")
console.log(name)
