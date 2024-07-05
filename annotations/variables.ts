let  apples : number = 5;
apples = 6;

let speed : string = 'fast';
const hasName : boolean = true;


let nothingMuch : null = null;
let nothing : undefined = undefined;

let now : Date = new Date();

//Arrays
let colors:string[] = ['red','blue','yellow','green'];
let myNumbers: number[] = [1,2,3];
let truths: boolean [] = [true,true]

// Classes
class Car {

}

//Object Literal
let car : Car = new Car();
let point:{ x:number; y:number} = {
  x:10,
  y:20
}

//Function
const logNumber:(i:number) => void = (i:number) =>{
  console.log(i)
}


// Type annotations are not required inference in TS dictates the type

//  Type Inference
const color  = 'blue'
// <== Variable declaration--> = Variable initialization
// if declaration and intialization are on the same line TS will figure out the type for us

let meow = 'cat';
// when do we add type annotations
// 1. When we declare a variable on one line and initialize later
let words:string [] = ['red','green','blue']
let foundWord:boolean = false;
for(let i:number = 0; i<words.length;i++){
  if(words[i] === 'green'){
    foundWord = true;
  };
};

// 2. When we want to have a variable to have a type that cant be inferred


// 1. When a function returns the any type and we need to clarify the value
 const json = `{
"x": 10,
"y":20
}`

const coordinates: {x:number; y:number}  = JSON.parse(json);
console.log(coordinates)
// If you ever  call JSON.parse you will get the any type back

// The any type
// It is a type just as a string or number
// Means TS has no idea what it is cant check for correct property references
// AVOID VARIABLE WITH ANY AT ALL COSTS




