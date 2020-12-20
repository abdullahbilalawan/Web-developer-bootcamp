


const bton = document.querySelector('#v')
bton.onclick = function(){
    alert("Button pressed")
}


bton.onclick =function(){
    alert("Fucking button was clicked")
}

function salam(){
    console.log("Aslamoalaikum kardash")
}

bton.onmouseenter = salam;

document.querySelector('#c3').addEventListener('dclick',function(){
    alert('clicked')
})