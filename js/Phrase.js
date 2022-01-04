/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

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
}