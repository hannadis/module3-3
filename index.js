//whole script strict mode syntax
'use strict';
let v = "strict mode script!"; 


//object to represent a person information 

var person = {
    name: 'Hanna',
    Address: 'Reykjavik',
    Country: 'Iceland',
}

delete person.Address; 
console.log(person) //this is how to remove a property from object 

console.log(person.name === 'Hanna') //this is true in this case because this name goes under that function. 
console.log(person.Address === 'Reykjavik') //this is also true because this is the right address
console.log(person.name === 'maney') //this is false because this is not the information given in the person function  

//string concatenation
"use strict";
var firstName = 'Hanna';
var lastName = 'Dis';
var Job  = 'Vfx Compositor' // in the console it has to be with capital letters so it will work
console.log(firstName + ' ' + lastName + ' ' + Job) 
// in this : if I want space between the words I need to add + both sides of the ' ' for it to work so I dont get any errors 


//array 
var people = [
    { name: 'Hanna' }, //0
    { name: 'Stella'}, //1
    { name: 'Katrin'}, //2
    { name: 'Maney'}, //3
]
//the first name is 0 and then upwards to use in the next section 

console.log(people) 
console.log(people[0]) // hanna goes here because that is the first one and is number 0
console.log(people[3]) //name maney goes here because she is number 3
console.log(people[1].name) // by adding the number [1] in the people section it only shows the name. not the name: stella


//if I want to add age or phone number or something to one person in the group it is done like :
people[0].age = 30 
console.log ( people )
people[3].number = 8477315 // here is the phone number added for maney because she is number 3
console.log ( people )


//date
var now = new Date()
console.log(now) //shows the time that is now
console.log(now.getMonth()) //shows the month
console.log(now.getFullYear()) //shows the year
console.log(now.getMinutes()) //shows the minutes

//the if statement - statements are used to perform different actions based on different conditions
// use the if statement to specify a block of code to be executed if a condition is true
if (12 + 15 === 27) {
    console.log('right answer')
}   else {
    console.log('wrong answer') 
}













//variables 

let life = 100 ; //this is a lifebar NUMBER
  
let name = 'Hanna Dis'; //this is a name displayed STRING
  
//we can change the value of the number in the variable into what number we want to. 

life = life - 30; // we get the number 70 

// if we then add another - it will not sustract from the top number which is 100 it will be from the number we have underneath it (70)

life = life - 20;

//in this case the number will go down to 50 not 80. since the script is calculated downwards. 
// we can use alls kinds of math ways to calculate this (substract, plus, divide and more)


//adding life in () instead of writing the number, then it knows that life is 100. also if we would write (name) it would know the name added to the variable
  
console.log(life);


//boolean is a value of true and false 

var checkout = true; //boolean

//if this would be false, the "if buying .... "  would not work.
//light on = True - Light Off = False 


//Functions = Set of code that is written to do a task 
// good to reminder is to have lowercase in the beginning word and uppercase as a first letter in the second word
const nick = "Hanna Dis" ; 

function logger() {
    
    console.log('help sos');
    console.log('help sos');
    console.log('help sos');
    console.log('help sos'); 
} //these brackets mean that this is only available inside this function 
// if we would add a name inside the function it would not be available outside the function

logger (); 



