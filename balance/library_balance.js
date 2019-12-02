"use strict";

var transList = [];

const NEG1 = -1;

// Idea is to check if a default param was passed used NEG1. As there cannot be a "negative amount" of transactions.
var getTransaction = function(index = NEG1) { 
    if (index == (-1)) { return transList.length;}
    else { return transList[index]; }
};



var addTransaction = function (type, amount, date = new Date()) {
    
    amount = parseFloat(amount).toFixed(2);

    // If we were passed a date param (not default), create the date object with the string passed.
    if(date != new Date()) { 
        date = new Date (date);
        if (date.toString() == "Invalid Date") { // Works for most cases, doesn't work for things like 2/31/2019 as JS rollsover! Not sure how to fix it yet.
            return; // If date is invalid, don't add the transaction. Return will exit the function.
        }
    }
    
    // Create a transaction associatve array 'object', initialize values, push it to the transList array.
    var transaction = [];
    transaction["type"] = type;
    transaction["amount"] = amount;
    transaction["amountDisplay"] = amount;
    transaction["dateDisplay"] = date.toDateString();    
    transList.push(transaction);   
};




var calculateBalance = function (type, amount, total) {
    
    if(type == "deposit"){
        return (parseFloat(amount) + parseFloat(total)).toFixed(2);
    }
    
    if(type == "withdrawal"){
        return (parseFloat(total) - parseFloat(amount)).toFixed(2);
    }
};

// General "bug". Using .toFixed(2) will round up. Not sure if this is desired when dealing with currency.