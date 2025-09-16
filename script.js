console.log('Let\'s get some colore');
///////////////////////
const container = document.querySelector('#container')
const div = document.createElement('div')

function createGridOfDiv() {
    for (let i = 1; i <= 256; i++) {
        const div = document.createElement('div')
        div.className = 'square'
        div.classList.add('square-uncolored')
        div.id = `square-${i}`
        container.appendChild(div)       
    }
 
}

createGridOfDiv()

//// hover effect



const squares = document.querySelectorAll('.square')
for (const square of squares) {
    square.addEventListener('mouseenter', ()=> {
        square.classList.remove('square-uncolored')
        square.classList.add('square-colored')
        console.log('hovered');
    })
}

