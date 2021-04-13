//쿼드압축 후 개수 세기

var answer = [0,0];

function zip(arr) {

    let len = arr.length;

    const start = [[0,0],[len/2,0],[0,len/2],[len/2,len/2]];

    for(let k=0; k<4; k++){
        const temp_arr = [];
        const map = new Map();

        for(let i=0; i < len/2; i++){

            const temp = [];

            for(let j=0; j < len/2; j++){

                const index = arr[i+start[k][0]][j+start[k][1]];

                temp.push(index);

                if(map.has(index))
                    map.set(index, map.get(index)+1);
                else
                    map.set(index,1);
            }
            temp_arr.push(temp);
        }

        if(map.size > 1){
            zip(temp_arr);
        } else {
            if(map.get(0) > 0) //0
                answer[0] += 1;
            else //1
                answer[1] += 1;
        }       
    }


}

function solution(arr) {

    zip(arr);

    if(answer[0] == 0)
        answer[1] = 1;
    else
        answer[0] = 1;

    return answer;
}

solution([[0,0],[0,0]]);