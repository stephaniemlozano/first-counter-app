// function that increases
const counterEl = document.getElementById('counter') //get element from html
const totalCount = document.getElementById('total')
let count = 0

function increase() {
    console.log('increase here')
    count += 1
    counterEl.innerHTML = count
}

//function that decreases
function decrease() {
    console.log('decrease here')
    count -= 1
    counterEl.innerHTML = count
}

function reset() {
    console.log('reset button')
    count = 0
    counterEl.innerHTML = count
}


// bonus function that prints total
function printTotal() {
    let countStr = count + ' - '
    totalCount.innerHTML += countStr
}


//cannot drop below zero
// if (decrease() < 0) {
//     count -= 1
//     counterEl.innerHTML = count
// } else {
    
// }