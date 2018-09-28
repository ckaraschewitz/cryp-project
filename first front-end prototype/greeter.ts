function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);


// SAME TRY WITH AN API 

function showJSON (marketdata: string) {
    return marketdata; 
}


function fetchFromCoinMarketCap(){

    let url = 'https://api.coinmarketcap.com/v1/ticker/?convert=EUR';
    
    fetch(url)
    .then(res => res.json())
    .then((out) => {
      console.log('Checkout this JSON! ', out);
    })
    .catch(err => { throw err });

} 




// let cryptomarketdata = 


// document.body.innerHTML = showJSON(cryptomarketdata);
