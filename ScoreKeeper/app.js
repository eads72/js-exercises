const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');
const playToSelect = document.querySelector('#play-to');
const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const resetButton = document.querySelector('#reset');


let p1Score = 0;
let p2Score = 0;
let winScore = 3;
let isGameOver = false;

playToSelect.addEventListener('change', function(){
    winScore = parseInt(this.value);
    reset();
});

p1Button.addEventListener('click', function(){
    if (!isGameOver){
        p1Score++;
        if(p1Score === winScore){
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        update();
    }
   
});

p2Button.addEventListener('click', function(){
    if (!isGameOver){
        p2Score++;
        if(p2Score === winScore){
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        update();
    }
   
});

resetButton.addEventListener('click', reset);

function update(){
    p1Display.innerHTML = p1Score;
    p2Display.innerHTML = p2Score;
}

function reset(){
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    update();
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}