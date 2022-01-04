/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game

let phrase = new Phrase('Life is good!')

const button = document.getElementById('btn__reset')

button.addEventListener('click', () =>{
    game = new Game()
    game.startGame()
})