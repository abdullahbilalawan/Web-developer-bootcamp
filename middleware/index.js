const express = require('express')
const app = express();
    
const morgan = require('morgan')

//morgan('tinry')
app.use(morgan('common'))


app.use((req,res,next)=>{
    console.log("My first middlewre")
    next();

    console.log("this is my first middleware after calling next")
})

app.use((err,req,res,next)=>{

    console.log("************ERROR******************")


})

app.use((req,res,next)=>{
    console.log("this is my second middleware")
    next();
})

app.use((req,res,next)=>{
    console.log(req.query)
})

app.get('/error', (req,res)=>{

    chicken.fly();


})

app.get('/', (req,res)=>{

    
})

app.get('/', (req,res)=>{

    
                        })


app.listen(3000, ()=>{
    console.log('LISTENING TO 3000')
})