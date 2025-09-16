console.log('Let\'s get some colore');
///////////////////////
const container = document.querySelector('#container')
const div = document.createElement('div')

function createGridOfDiv(num) {
    let newSquareWidth = (480 / num)
    for (let i = 1; i <= (num*num); i++) {
        const div = document.createElement('div')
        div.setAttribute("style", `width: ${newSquareWidth}px; height: ${newSquareWidth}px;`)
        div.className = 'square'
        div.classList.add('square-uncolored')
        div.id = `square-${i}`
        container.appendChild(div)       
    }
 
}


let num = 16
createGridOfDiv(num)

//// hover effect
function hover() {
    
    const squares = document.querySelectorAll('.square')
    for (const square of squares) {
        square.addEventListener('mouseenter', ()=> {
            square.classList.remove('square-uncolored')
            square.classList.add('square-colored')
            console.log('hovered');
        })
    }
}
hover()


/// button handling
const btnSquarePerSide = document.querySelector('#btnSquarePerSide')
btnSquarePerSide.addEventListener('click', ()=> {
    let newNum = prompt("How Many square per sid would you like?(<100)");
    newNum
    container.replaceChildren() // empty the container
    createGridOfDiv(newNum)
    hover()
})

    