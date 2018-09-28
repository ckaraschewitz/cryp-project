function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);
function fetchFromCoinMarketCap() {
    var url = 'https://api.coinmarketcap.com/v1/ticker/?convert=EUR';
    fetch(url)
        .then(function (res) { return res.json(); })
        .then(function (out) {
        console.log('Checkout this JSON! ', out);
    })["catch"](function (err) { throw err; });
    // var response = UrlFetchApp.fetch("https://api.coinmarketcap.com/v1/ticker/?convert=EUR");
    // response = JSON.parse(response);
}
