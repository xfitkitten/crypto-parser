const {load} = require('csv-load-sync');
const bitcoin = load('coin_Bitcoin.csv');
const dogecoin = load('coin_Dogecoin.csv');
const ethereum = load('coin_Ethereum.csv');

console.log(bitcoin[0])
console.log(dogecoin[0])
console.log(ethereum[0])
