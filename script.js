const canvasSize = 20

const container = document.querySelector('#canvas')

//const square1 = document.createElement("div")
//square1.textContent = "hi"
//square1.style.border = 'solid'

for (let j = 0; j < canvasSize; j++) {
    const row = document.createElement('div')

    row.classList.add('row')

    row.style.display = 'flex'

    container.appendChild(row)

    for (let i = 0; i < canvasSize; i++) {
        const square = document.createElement('div')
        square.style.border = 'solid 0.01px'
        square.style.margin = '0.5px'
        square.style.flexGrow = 1

        square.addEventListener('mouseover', toggleLights)

        row.appendChild(square)
    }

}

function toggleLights() {
    this.style.backgroundColor = 'pink'
}