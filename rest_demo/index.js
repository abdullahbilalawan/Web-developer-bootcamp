const expresss = require('express')
const app = expresss();

app.use(expresss.urlencoded({extended:true}))
app.use(expresss.json())
app.get('/tacos',(req,res) =>{
    res.send("GET TACOS RESPONSE")
})
app.set('view engine', 'ejs')


const comments =[


    {
        id:1,
        username: 'TODD',
        comment:'lol'

    },
    {
        id:2,
        username: 'MODD',
        comment:'lol'

    },
    {
        id:3,
        username: 'LODD',
        comment:'lol'

    }
]


app.get('/comments/:id',(req,res)=>{


    const {id} =req.params
    const comment = comments.find( c => c.id === parseInt(id))
    res.render('comments/show',{comment})
})

app.get('/comments',(req,res) =>{



    res.render('comments/index',{comments})
})

app.post('/comments',(req,res) =>{

    const {username,comment} =req.body;
    comments.push({username,comment})
    
    res.send('it worked')
    console.log(req.body)
    res.redirect('/comments')
})

app.get('/comments/new',(req,res) =>{
    res.render('comments/new')
})




app.post('/tacos',(req,res) =>{
    // res.send("POST TACOS RESPONSE")
    console.log(req.body)
    const {meat,qty} = req.body
    res.send(`Here is your ${meat}  and items are ${qty}`)
})
app.listen(3000, ()=>{
    console.log('LISTENING TO PORT 3000')
})

