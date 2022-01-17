/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     * */
    addPhraseToDisplay(){
        const randomPhrase = game.getRandomPhrase().phrase.split('')
        const ul = document.getElementById('phrase').firstElementChild

        randomPhrase.forEach( (letter) => {
            if (letter === ' ') {
                let li = document.createElement('li')
                li.classList.add('space')
                li.textContent = letter
                ul.appendChild(li)
            } else {
                let li = document.createElement('li')
                li.classList.add('letter')
                li.classList.add('hide')
                li.textContent = letter
                ul.appendChild(li)
            }
        })
    }

   /**
    * Checks if passed letter is in phrase
    * @param {string} letter - Letter to check
    */
    checkLetter(letter){
        let letters = game.activePhrase.phrase.split('')
        let counter = 0

        letters.forEach( item => {
            if (item === letter) {
                this.showMatchedLetter(letter)
            }
        })
        // return counter
    }

    /**
     * Display passed letter on screen after a match is found
     * @param {string} letter - Letter to display
     */
    showMatchedLetter(letter) {
        let letters = document.querySelectorAll('.letter')

        letters.forEach(item => {
            if (item.textContent === letter) {
                item.classList.remove('hide')
                item.classList.add('show')
            }
        })
    }
}