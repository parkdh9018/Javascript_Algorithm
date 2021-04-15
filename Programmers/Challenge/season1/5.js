//내적

function solution(a, b) {
    var answer = a.reduce((acc,v,i) => acc + v * b[i],0);
    return answer;
}

solution([1,2,3,4],[-3,-1,0,2]);

