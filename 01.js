asd(1)

function asd(a) {
    let str
    if (a >= 90) {
        str = 'a'
    } else if (a >= 80 && a <= 80) {
        str = 'b'
    } else if (a >= 70 && a <= 79) {
        str = 'c'
    } else if (a >= 60 && a <= 69) {
        str = 'd'
    } else if (a <= 59) {
        str = 'e'
    }

    console.log(str)
}
