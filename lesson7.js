// Loops

// for (statment1; statment2; statment3){

// }

for(let i=0; i<5; i++){
console.log("Hello World!")
}

var cars = ["volvo", "toyota", "tesla"]

//for of loop

for(let car of cars){
    console.log(car)
    if(car == "toyota"){
        break
    }
}

//ES6 syntax for each loop
cars.forEach(car => {
    console.log(car)
});



var Marko = {
    name: "Marko",
    age: 16,
    USCitizen: false,
    DL: false
}

var Teodosije = {
    name: "Teodosije",
    age: 19,
    USCitizen: true,
    DL: true
}

var Jovan = {
    name: "Jovan",
    age: 22,
    USCitizen: false,
    DL: true
}
var Zvonko = {
    name: "Zovnko",
    age: 14,
    USCitizen: true,
    DL: false
}


var clients = [Marko, Teodosije, Jovan, Zvonko]

// for( let client of clients){
//     console.log(client)
//     if (client.age > 18 && client.USCitizen == true || client.DL == true){
//         console.log("Client can rent a car!")
//         ableTORent.push(client)
//      } else {
//          console.log("Client can not rent a car!")
//          notAbleToRent.push(client)
//      }
//  }

 clients.map((client) => {
    if (client.age > 18 && client.USCitizen == true || client.DL == true){
        console.log(`${client.name} can rent a car!`)
        ableTORent.push(client.name)
     } else {
         console.log(`${client.name} can not rent a car`)
         notAbleToRent.push(client.name)
     }
 })

//  console.log(ableTORent,"Able to rent")
//  console.log(notAbleToRent," Not Able to rent")