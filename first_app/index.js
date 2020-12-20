const express = require("express");
const app = express()

// console.dir(app)

// app.use((req,res) =>{
//     console.log('WE GOT A NEW REQUEST')
//     res.send("<h1>WE GOT YUR REQUEST</h1>")
// })


//cats


// app.get('/r/:subredit',(req,res) => {
//     res.send('THis is asubredddit')

//     const {subredit} =req.params;

// })

// app.get('/cats',(req,res)=>{

//     console.log('CAT REQUEST')
//     res.send('<h1>MEOWWW</h1>')


// })

// app.get('/search/hello',(req,res) =>{
//     const {q} = req.query;
//     res.send(`results ${q}`)
// })

// app.post('/cats',(req,res)=>{

//     console.log('CAT POST')
//     res.send('<h1>this is a post request</h1>')


// })


app.set('view engine','ejs')



app.get('/', (req,res)=>{

    const num = Math.random() *10;




    res.render('home.ejs',{randomr:num})
})

app.get('/r/:subreddit',(req,res)=>{
    const num = Math.floor(Math.random() *10);
    const {subreddit} =req.params;
    res.render('subreddit',{subreddit,num})
})
app.listen(8080,()=>{
    console.log('LISTENING ON PORT 3000')
})



