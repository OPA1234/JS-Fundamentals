//objects

var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["volvo", "toyota", "tesla"]
}

console.log(customer.firstName)

customer.firstName = "Mike"

customer['lastName'] = "Silvester"

console.log(customer['lastName'])


//arrays

var cars = ["volvo", "toyota", "tesla"]

cars[1] = "BMW"

console.log(cars[1])

console.log(customer.cars[2])
