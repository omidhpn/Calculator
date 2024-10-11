let $ = document
let body = $.getElementById ('body')
let display = $.getElementById ('display')

let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']


numbers.forEach (function (num) {

    $.getElementById (num).addEventListener ('click', function () {

        if (display.innerHTML === '0') {
            display.innerHTML = ''
        }
        display.innerHTML += num

    })
})

let numDot= $.getElementById ('dot')
let numPlus= $.getElementById ('num-plus')
let numMinus= $.getElementById ('num-minus')
let numZarb= $.getElementById ('num-zarb')
let numTaghsim= $.getElementById ('num-taghsim')
let enter = $.getElementById ('enter')
let cBtn = $.getElementById ('c-button')
let secondDisplay = $.getElementById ('second-display')


let sum = 0
let sub = 1
let tagh = 1



numDot.addEventListener ('click', function () {

    display.innerHTML += numDot.innerHTML

})


numPlus.addEventListener ('click', function () {

    sum = sum + Number(display.innerHTML)
    console.log(sum);
    secondDisplay.innerHTML = sum + ' + '
    display.innerHTML = ''
    // display.innerHTML += numPlus.innerHTML

})


numMinus.addEventListener ('click', function () {

    sum = Number(display.innerHTML) - sum
    console.log(sum);
    secondDisplay.innerHTML = sum 
    display.innerHTML = ''
    display.innerHTML += numMinus.innerHTML

})


numZarb.addEventListener ('click', function () {

    sub = Number (display.innerHTML) * sub
    console.log(sub);
    secondDisplay.innerHTML = sub + ' * '
    display.innerHTML += numZarb.innerHTML
    display.innerHTML = ''
    
})


numTaghsim.addEventListener ('click', function () {

    tagh = Number (display.innerHTML) / tagh
    console.log(tagh);
    secondDisplay.innerHTML = tagh + ' / '
    display.innerHTML += numTaghsim.innerHTML
    display.innerHTML = ''

})



enter.addEventListener ('click', function () {

    if (secondDisplay.innerHTML.includes ('+') || display.innerHTML.includes ('-')) {
        secondDisplay.innerHTML += display.innerHTML
        sum = sum + Number(display.innerHTML)
        display.innerHTML = sum
        sum = 0
    } else if (secondDisplay.innerHTML.includes ('*')) {
        secondDisplay.innerHTML += display.innerHTML
        sub = sub * Number (display.innerHTML)
        display.innerHTML = sub
        sub = 1
    } else if (secondDisplay.innerHTML.includes ('/')) {
        secondDisplay.innerHTML += display.innerHTML
        tagh = tagh / Number (display.innerHTML)
        display.innerHTML = tagh
        tagh = 1
    }
     
})


cBtn.addEventListener ('click', function () {

    display.innerHTML = 0
    secondDisplay.innerHTML = ''
    
})