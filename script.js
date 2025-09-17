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

//// hover effect (ONE COLOR)
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

// hover()


/// button handling
const btnSquarePerSide = document.querySelector('#btnSquarePerSide')
btnSquarePerSide.addEventListener('click', ()=> {
    let newNum = prompt("How Many square per sid would you like? (between 1-100)");
    while (newNum < 1 || newNum > 100) {
        newNum = prompt('You mus choosed a number between 1 and 100')
    }
    newNum
    console.log(newNum);
    container.replaceChildren() // empty the container
    createGridOfDiv(newNum)
    hover()
})

    
//// hover effect (RANDOM COLOR)

function hoverRandom() {
    
    const squares = document.querySelectorAll('.square')
    for (const square of squares) {
        let randomR =  Math.floor(Math.random()*256)
        let randomG =  Math.floor(Math.random()*256)
        let randomB =  Math.floor(Math.random()*256)
        let alphpa = 0
        square.addEventListener('mouseenter', ()=> {
            alphpa += 10
            let randomRGBA = `rgba(${randomR},${randomG},${randomB},${alphpa}%)`
            square.classList.remove('square-uncolored')
            square.classList.add('square-colored')
            square.style.backgroundColor = randomRGBA
            console.log(`square color: ${randomRGBA}`);
            
        })
    }
}

hoverRandom()