function solution(a, edges) {

    var answer = 0;

    let check = 0;

    if(a.reduce((acc,v) => {
        
        if(acc != 0)
            check = 1;

        return acc +v
    },0) !== 0)
        return -1;

    if(check === 0)
        return 0;
    
    let map = new Map();

    for(let e of edges) {

        if(map.has(e[0])){
            const temp = map.get(e[0]);
            temp.push(e[1])
            map.set(e[0],temp)
        } else {
            map.set(e[0],[e[1]])
        }

        
        if(map.has(e[1])){
            const temp = map.get(e[1]);
            temp.push(e[0])
            map.set(e[1],temp)
        } else {
            map.set(e[1],[e[0]])
        }

    }

    // answer = a.reduce((acc,v) => acc+Math.abs(v),0) - [...map].reduce((acc,v) => {
    //     if(v[1].length > acc)

    // })

    console.log(answer)

    // let map = new Map();

    // for(let e of edges) {

    //     if(map.has(e[0])){
    //         const temp = map.get(e[0]);
    //         temp.push(e[1])
    //         map.set(e[0],temp)
    //     } else {
    //         map.set(e[0],[e[1]])
    //     }

        
    //     if(map.has(e[1])){
    //         const temp = map.get(e[1]);
    //         temp.push(e[0])
    //         map.set(e[1],temp)
    //     } else {
    //         map.set(e[1],[e[0]])
    //     }

    // }

    // // const findmax = [...map.entries()].reduce((m,v,i) => {

    // //     if(v[1].length > m[0]) {
    // //         m[0] = v[1].length
    // //         m[1] = v[0]
    // //     }
    // //     return m
    // // },[-1,-1])[1]
    // let result = 0;
    // let visited = new Set();
    // let start = [-1];

    // let queue = [];

    // queue.push(0)

    // while(queue.length > 0 && visited.size != a.length) {

    //     console.log(visited.size)

    //     const element = queue.shift();

    //     visited.add(element)
    //     result += Math.abs(a[element])

    //     const togo = map.get(element)

    //     for(const ele of togo) {

    //         if(!visited.has(ele)){
    //             start.push(element)
    //             queue.push(ele)
    //         }
    //     }

    // }


    // console.log(visited)


    // visited = [...visited].reverse()
    // start = start.reverse()

    // console.log(visited)


    // for(let i=0;i<visited.length - 1;i++){

    //     a[start[i]] += a[visited[i]]

    //     console.log(visited[i], Math.abs(a[visited[i]]))
    //     answer += Math.abs(a[visited[i]])

    // }

    // console.log(result)


    // return answer;
}

solution([-5,0,2,1,2],[[0,1],[3,4],[2,3],[0,3]])