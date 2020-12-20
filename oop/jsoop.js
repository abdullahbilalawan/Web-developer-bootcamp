// function make_color(r,g,b){

//     const color = {};
//     color.r =r;
//     color.g =g;
//     color.b =b;


//     color.rgb = function(){
//         return `rgb(${this.r},${this.g},${this.b})`
//     }



//     return color;

// }


// const first_color = make_color(154,23,41);
// console.log(first_color.rgb())


function Color(r,g,b){
    this.r=r;
    this.g =g;
    this.b =b;

    console.log(this)
}


Color.prototype.rgb = function(){


    const {r,g,b}= this;
    return `rgb(${r},${g},${b})`
}


class color{


    constructor(r,g,b){
        this.r=r;
        this.g=g;
        this.b=b;
        console.log('COnstructor run')


    }

    greet(){

        console.log('HEllp nice to meet u')
    }



}

//object

const c1= new color(120,100,100);




class pet{
    constructor(name,age){
        this.name = name;
        this.age = age;

    }
}

class Cat extends pet{

    constructor(name,age,color){
        super(name,age)
        this.color =color
    }
  
    eat(){
        return  `${this,name} is eating`
    }


}

class Dog{

    eat(){
        return  `${this,name} is eating`
    }


}