var cards = [
    '<img src="img/penguin.jpg">',
    '<img src="img/monsters-01.png">',
    '<img src="img/monsters-02.png">',
    '<img src="img/monsters-03.png">',
    '<img src="img/monsters-04.png">',
    '<img src="img/monsters-05.png">',
    '<img src="img/monsters-06.png">',
    '<img src="img/monsters-07.png">',
    '<img src="img/monsters-08.png">',
    '<img src="img/monsters-09.png">',
    '<img src="img/monsters-10.png">',
    '<img src="img/monsters-11.png">',
    '<img src="img/monsters-12.png">',
    '<img src="img/monsters-13.png">',
    '<img src="img/monsters-14.png">',
    '<img src="img/monsters-15.png">',
    '<img src="img/monsters-16.png">'
];



// All code will wait until the DOM is ready!
$(document).ready(function(){
    var gridSize = (cards.length * 2);
    shuffleCards(cards); 
    var boardCards = []; // array to hold cards for board
    for(var i = 0; i < (gridSize / 2); i++){
        boardCards.push(cards[i], cards[i]);
       }
    
    shuffleCards(boardCards); // shuffle cards to be placed on the board

   

    // var mgHTML = '';
    // for(var i = 0; i < gridSize; i++){
    //     if(i < cards.length){card = cards[i]
    //     }else{
    //     	card = cards[i-cards.length]}
        
        var mgHTML = '';
    for(var i = 0; i < gridSize; i++){
        var card = boardCards[i];
        mgHTML += '<div class="col-sm-3 mg-tile">';
            mgHTML += '<div class="mg-tile-inner">';
                mgHTML += '<div class="mg-front">'+card+'</div>';
                mgHTML += '<div class="mg-back"></div>';
            mgHTML += '</div>';
        mgHTML += '</div>';
    }

    $('.mg-contents').html(mgHTML);

    $('.mg-tile-inner').click(function(){
        $(this).toggleClass('flip');
        var cardsUp = $('.flip');
        console.log(cardsUp);
        if(cardsUp.length == 2){
            // check to see if they are the same
            if(cardsUp.find('img')[0].src == cardsUp.find('img')[1].src){
                // if the pictures are the same this is a match
                cardsUp.addClass('matched');
            }else{
                // the user has flipped two cards and they don't match
                setTimeout(function(){
                    cardsUp.removeClass('flip');
                }, 1000);
            }
        }
    });
    
});
function shuffleCards(toShuffle){
    for(var i = 0; i < 1000; i++){
        card1 = Math.floor(Math.random() * toShuffle.length);
        card2 = Math.floor(Math.random() * toShuffle.length);
        var temp = toShuffle[card1];
        toShuffle[card1] = toShuffle[card2];
        toShuffle[card2] = temp;
    }
}