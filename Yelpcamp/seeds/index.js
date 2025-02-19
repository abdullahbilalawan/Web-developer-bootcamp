
const mongoose = require('mongoose');
const campground = require('../models/campground')
const cities = require('./cities');
const { rawListeners } = require('../models/campground');
const {places,descriptors} =require('./seedHelpers')


mongoose.connect('mongodb://localhost:27017/yelp-camp',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})



const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error"));
db.once("open",()=>{
    console.log("Database connected")
})

const sample = array => array[Math.floor(Math.random()*array.length)]


const seedDB = async ()=>{
    await campground.deleteMany({});
    for (let i=0;i<50;i++){
        const random1000 = Math.floor(Math.random()*1000)
        const price= Math.floor(Math.random()*30)
        const camp = new campground({
            location:`${cities[random1000].city},${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,

            image:'https://source.unsplash.com/random',
            price: price

        })

        await camp.save();


    }
}



seedDB().then(()=>{
    mongoose.connection.close();
    
})