//Data Types

// Type script is strongly typed and also static type

// means that we cannot reassign another data type value to a variable with different data type

// also if we didnot specify data type explicity it assume it implicity

//--------------------------------------------------------------------------
//String data type
let Name="nesma Osama"//assign it as string implicity

//Number data Type
let age:number;//initialization 

//Bool data type
let isOld:boolean;

//Any Data Type
let album:any;//any can accept any type, This means you can assign any type of value to a variable declared with any, and TypeScript will not perform type checking on it.

//Union Data Type you can assign it a string and later reassign it to a number, and vice versa. Here's how it works:
let id:String|Number;

//Regualer Exp
let re:RegExp=/\we+/g

//Error
// age="43"
age=43
isOld=true


