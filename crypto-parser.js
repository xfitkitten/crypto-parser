// Operation Accept csv as CL Argument
const {load, getHeaders} = require('csv-load-sync');
var filePath = process.argv[2];
const fs = require('fs')
fs.readFile(filePath, (err, data) => {
    if (err) throw err;
        console.log(`${filePath} could not be found. Please check your file location and try again.`)   
    })
   
//Operation Take In Data
const newData = load(filePath);
const expectedHeaders = ['SNo','Symbol','High','Open','Volume','Name','Date','Low','Close','Marketcap']
let headers = getHeaders(newData)
for (let i=0; i < headers.length; i++) {
    if (expectedHeaders.includes(headers[i])) {
        continue
     } else {
        throw 'You broke it'; 
    }
}


//const dogecoin = load('coin_Dogecoin.csv');
//const ethereum = load('coin_Ethereum.csv');

//console.log(bitcoin[0])
//console.log(dogecoin[0])
//console.log(ethereum[0])

// Operation Data Trimming
function streamline(array) {
    let reduced = array
    for (i=0; i < reduced.length; i++) {
        delete reduced[i].Name
        delete reduced[i].Open
        delete reduced[i].Close
        delete reduced[i].Volume
    }
    return reduced
}

const fileReduce = streamline(newData)
//const dogecoinV2 = streamline(dogecoin)
//const ethereumV2 = streamline(ethereum)

//console.log(bitcoinV2[0])
//console.log(dogecoinV2[0])
//console.log(ethereumV2[0])

// Operation Data Conversion & Formatting
function newSerialNum(sno, symbol) {
    return sno + "-" + symbol
}
function convertToNum(numberString) {
    numberString = parseFloat(numberString).toFixed(8)
    return parseFloat(numberString)
}

function newDate(date) {
    let splitDate = date.split("-")
    let finalString 

    if (splitDate[1] == 01) {
        finalString = "January " + splitDate[2] + ", " + splitDate[0]  
    } else if (splitDate[1] == 02) {
        finalString = "February " + splitDate[2] + ", " + splitDate[0]
    } else if (splitDate[1] == 03) {
        finalString = "March " + splitDate[2] + ", " + splitDate[0]
    } else if (splitDate[1] == 04) {
        finalString = "April " + splitDate[2] + ", " + splitDate[0]
    } else if (splitDate[1] == 05) {
        finalString = "May " + splitDate[2] + ", " + splitDate[0]
    } else if (splitDate[1] == 06) {
        finalString = "June " + splitDate[2] + ", " + splitDate[0]
    } else if (splitDate[1] == 07) {
        finalString = "July " + splitDate[2] + ", " + splitDate[0]
    } else if (splitDate[1] == 08) {
        finalString = "August " + splitDate[2] + ", " + splitDate[0]
    } else if (splitDate[1] == 09) {
        finalString = "September " + splitDate[2] + ", " + splitDate[0]
    } else if (splitDate[1] == 10) {
        finalString = "October " + splitDate[2] + ", " + splitDate[0]
    } else if (splitDate[1] == 11) {
        finalString = "November " + splitDate[2] + ", " + splitDate[0]
    } else if (splitDate[1] == 12) {
        finalString = "December " + splitDate[2] + ", " + splitDate[0]
    } 
    return finalString
}
function newIdentifier(newData) {
    let highest = 0
    let coin = coinList;
    for (let i=0; i < coin.length; i++) {
        coin[i].SNo = newSerialNum(coinList[i].SNo, coinList[i].Symbol)
        coin[i].Low = convertToNum(coinList[i].Low)
        coin[i].High = convertToNum(coinList[i].High)
        coin[i].Marketcap = convertToNum(coinList[i].Marketcap)
        coin[i].Marketcap = parseInt(coinList[i].Marketcap)
        coin[i].Date = coinList[i].Date.split(" ")[0]
        coin[i].Date = newDate(coinList[i].Date)
        coin[i].marketMovement = "up"
        coin[i].peak = 0

        if (coin[i].High > highest) {
            highest = coinList[i].High
            coin[i].peak = highest
        } else {
            coin[i].peak = highest
        }
        if (i==0) {
            continue
        }
        if (coin[i].High > coinList[i-1].High) {
            coin[i].marketMovement = "up"
         }  else {
            coin[i].marketMovement = "down"
            }
        }
        return coin
    }
    


const dataID = newIdentifier(newData);
//const dogecoinID = newIdentifier(dogecoinV2);
//const ethereumID = newIdentifier(ethereumV2);


console.log(newData)
//console.log(dogecoinID[0])
//console.log(ethereumID[0])

