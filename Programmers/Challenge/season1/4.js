// 스타 수열 (못품)

function isAlreadyIn(i) {
    
}

function solution(a) {
    var answer = -1;

    const n = a.length;

    if(n < 2)
        return 0;

    const map = new Map();

    a.forEach((v,i) => {
    
        if(map.has(v)){
            let set = map.get(v);
            
            set.add(i);

            if(i > 0){
                if(set.has(i-1))
                    set.add(i+1);
                else
                    set.add(i-1);

            }else{
                set.add(i+1);
            }

            map.set(v,set);
        }else
            map.set(v, new Set().add(i))
    });



    console.log(map)

    return answer;
}

solution([0,3,3,0,7,2,0,2,2,0]);