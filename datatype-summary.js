// Pramitive

// 7 types : String, Number, BigInt, Boolean, Symbol, Null, Undefined

// Non-Pramitive
//  type : Object, Function, Array


const heros = ["spyderman, superman", "batman", "ironman"];
let myObj = {
    name:"manav",
    age: 21,
}

const myFunc = function () {
    console.log("Hello World");
    
}



// memory
// Pramitive types are stored in stack memory
// Non-Pramitive types are stored in heap memory

let mySurname = 'Bhatt'
let myName = mySurname;
mySurname = 'Sharma'; // This will not change myName 
console.log(mySurname);
console.log(myName);

let userOne = {
    email : "user@gmail.com",
    upi : "use@icici",
}

let userTwo = userOne;

userTwo.email = "man@gmail.com";
console.log(userOne.email); //