const result = document.getElementById('result');
const cardArray = [
    {
        name: 'fries',
        img : './images/fries.png'
    },
    {
        name: 'burger',
        img : './images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img : './images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img : './images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img : './images/milkshake.png'
    },
    {
        name: 'pizza',
        img : './images/pizza.png'
    },
    {
        name: 'fries',
        img : './images/fries.png'
    },
    {
        name: 'burger',
        img : './images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img : './images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img : './images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img : './images/milkshake.png'
    },
    {
        name: 'pizza',
        img : './images/pizza.png'
    }
] 
const cardsChosen = [];
const cardsChosenIds = [];
const cardsWon = [];

cardArray.sort( () => 0.5 - Math.random()); // nice shortcut to sort array randomly

const display = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');

function createBoard() {

    for ( let i= 0 ; i < 12 ; i++){
        
        const card = document.createElement('img');
        card.setAttribute('src','./images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click', flipCard);
        display.append(card); 
        
    }
    
}

createBoard(); 

function flipCard() {
    
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src' , cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkMatch,1000)
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    const option1 = cardsChosenIds[0];
    const option2 = cardsChosenIds[1];
    console.log("calling match");
    if(option1 == option2){
        console.log("clicked same image!");
        cards[option1].setAttribute('src' , "./images/blank.png");
        cards[option2].setAttribute('src' , "./images/blank.png");
    }
    else if(cardsChosen[0] == cardsChosen[1]){
        console.log("matched");
        cards[option1].setAttribute('src' , "./images/white.png")
        cards[option2].setAttribute('src' , "./images/white.png")
        cards[option1].removeEventListener('click', flipCard);
        cards[option2].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    }
    else{
        cards[option1].setAttribute('src' , "./images/blank.png");
        cards[option2].setAttribute('src' , "./images/blank.png");
        console.log("Sorry try again! ");
        
    }
    resultDisplay.innerHTML = cardsWon.length;
    cardsChosen.length = 0;
    cardsChosenIds.length = 0;
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.innerHTML = "congratiltions you found all!";
    }
}

