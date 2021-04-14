//뉴스 클러스터링

const isAlpha = (str) => {
    var temp = /[a-z]{2}/.test(str);

    return temp;
}

const makeMap = (str) => {
    str = str.toLowerCase().split("");

    const arr = str.reduce((acc,v,i) => {

        if(i < str.length - 1){

            const ele = v+str[i+1];

            if(!isAlpha(ele))
                return acc;

            if(acc.has(ele)){
                acc.set(ele,acc.get(ele) + 1)
            } else {
                acc.set(ele,1)
            }

            return acc;
        }
        else
            return acc;


    },new Map());

    return arr;
};

function solution(str1, str2) {
    var answer = 0;

    const map1 = makeMap(str1);
    const map2 = makeMap(str2);

    let inter = 0;
    let union = [...map1].reduce((acc,v) => acc+v[1],0) + [...map2].reduce((acc,v) => acc+v[1],0);

    for(let itr of map1.entries()){
        for(let itr2 of map2.entries()){
            if(itr[0] === itr2[0]) {
                inter += Math.min(itr[1],itr2[1]);
                union -= Math.min(itr[1],itr2[1]);
            }
        }
    }


    if(union === 0)
        answer = 65536
    else
        answer = parseInt((inter / union) * 65536)

    return answer;
}

//solution("FRANCE","french");
solution("handshake","shake hands");

