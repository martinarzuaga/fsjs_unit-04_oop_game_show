/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0
        this.phrases = this.createPhrases()
        this.activePhrase = null
    }

    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
     */
    createPhrases() {
        const text = [
            "Do not go through life, grow through life",
            "Follow your honest convictions, and stay strong",
            "It is never too late to be who you might have been",
            "With self discipline most anything is possible",
            "A good heart is better than all the heads in the world"
        ]

        const phrases = []

        for (let i = 0; i < text.length; i++) {
            phrases.push(new Phrase(text[i]))
        }

        return phrases
    }

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        let randomNumber = Math.floor(Math.random() * this.phrases.length)
        
        return new Phrase(this.phrases[randomNumber].phrase)
    }

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        const overlay = document.getElementById('overlay')
        overlay.style.display = 'none'

        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()
        
    }


}