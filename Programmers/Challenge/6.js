//이진 변환 반복하기

function solution(s) {
    var answer = [0,0];

    while(s !== "1"){
        let temp = s.split("").filter(v => v === "1")

        answer[0] += 1;
        answer[1] += s.length - temp.length;

        s = (temp.length >>> 0).toString(2);
    }

    return answer;
}

solution("110010101001");