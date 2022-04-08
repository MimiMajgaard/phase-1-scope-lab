var customerName = 'bob'; 

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

const changeLeastFavoriteCustomer = 'Tom';

function changeLeastFavoriteCustomer(){
    changeLeastFavoriteCustomer = 'Eric' 
}

