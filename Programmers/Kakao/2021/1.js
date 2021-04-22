//신규 아이디 추천

function solution(new_id) {
    var answer = '';

    //1
    new_id = new_id.toLowerCase();

    //2
    new_id = new_id.replace(/[^\w\d.-]/g,"");

    //3
    new_id = new_id.replace(/[.]{2,}/g,".");

    console.log(new_id)

    //4
    new_id = new_id.replace(/\.?(.*)/g,"$1");
    new_id = new_id.replace(/(.*)\.$/g,"$1");

    console.log(new_id)


    //5
    if(new_id.length === 0)
        new_id = 'a'

    //6
    if(new_id.length >= 16 ){
        new_id = new_id.slice(0,15)

        if(new_id[new_id.length-1] === '.')
            new_id = new_id.slice(0,14)
    }

    //7
    if(new_id.length <= 2){

        const last = new_id[new_id.length - 1]


        while(new_id.length < 3)
            new_id += last
    }

    answer = new_id

    return answer;
}

solution("z-+.^.")