const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true})
.then(()=>{
    console.log('COnnection opened')
})
.catch(()=>{
    console.log('ERROR')
});


const movie_schema = mongoose.Schema(
    {
        title:String,
        year:Number,
        score:Number,
        rating:String,
        first:String,
        last:String
    }
)



movie_schema.virtual('fullName').get(function(){


    return `${this.first} ${this.last}`;
})



const Movie = mongoose.model('Movie',movie_schema)
movie_schema.methods.greet = function(){

    console.log("How u doing")
}






movie_schema.statics.firesale = function(){


    return this.updateMany({},)
}
const amadeus = new Movie({title:"AMADEUS",year:2019,score:7.7,rating:"five star"});
amadeus.save();

const pirates = new Movie({title:"PIRATES",year:2001,score:4.7,rating:"four star"});





// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected to mongo')
// });