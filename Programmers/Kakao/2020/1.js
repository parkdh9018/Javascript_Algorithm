// 키패드 누르기

const distance = (a,b) => {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
}

function solution(numbers, hand) {
    var answer = '';

    let leftPos = [3,0]
    let rightPos = [3,2]

    if(hand == "right")
        hand = "R"
    else
        hand = "L"

    const keypad = {
        1:[0,0],
        2:[0,1],
        3:[0,2],
        4:[1,0],
        5:[1,1],
        6:[1,2],
        7:[2,0],
        8:[2,1],
        9:[2,2],
        0:[3,1],
        
    }

    numbers.forEach(e => {
        
        const pos = keypad[e]

        if(e === 1 || e === 4 || e === 7){
            answer += 'L';
            leftPos = pos;
        }else if(e === 3 || e === 6 || e ===9){
            answer += 'R';
            rightPos = pos;
        }else{
            const leftD = distance(leftPos,pos);
            const rightD = distance(rightPos,pos);

            if(leftD > rightD){
                answer += 'R';
                rightPos = pos
            } else if(leftD < rightD) {
                answer += 'L';
                leftPos = pos;
            } else {
                if(hand === 'L')
                    leftPos = pos
                else
                    rightPos = pos

                answer += hand;
            }
        }

    });


    return answer;
}

solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")