console.log(document.getElementById('btn-right'))

const btnRight = document.getElementById('btn-right');
const btnLeft = document.getElementById('btn-left')
const cards = document.querySelectorAll('.card');
let currentCard = 0;

function hideSelectedCard(){
    const cardSelected = document.querySelector('.selected');
    console.log(cardSelected);
    cardSelected.classList.remove('selected');
}

function showSelectedCard(cardIndex){
    console.log(currentCard);
    cards[cardIndex].classList.add('selected');
}

btnRight.addEventListener
('click', function () {

    console.log("current card",currentCard);
    console.log("cards",cards.length - 1);

    if(currentCard === cards.length - 1) return;

    console.log('Function !');

    hideSelectedCard();
    currentCard++;
    showSelectedCard(currentCard);
});

btnLeft.addEventListener
('click', function () {

    if(currentCard === 0) return

    console.log('Function !');

    hideSelectedCard();
    currentCard--;
    showSelectedCard(currentCard);
});