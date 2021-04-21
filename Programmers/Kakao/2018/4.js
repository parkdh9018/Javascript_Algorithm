//매칭점수


//const pages = ["<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://a.com\"/>\n</head>  \n<body>\nBlind Lorem Blind ipsum dolor Blind test sit amet, consectetur adipiscing elit. \n<a href=\"https://b.com\"> Link to b </a>\n</body>\n</html>", "<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://b.com\"/>\n</head>  \n<body>\nSuspendisse potenti. Vivamus venenatis tellus non turpis bibendum, \n<a href=\"https://a.com\"> Link to a </a>\nblind sed congue urna varius. Suspendisse feugiat nisl ligula, quis malesuada felis hendrerit ut.\n<a href=\"https://c.com\"> Link to c </a>\n</body>\n</html>", "<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://c.com\"/>\n</head>  \n<body>\nUt condimentum urna at felis sodales rutrum. Sed dapibus cursus diam, non interdum nulla tempor nec. Phasellus rutrum enim at orci consectetu blind\n<a href=\"https://a.com\"> Link to a </a>\n</body>\n</html>"]
const pages = ["<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://careers.kakao.com/interview/list\"/>\n</head>  \n<body>\n<a href=\"https://programmers.co.kr/learn/courses/4673\"></a>#!MuziMuzi!)jayg07con&&\n\n</body>\n</html>", "<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://www.kakaocorp.com\"/>\n</head>  \n<body>\ncon%\tmuzI92apeach&2<a href=\"https://hashcode.co.kr/tos\"></a>\n\n\t^\n</body>\n</html>"];



function solution(word, pages) {
    var answer = 0;

    const map = new Map();

    pages.forEach((page,i) => {

        let re;

        re = new RegExp("<meta property=\"og:url\" content=\"(.*)\"/>")
        let currentLink = page.match(re)[1];

        re = new RegExp("[^a-z]+"+word+"[^a-z]+","gi")
        let temp = page.match(re)

        console.log(temp)

        let basic = 0
        if(temp !== null)
            basic = page.match(re).length; //기본점수


        re = new RegExp("<a href=\"(.*)\">","g");
        let outerLink = page.matchAll(re); //외부링크

        let link = []

        for(const a of outerLink){
            link.push(a[1])
        }

        const object = {
            index: i,
            basicScore : basic,
            linkScore : basic / link.length,
            link: link
        }

        map.set(currentLink,object)

    });

    //console.log(map)

    let result = Array(pages.length).fill(0);

    for(const k of map.keys()){

        const ob = map.get(k)
        result[ob.index] += ob.basicScore 

        ob.link.forEach((v) => {

            if(map.has(v))
                result[map.get(v).index] += ob.linkScore
            
        })

    }

    //console.log(result)

    answer = result.reduce((max,v,i) => {

        if(v > max[1]){
            let re = [i,v]
            return re;
        } else
            return max;
    },[0,-1])[0]

    //console.log(answer)

    return answer;
}


//solution("Muzi",pages);

const test = (word) => {

    const result = word.match(re)
    console.log(result)

    // var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    // var regexp = /[A-E]/gi;
    // var matches_array = str.match(regexp);
    //console.log(matches_array);
}

test(" >Muzi1muzi<")