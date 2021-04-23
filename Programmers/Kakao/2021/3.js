//순위 검색

function combination(arr, selectNum) {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);
    arr.forEach((v, idx, arr) => {
      const fixed = v;
      const restArr = arr.slice(idx + 1);
      const combinationArr = combination(restArr, selectNum - 1);
      const combineFix = combinationArr.map((v) => [fixed, ...v]);
      result.push(...combineFix);
    });
    return result;
}

function count(arr,score) {

    return arr.reduce((acc,v) => {
        if(v >= score)
            return acc+1
        else
            return acc
    },0)

}

function solution(info, query) {
    var answer = [];

    const map = new Map();
    let AllScore = []

    for(const str of info){

        const temp = str.split(" ")

        const score = parseInt(temp[4])
        AllScore.push(score)

        const arr = temp.splice(0,4)

        let keyList = []

        for(let i=1;i<=4;i++){
            keyList = [...keyList, ...combination(arr,i)]
        }

        for(const key of keyList){

            const keystr = key.join("");

            if(map.has(keystr)){
                let value = [...map.get(keystr)]
                value.push(score)
                map.set(keystr, value.sort((a,b) => (b-a)))
            }
            else
                map.set(keystr,[score])
        }


    }

    //console.log(map)
    AllScore.sort((a,b) => (b-a))

    for(const q of query){

        const temp = q.split(" and ")
        const temp2 = temp[3].split(" ")

        const arr = [...temp.splice(0,3), temp2[0]]
        const score = parseInt(temp2[1]) 

        let str = ""

        for(const v of arr){
            if(v !== '-')
                str += v
        }

        if(str === ''){
            answer.push(count(AllScore,score))
        }
        else{
            answer.push(count(map.get(str),score))
        }


    }

    return answer;
}

const info = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"]
const query = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]

solution(info,query)
