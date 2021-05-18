// Write your solution in this file!

var customerName = 'bob';
var bestCustomer;

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
     bestCustomer = 'not bob';
     return bestCustomer;
    
}



function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}



const leastFavoriteCustomer = "some value";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'John';
}