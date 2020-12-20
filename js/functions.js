


function display(content){
    console.log(`first name is: ${content}`);
}

function add(a,b){//addition function

    let result = a+b;
    console.log(result);

    return add;
}

function totaleggs(){

    let total=6;//local scope

}

let radius=8
if (radius>8){
    // block scope but with var we can have block scope availble
}

const add = function(x,y){//another function expression
    return x+y;
}


function callTwice(func){
    func();
}

callTwice(add);
//factory function

function makebetweenfunc(min,max){
    return function(num){
        return num>min && num<max;
    }
}


try{
    add(2,3);
}catch(e){
    console.log("EROR")
}

const numbers = [1,2,3,4,4,5,6,6,77,8,8,2,1,3,2];

numbers.forEach(console.log)

numbers.forEach(function(el){
    if(el%2==0){
        console.log("even number")
    }
})
numbers.map(function(num){
    return num+2;
} )

//arrow functions

const multiply = (x,y) => {
    return x * y;//explicit return
}

//implicit return
const power = (x,y) =>   x*x*y


//timeout
setTimeout(() =>{
    console.log("Hellp")
},3000)//after 3 sec


//filter array

numbers.filter(n => {
    n<10;
})

numbers.some(n => {
    n>4
})

//arow function and this keyword


//default params
function rolldie(num=6){
    return Math.floor(Math.random()*num +1)
}

//spread syntax
Math.max(...numbers);
const a  = [...numbers,2 ,3]//spread use
const data ={
    name:"Abdullah",age:18
}

const newdata ={...data, school:"APS"};


//destructuring objects

const {name:firstname } = data;

