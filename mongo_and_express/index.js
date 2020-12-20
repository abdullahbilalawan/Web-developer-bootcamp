    const express = require('express')
    const app = express();
    const path = require('path')
    const Product = require('./models/product')
    const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true})
.then(()=>{
    console.log('COnnection opened')
})
.catch(()=>{
    console.log('ERROR')
});


    app.set('views',path.join(__dirname,'views'));

    app.set('view engine','ejs');

    app.get('/products', async (req,res)=>{
        const products = await Product.find({})
        console.log(products)
        res.render('products/index',{products})

    })
    app.get('products/:id',async (req,res)=>{

        const{id}=req.params;
        const product = Product.findOne({_id:id});
        res.render('/products/show',{products})

    })


    

    app.listen(3000, ()=>{
        console.log('LISTENING AT PORT 3000')
    })