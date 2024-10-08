//Aliases
type stringorNumber = string | number; // now stringorNumber aliases the data type

let id: stringorNumber = "nne";
//literal type like const
let username: "nesma"; //this make username only nesma here it not assigned but thei is the allowed value
let password: "user" | "admin"; //may be user or admin only
// Error username="odama"
//----------------------------------------------------------------
//functions
// Return function
const add = (a: number, b: number): number => {
  return a + b;
};
//void function

const addWithoutReturn = (a: number, b: number): void => {
  console.log(a + b);
};

let func = function (a: number, b: number): number {
  return a * b;
};

type functionAliases = (a: number, b: number) => number;
let multiply: functionAliases = function (a, b) {
  return a + b;
};

//--------------------------------------------------------------------
//optinal parameter
let addThree=function(a:number,b:number,c?:number):number{
    if(c!==undefined)
        return a+b+c
    return a+b
}

//default parameter
let addThreeDefault=function(a:number,b:number,c:number=2):number{
   
    return a+b+c
}
//Reset parameter
const resetFunc=(...num:number[]):number=>{
  return  num.reduce((prev,cur)=>prev+cur)
}
console.log(resetFunc(1,2,3,4,5,6))
//Function
