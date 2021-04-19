//실패율

function solution(N, stages) {
    let result = [];

    const map = new Map();

    stages.forEach(v => {

        if(map.has(v)){
            map.set(v,map.get(v) + 1)
        }else{
            map.set(v,1)
        }
    });

    let n = stages.length;

    for(let i=1;i<=N;i++){

        let temp = 0;

        if(map.has(i)){
            temp = map.get(i) / n;
            n = n - map.get(i);

        }
        result.push([temp,i])

    }


    result.sort((a,b) => b[0] - a[0])

    let answer = result.map(v=>v[1]);


    return answer;
}

//solution(5,[2, 1, 2, 6, 2, 4, 3, 3]	)
//solution(4,[4,4,4,4,4])