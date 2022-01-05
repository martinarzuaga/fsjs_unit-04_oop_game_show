/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game
const btnReset = document.getElementById('btn__reset')
const btnLetter = document.querySelectorAll('div.keyrow button.key')

btnReset.addEventListener('click', () =>{
    game = new Game()
    game.startGame()
})

addEventListener('click', e =>{

    if(e.target.classList.value === 'key') {
        let letter = e.target.textContent
        game.activePhrase.checkLetter(letter)
    }

})