//무지의 먹방 라이브

function solution(food_times, k) {
    var answer = -1;

    let list = food_times.map((v,i) => [v,i+1])
    list.sort((a,b) => a[0]-b[0])

    let cnt = 0;


    for(let i=0;i<list.length - 1;i++){

        let temp;
        let plus;

        if(i === 0){
            plus = list[0][0]
            temp = plus * list.length
        }else{
            plus = list[i][0] - list[i-1][0]
            temp = plus * (list.length - i)
        }

        const remain = list.slice(i,list.length).sort((a,b)=>a[1]-b[1])
        const n = (k - cnt) % remain.length 

        if(cnt + temp > k) {

            if(remain[n][0] > 0)
                answwer = remain[n][1]
            else
                answer = -1

        }
        else if(cnt + temp === k){

            for(let j=0;j<remain.length;j++){
                
                if(remain[j][0] > plus){
                    answer = remain[j][1]
                    return answer
                }
                    
            }
        }

        cnt += temp

    }

    return answer;
}

//solution([2,2,2,3],8)
solution([3,1,2],5)