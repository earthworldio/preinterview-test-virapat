/// Get input from user (string)
x = '09/09/2023'
y = '12/09/2023'
m = '13/09/2023'

var checkDate = function (x, y, m) {
    // Split for set a new Date 
    const [dayX, monthX, yearX] = x.split('/')
    const [dayY, monthY, yearY] = y.split('/')
    const [dayM, monthM, yearM] = m.split('/')

    /// check a bad input
    if (dayY < dayX) return console.log('Please check your input :(');

    /// Set to a true format of Date()
    x = new Date(`${yearX}/${monthX}/${dayX}`)
    y = new Date(`${yearY}/${monthY}/${dayY}`)
    m = new Date(`${yearM}/${monthM}/${dayM}`)

    /// return in range or not 
    const inRange = (x <= m) && (m <= y)
    /// return howfar
    const howfar = dayM - dayX

    return console.log(inRange, howfar + ' Days');
}

checkDate(x, y, m)