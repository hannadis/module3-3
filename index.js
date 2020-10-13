

//string concatenation
var firstName = 'Hanna';
var lastName = 'Dis';
console.log(firstName + '' + lastName) 
// in this : if I want space between the words I need to add + both sides of the ' ' for it to work so I dont get any errors 


//array 
var people = [
    { name: 'Hanna' }, //0
    { name: 'Stella'}, //1
    { name: 'Katrin'}, //2
]

console.log(people) 



//date
var now = new Date()
console.log(now) 








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



