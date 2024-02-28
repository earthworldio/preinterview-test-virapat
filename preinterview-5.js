var webHistory = function () {
    const prompt = require('prompt-sync')({ sigint: true })

    /// Variable
    let history = []
    let index = null
    let current = ''

    console.log('Press Ctrl + C to close the program')
    while (true) {
        const readline = prompt('Enter a command : ')
        /// use lowercase to protect case : INPUT , INput , Input , InPuT
        if (readline.toLowerCase().includes('input')) {
            /// split only url from input
            let x = readline.toLowerCase().split('input ')
            history.push(x[1])
            index = history.length - 1
        } else if (readline.toLowerCase() === 'prev') {
            /// if back to index 0 or use (prev) and not input any url
            if (index === 0 || index === null) {
                console.log('No website to previous')
                continue
            } else {
                index--
            }
        } else if (readline.toLowerCase() === 'next') {

            /// protect case not input any url by continue
            if (history.length === 0 || index === null) {
                console.log('No website to go')
                continue
            }
            /// in case inthe last page can't go next
            if (index === history.length - 1) {
                console.log('No website to go')
                continue
            }
            index++
        } else if (readline.toLowerCase() === 'current') {
            if (history.length != 0) {
                current = history[index]
            }
            console.log('Now you on : ' + current)
        } else if (readline.toLowerCase() === 'all') {
            console.log(history)
        }
    }
}

webHistory();
