let slider = document.querySelector('.slider')
let size_text = document.querySelector('#size-text')
let clear_button = document.querySelector('#clear-button')
let random_color = document.querySelector("#random-color")
let color = 'black'
let randomColor = false

random_color.onclick = generateColor

createBoard(slider.value)
clear_button.onclick = function(){
    clearBoard()
}
size_text.innerHTML = `Grid Size: ${slider.value} x ${slider.value}`
slider.oninput = function(){
    clearBoard()
    createBoard(slider.value)
    size_text.innerHTML = `Grid Size: ${slider.value} x ${slider.value}`
}



function clearBoard(){
    list_of_pieces = Array.from(document.getElementsByClassName('piece'))
    list_of_pieces.forEach(element => {
        element.style.backgroundColor = 'white'
    });
}



function createBoard(size){
    let board = document.querySelector(".main-screen")
    let squareSize = Number(550/size)
    
    // Remove existing grid elements
    board.innerHTML = ''

    for(let i = 0; i < 550; i += squareSize){
        let column = document.createElement('div')
        column.style.width = `${squareSize}px`
        column.style.height = '450px';
        for(let j = 0; j < 470; j+= squareSize){
            let row_piece = document.createElement('div')
            row_piece.style.width = `${squareSize}px`
            row_piece.style.height = `${squareSize}px`
            row_piece.className = 'piece'
            row_piece.addEventListener("mouseover", function(){
                row_piece.style.backgroundColor = color
            })
            column.appendChild(row_piece)
        }
        board.appendChild(column)
    }
}

function generateColor(){
    if(randomColor == false){
        color = "pink"
        randomColor = true
    }
    else{color = "black"}
}


