let rating=3;


const user_input = prompt("Enter something")
if(user_input==3){
    console.log("Hello ABdullah")
}
//comments

if(false=="0"){
    console.log("false is 0")
}


if(user_input>1 && user_input<10){
    console.log("true range")
}

//arrays


let colors=['red','orange','blue'];
colors.push("tom");
colors.pop()
colors.shift()
let other_colors = ['teal','tame'];


colors = colors.concat(other_colors);
colors.includes('teal');
colors.slice(1,3);


const name= {first_name: 'Abdullah', last_name:'Bilal'};


for (let i=0;i<10;i++){
    console.log(i);
}


let i=0;

while(i<5){
    i++;
    console.log(i);
}


// guessing game


let max = parseInt(prompt('Enter max number'))
const target_num  = Math.floor(Math.random()*max) +1;
console.log(target_num);

let guess = parseInt(prompt('Enter your  guess'))
while(guess!=target_num){

    if(guess>target_num){
        console.log("choose a smaller")

    }
    else{
        console.log("choose a larger")
    }
}


console.log("y gota it")



function go(){
    console.log("go");

}

go();
