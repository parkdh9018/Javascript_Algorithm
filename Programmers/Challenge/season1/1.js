//3진법 뒤집기

function solution(n) {

    let str = "";

    //3진법으로
    while( n > 0 ){
        str += (n % 3).toString();
        n = parseInt(n / 3);
    }

    //10진법으로
    let result = 0;

    str = BigInt(str).toString().split("").reverse().forEach((v,i) => {
        result += v * Math.pow(3,i);
    });

    console.log(result);

    return result;
}

solution(78413450);