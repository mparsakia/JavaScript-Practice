var $ = function(id) {
    return document.getElementById(id);
};

var processEntry = function() {
var entry = $("cents").value;         // get user entry
var cents = parseInt(entry);          // parse entry

    if (cents < 0 || cents > 99) {
        alert("Please enter a valid number from 0 to 99...");
        return;
    } 
    else {
        makeChange(cents);
        $("cents").focus();
    }
};

var makeChange = function(cents) {
var remainingCents = parseInt(cents);

var quarters = parseInt(cents / 25);           // get number of quarters
    remainingCents = (remainingCents - (quarters * 25));

var dimes = parseInt(remainingCents / 10);     // get number of dimes
    remainingCents = (remainingCents - (dimes * 10) );

var nickels =  parseInt(remainingCents / 5);   // get number of nickels
    remainingCents = (remainingCents - (nickels * 5));

var pennies = remainingCents;                  // get number of pennies

// display the results of the calculations
    $("quarters").value = quarters;
    $("dimes").value = dimes;
    $("nickels").value = nickels;
    $("pennies").value = pennies;
};

window.onload = function () {    
    $("calculate").onclick = processEntry;
    $("cents").focus();
};
