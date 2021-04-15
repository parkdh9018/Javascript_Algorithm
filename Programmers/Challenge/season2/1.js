function solution(absolutes, signs) {
    var answer = 123456789;



    return absolutes.reduce((acc,v,i) => {

        if(signs[i])
            return acc + v
        else
            return acc - v

    },0)
}

solution([4,7,12],[true,false,true])