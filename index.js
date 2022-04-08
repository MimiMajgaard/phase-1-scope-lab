var customerName = 'bob'; 
const leastFavoriteCustomer = 'Tom';
function upperCaseCustomerName(){
     console.log(customerName.toUpperCase())
    customerName = customerName.toUpperCase()
}

function setBestCustomer(){
    bestCustomer = 'not bob'
}
setBestCustomer(bestCustomer)

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}



function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Eric' 
}

