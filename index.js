let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function getRandomCard(){
    return Math.floor(Math.random()*10) + 2
}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    hasBlackJack = false
    renderGame()
}

function renderGame(){

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent += cards[i] + " "
    }
}

function newCard(){
    if(isAlive && !hasBlackJack)
    {
        let newCard = getRandomCard()
        sum +=newCard
        cards.push(newCard)
        renderGame()
    }
}




