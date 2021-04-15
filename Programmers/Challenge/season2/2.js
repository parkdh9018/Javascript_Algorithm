const rightCheck = (str) => {

    let stack = []

    for(let c of str){

        if(c === "(" || c === "[" || c === "{")
            stack.push(c)
        else {

            if(stack.length != 0){
                let temp = stack.pop();
                if(temp.charCodeAt(0) - c.charCodeAt(0) > 2)
                    return false;

            }else{
                return false;
            }
        }
    }

    if(stack.length == 0)
        return true;
    else
        return false;
}

function solution(s) {
    var answer = 0;

    let n = s.length;

    for(let i=0;i<n;i++){

        let str =  s.split("").slice(1,n).join("") + s.split("").slice(0,1).join("")

        
        if(rightCheck(str))
            answer += 1

        s = str;

    }

    console.log(answer)

    return answer;
}

solution("[](){}");