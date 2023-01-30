
const cardArray = [
    {
        name: "fries",
        img: "./images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "./images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "./images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "./images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "./images/milkshake.png"
    },
    {
        name: "pizza",
        img: "./images/pizza.png"
    },
    {
        name: "fries",
        img: "./images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "./images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "./images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "./images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "./images/milkshake.png"
    },
    {
        name: "pizza",
        img: "./images/pizza.png"
    },
];


let score = 0;
const overlay = document.getElementById("overlay");
const message = document.getElementById("message");
const playAgainBtn = document.querySelectorAll(".playAgain");
const finalScore = document.getElementById("finalScore");

playAgainBtn.forEach((pb) => {
    pb.addEventListener('click', () => {
        window.location.reload();
    })
})


cardArray.sort(() => 0.5 - Math.random());

const grid = document.getElementById('grid');
let selectedCards = [];
let selectedCardIds = [];


const checkMatch = () => {
    const cards = document.querySelectorAll("img");
    const scoreCard = document.getElementById("score");

    if ((selectedCards[0] === selectedCards[1])&&(selectedCardIds[0]!==selectedCardIds[1])) {
        cards[selectedCardIds[0]].setAttribute('src', './images/white.png');
        cards[selectedCardIds[1]].setAttribute('src', './images/white.png');
        cards[selectedCardIds[0]].removeEventListener('click', flipCard);
        cards[selectedCardIds[1]].removeEventListener('click', flipCard);
        score += 10;
        scoreCard.innerText = score;
        selectedCards.pop();
        selectedCards.pop();
        selectedCardIds.pop();
        selectedCardIds.pop();

        if (score === 60) {
            finalScore.textContent = score;
            overlay.classList.remove('hide'); 
        }
    }
    else {
        cards[selectedCardIds[0]].setAttribute('src',  './images/blank.png');
        cards[selectedCardIds[1]].setAttribute('src', './images/blank.png');
        selectedCards.pop();
        selectedCards.pop();
        selectedCardIds.pop();
        selectedCardIds.pop();
    }
}

const flipCard = (e) => {
    const cardId = e.target.getAttribute("data-id");
    selectedCards.push(cardArray[cardId].name);
    selectedCardIds.push(parseInt(cardId));
    e.target.setAttribute('src', cardArray[cardId].img);

    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

cardArray.forEach((c, index) => {
    const card = document.createElement('img');
    card.setAttribute('src', './images/blank.png');
    card.setAttribute("data-id", index);
    card.addEventListener('click', flipCard);
    grid.appendChild(card);
});


