
var PingpongSolution = function (input) {
    /// assign target of modulation 
    let ping = 3
    let pong = 5

    for (let i = 1; i <= input; i++) {
        /// can modulation ping and pong
        if (i % ping === 0 && i % pong === 0) {
            console.log(i, 'Ping Pong');
        } else {

            if (i % ping === 0) {
                /// can modulation ping
                console.log(i, 'Ping')
            } else if (i % pong === 0) {
                /// can modulation pong
                console.log(i, 'Pong')
            }
        }
    }
};

PingpongSolution(30)