"use strict";

var storage = {
    keyContacts: "contacts_1",
    getContacts: function() {       
        // get string from local storage 
        var storageString = localStorage.getItem(this.keyContacts) || null;
        
        // convert string to JavaScript object and return, or return empty array if string is null
        if (storageString){
            return JSON.parse(storageString);
        } else if (storageString == null) {
            var arrayempty = [];
            return arrayempty;
        }        
    },
    setContacts: function(value) {
        // convert JavaScript object to string 
        var storageString = JSON.stringify(value);
        JSON.stringify(value);
        console.log(value);
        // store string in local storage  
        window.localStorage.setItem(this.keyContacts, storageString);
    },
    clearContacts: function() {
        window.localStorage.setItem(this.keyContacts, "");
    }
};



