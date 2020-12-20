

const form = document.querySelector('#searchform')
form.addEventListener('submit', async function(e){

    e.preventDefault();
    console.log('SUBMITTED')
    const term =form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/shows?q=${term}`)
    console.log(res.data[0] );

    const img = document.createElement('IMG')
    img.src = res.data[0].image.medium;
    document.body.append(img)

})