var PingpongSolution2 = function (input, i, j) {

    //// do the same thing just use i and j to ping / pong
    let ping = i
    let pong = j

    for (let i = 1; i <= input; i++) {
        if (i % ping === 0 && i % pong === 0) {
            console.log(i, 'Ping Pong');
        } else {
            if (i % ping === 0) {
                console.log(i, 'Ping')
            } else if (i % pong === 0) {
                console.log(i, 'Pong')
            }
        }
    }
};

PingpongSolution2(35, 5, 7)