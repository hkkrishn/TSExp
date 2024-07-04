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
// 2. When we want to have a variable to have a type that cant be inferred
// 3. When a function returns the any type and we need to clarify the value

