const p1button = document.querySelector('#p1button')
const p2button = document.querySelector('#p2button')
const p1scored = document.querySelector('#p1scored')
const p2scored = document.querySelector('#p2scored')

const reset_button = document.querySelector('#reset')

const winning_score_select = document.querySelector('#playto')


let p1score=0;
let p2score =0; 

let gameover = false;


let winningscore=5;

p1button.addEventListener('click',function(){

    if(p1score!==winningscore){

    p1score+=1;
    p1scored.textContent = p1score;

    }
    else{
        gameover=true;
    }

})

p2button.addEventListener('click',function(){

    if(p2score!==winningscore){

    p2score+=1;
    p2scored.textContent = p2score;

    }
    else{
        gameover=true;
    }

})


reset_button.addEventListener('click', function(){

    gameover=false;
    p1score=0;
    p2score=0;
    p1scored.textContent = 0;
    p2scored.textContent = 0;




})

winning_score_select.addEventListener('click',function(){
    
    winningscore = parseInt(this.value)
    alert("winningscore is"+this.value)
    
})