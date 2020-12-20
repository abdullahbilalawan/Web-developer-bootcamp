const product = require('./models/product')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true})
.then(()=>{
console.log('COnnection opened')
})
.catch(()=>{
console.log('ERROR')
});


const p = new product({
    name: 'tomato',
    price: 6.9,
    category: 'vegetable'
})

p.save().then(p=>{
    console.log('Saved',p)
}).catch(e =>{
    console.log(e)
})