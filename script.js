
let curColor = 'black'
let colorPicker = document.querySelector('#colpik')
colorPicker.addEventListener('input', changeColor)

function changeColor(event) {
    curColor = event.target.value
}



const playGround = document.querySelector('#playground')

function createEtch(canvasSize) {

    // Create a new Canvas
    let canvas = document.createElement("div")
    canvas.classList.add('canvas')
    canvas.style.border = 'solid'

    for (let j = 0; j < canvasSize; j++) {
        const row = document.createElement('div')

        row.classList.add('row')

        row.style.display = 'flex'

        canvas.appendChild(row)

        for (let i = 0; i < canvasSize; i++) {
            const square = document.createElement('div')
            //square.style.border = 'solid 0.01px'
            //square.style.margin = '0.5px'
            square.style.flexGrow = 1

            square.addEventListener('mouseover', toggleLights)

            row.appendChild(square)
        }
    }

    playGround.appendChild(canvas)
}

createEtch(16)

// Shake functionality
let reset = document.querySelector('#shake')
reset.addEventListener('click', shake)
function shake() {
    let newSize = window.prompt("Enter new size: ")
    let canvas = document.querySelector('.canvas')
    playGround.removeChild(canvas)
    createEtch(newSize)
}

// Buttons
let redBtn = document.querySelector('#red')
redBtn.addEventListener('click', () => { curColor = 'red' })
let blueBtn = document.querySelector('#blue')
blueBtn.addEventListener('click', () => { curColor = 'blue' })
let rainbowBtn = document.querySelector('#rainbow')
rainbowBtn.addEventListener('click', () => { curColor = 'rainbow' })

function toggleLights() {
    if (curColor == 'rainbow') {
        let red = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        this.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`
    }
    this.style.backgroundColor = curColor
}

