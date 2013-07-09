#!/usr/bin/env node
var fs = require('fs');
var outfile = "prime.txt";
var primeArray = [""];
primeArray.length=0;

var out = "";
function isPrime( n ) {
    var max = Math.sqrt(n);
    for( var i = 2;  i <= max;  i++ ) {
        if( n % i === 0 )
            return false;
    }
    return true;
}

function loadPrimeNumbers( howMany ) {
    for( var n = 2;  howMany > 0;  n++ ) {
        if( isPrime(n) ) {
            primeArray.push( n );
            --howMany;
        }
    }
    return primeArray;
}

loadPrimeNumbers(100);
fs.writeFileSync(outfile, primeArray);  
console.log("Script: " + __filename + "\nWrote: " + out + " To: " + outfile);

