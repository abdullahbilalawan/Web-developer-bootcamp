// const allLinks = document.querySelectorAll('a');

// // for (let link of allLinks) {
// //     link.innerText = 'I AM A LINK!!!!'
// // }


// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }

const allimages = document.getElementsByTagName('img')
for(let img of allimages){
    console.log(img.src);
}

//query selector


const qselector = document.querySelector('a[title="Java"]')
console.log(qselector.tagName)
qselector.getAttribute('title')



// const all_links = document.querySelector('a')

// for(let link of all_links){

//     link.style.color= 'cyan'

//     console.log(link)
// }


const h2 = document.querySelector('h2')

h2.getAttribute('class')
h2.setAttribute('class','purple')



//append
const new_image =  document.createElement('img')
new_image.src ='https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd6%2FMIA_press_photo_2016.png%2F220px-MIA_press_photo_2016.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FM.I.A._(rapper)&tbnid=JanGhkf2xLxhZM&vet=12ahUKEwi0o5vP6KztAhXG1eAKHfiLB_4QMygAegUIARCRAQ..i&docid=Gg1Q1WzirfiKwM&w=220&h=287&q=mia&ved=2ahUKEwi0o5vP6KztAhXG1eAKHfiLB_4QMygAegUIARCRAQ'
document.body.appendChild(new_image)