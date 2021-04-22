//자물쇠와 열쇠

function solution(key, lock) {
    var answer = true;

    const m = key.length;
    const n = lock.length;

    let board = Array.from(Array(3*n), () => new Array(3*n).fill(0))

    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            board[i+n][j+n] = lock[i][j]
        }
    }


    //rotate 작업

    
    for(let i=0;i<m;i++){
        for(let j=0;j<m;j++){
            board[i][j] = key[i][j]
        }
    }
    

    return answer;
}

solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]],[[1, 1, 1], [1, 1, 0], [1, 0, 1]])