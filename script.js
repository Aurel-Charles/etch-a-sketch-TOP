console.log('hello');

const container = document.querySelector('#container')
const div = document.createElement('div')



function createGridOfDiv() {
    for (let i = 0; i <= 16; i++) {
        const div = document.createElement('div')
        div.className = 'square'
        div.id = `square-${i}`
        container.appendChild(div)       
    }
 
}

 
createGridOfDiv()