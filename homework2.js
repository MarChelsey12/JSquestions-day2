//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown: array stuff 
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function p3FavFoods(myDict){
    for(let key in myDict){
        if (myDict[key][0] instanceof Object){
            for(let key2 in myDict[key][0]){
                console.log(`My favorite ${key} from ${key2} is ${myDict[key][0][key2]}.`);
            }
        } else if (myDict[key] instanceof Array){
            let food=''
            for (let key2 in myDict[key]){
                food += myDict[key][key2] + ' and '
            } console.log(`My favorite ${key} is ${food.slice(0,-4)}.`)
        } else if (typeof key[0] == 'string'){
            console.log(`My favorite ${key} is ${myDict[key]}.`);
        }
    };
};
p3FavFoods(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function person(name, age) {
    this.name = name;
    this.age = age;
    // Use an arrow to create the printInfo method
    this.printInfo = () => {console.log(`${this.name} is ${this.age} years old.`)};
    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age
    this.addAge = (increaseAge) =>{
        this.age += increaseAge;
        console.log(`${this.name}'s age is now ${this.age} years old!`);
    }
};
let kelly = new person('Kelly', 45)
let nathan = new person('Nathan', 23)

kelly.printInfo();
nathan.printInfo();
nathan.addAge(6);
 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const stringLength = (x) => {
    return new Promise(
        (resolve, reject) => {
            if(x.length < 10){
                resolve(console.log("Small Number"));
            } else {
                resolve(console.log("Big Word"));
            }
        }
    )
};

stringLength('supercalifraglilistic')
stringLength('hello')