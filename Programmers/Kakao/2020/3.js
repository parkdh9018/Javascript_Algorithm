//무지의 먹방 라이브

function solution(food_times, k) {
    var answer = 0;

    let list = food_times.map((v,i) => [v,i])
    list.sort((a,b) => a[0]-b[0])

    let cnt = 0;

    console.log(list)


    // list.forEach((v,i) => {
        
    //     cnt += list[i+1] - list[i]

    // });

    for(let i=0;i<list.length - 1;i++){

        if(i === 0)
            cnt += list[0][0] * list.length
        else
            cnt += (list[i+1][0] - list[i][0]) * (list.length - i)


        console.log(cnt)

        if(cnt >= k) {


            // if(i == 0)
            //     console.log(list[list.length - 1][1])
            // else
            //     console.log(list[i-1][1])

            break;
        }
    }


    return answer;
}

solution([3,1,3,5,4],8)