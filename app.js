const board = document.querySelector('#board')
const colors = ['#f1ff75', '#9fea15', '#ee75f4', '#0a7f27', '#e5097e', '#5fa4dd', '#93ff97', '#998cff', '#d6a1fc', 'aefce8', '#70ef72', '#92fce3', '#f9b28e', '#b481e8', '#f9c5a4', '#95fc76', '#d39ef7', '#d9f274', '#b0f49a', '#aecafc', '#958af7', '#7b93f2', '#8df4a0', '#a4fcd0', '#b8cafc', '#ea72f9', '#f0fc94', '#97f4c4', '#9cfcee', '#ea72ae', '#97c1ef', '#a1c8ed', '#99f984', '#b8f49a', '#b5cff4', '#ae71e8', '#f2cf85', '#fcd0a4', '#ffea9e', '#f7a088', '#e8fc99', '#9e6ed8', '#ffd9cc', '#d186f4', '#f280a2', '#68c5d8', '#96ffa0', '#e0a4f9', '#fcb5ca', '#e3a9f9', '#a37de0', '#91ffff', '#d5ef88', '#98ea6b', '#f9e595', '#f7e5af', '#ed93de']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)

}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 5px ${color}, 0 0 15px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}