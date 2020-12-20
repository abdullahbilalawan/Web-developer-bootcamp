const req = new XMLHttpRequest();
req.onload =function(){
    console.log('All done with request')

    const data = JSON.parse(this.responseText)
    console.log(data)
}

// req.onerror = function(){
//     console.log('Error')
// }

// req.open('GET','https://api.cryptonator.com/api/ticker/btc-usd')
// req.send();



// fetch('https://api.cryptonator.com/api/ticker/btc-usd').then(res =>{
//        console.log('RESPONSE WAITING TO PARSE:',res)
//        return res.json()

// })
// .then(data =>{
//     console.log('data parse',data)
// })
// .catch(e =>{
//     console.log('ERROR FETCHING')
// })


// const fetchbitcoinprice = async () =>{

//     const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     const data = await res.json()

//     console.log(data.ticker.price)




// }



const fetch_bit = async() =>{


    try{

        const cofig = {headers:{Accept: 'application/json'}}

        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd',config)
        console.log(res.data.ticker.price);


    } catch(e){
        console.log('error')
    }


}