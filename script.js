let slider = document.querySelector('.slider')
let size_text = document.querySelector('#size-text')
initialBoard()
size_text.innerHTML = `Grid Size: ${slider.value} x ${slider.value}`
slider.oninput = function(){
    clearBoard()
    size_text.innerHTML = `Grid Size: ${slider.value} x ${slider.value}`
}



function clearBoard(){
    list_of_pieces = Array.from(document.getElementsByClassName('piece'))
    list_of_pieces.forEach(element => {
        element.backgroundColor = 'white'
    });
}






function initialBoard(){
    let board = document.querySelector(".main-screen")
    let squareSize = Number(550/slider.value)
    console.log(squareSize)
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
                row_piece.style.backgroundColor = 'black'
            })
            column.appendChild(row_piece)
        }
        board.appendChild(column)
    }
    
}


