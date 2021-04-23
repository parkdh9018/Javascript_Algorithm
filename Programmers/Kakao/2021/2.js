//메뉴 리뉴얼

const intersection = (a,b) => new Set([...a].filter(x => b.has(x)));

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

const IsSubset = (a,b) => { //b가 a의 subset인지

    for(const v of b){
        if(!a.has(v))
            return false;
    }

    return true;
}

function solution(orders, course) {
    var answer = [];

    const result = Array.from(Array(11), () => new Map());
    const alpha_set = orders.map((ele) => new Set(ele.split("")))

    for(let i=0;i<alpha_set.length;i++){
        for(let j=i+1;j<alpha_set.length;j++){

            const inter = intersection(alpha_set[i],alpha_set[j])

            //교집합의 부분집합들
            let subsetList = []

            for(const c of course){
                subsetList = [...subsetList, ...combination([...inter],c)]
            }

            subsetList.forEach((subset) => {

                const str = [...subset].sort().join("")
                const n = str.length;

                let cnt = 0;

                if(!result[n].has(str)){

                    alpha_set.forEach(set => {
                        //inter가 set의 부분집합인지
                        if(IsSubset(set,subset))
                            cnt += 1;
                    });

                    result[n].set(str,cnt)

                }
            })

        }
    }

    [...result].map((v) => {

        const arr = [...v.entries()].sort((a,b)=>(b[1]-a[1]))

        if(arr.length > 0){
            const max = arr[0][1]

            for(const a of arr){
                if(max !== a[1])
                    return;
    
                answer.push(a[0])
            }        
        }

    })

    console.log(answer.sort())

    return answer.sort();
}

//solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"],[2,3,4])
//solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"],[2,3,5])
solution(["ABCDEFG","ABCD"],[2,3,5])


//console.log(IsSubset(new Set([1,2,3]),new Set([1,2])))