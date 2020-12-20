const makerandselector=() =>{

    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)

    return `rgb(${r},${g},${b})`

}


const buttons = document.querySelectorAll('button')

for (let button of buttons){
    button.addEventListener('click',function(){
        console.log('BUTTON')
        button.style.backgroundColor = makerandselector();
    })
}



const input = document.querySelector('input');
input.addEventListener('change', function(e){
    console.log("change")
})


// window.addEventListener('keydown',function(e){
//     switch(e.code){
//         case 'ArrowUp':
//             console.log('UP');
//             break;

//         case 'ArrowDown':
//             console.log('Down');
//             break;    
        
//     }
// })


const tweetform = document.querySelector('#tweet')

tweetform.addEventListener('submit', function(e){
    alert('Submitted');

    e.preventDefault();





})