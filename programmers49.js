// 모스부호 -1
// 문자열을 매개변수로 받는 함수 solution
// 매개뱐수를 영어 소문자로 변환한 결과값을 출력

function solution(letter) {
    let result = ""
    let morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }

    letter = letter.split(" ")

    for (let i = 0; i < letter.length; i++){
        result += morse[letter[i]]
    }

    return result
}

console.log(solution(".--. -.-- - .... --- -."))