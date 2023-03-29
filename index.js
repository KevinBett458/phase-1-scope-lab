// Declare the customerName variable in global scope and set it to 'bob'
customerName = 'bob';

// Define a function to uppercase the customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Define a function to set the bestCustomer variable to 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Define a function to overwrite the bestCustomer variable with a new value
function overwriteBestCustomer(newBest) {
  bestCustomer = newBest;
}

// Define a constant variable for the least favorite customer
const leastFavoriteCustomer = 'not bob';

// Define a function that tries to reassign the value of the leastFavoriteCustomer variable (will throw an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else';
}