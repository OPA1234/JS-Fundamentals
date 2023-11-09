//Concatination and Interpolation

var price = 50
var product = "Cup"

var price = 80
var product = "Table"

var messageToPrint = "The price for your "+product+" is "+price+" dollars" //concatination


var messageToPrint2 = `The price for your ${product} is ${price} dollars` // interpolation 

console.log(messageToPrint)
console.log(messageToPrint2)