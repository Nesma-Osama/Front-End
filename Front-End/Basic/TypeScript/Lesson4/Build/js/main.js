"use strict";
let id = "nne";
//literal type like const
let username; //this make username only nesma here it not assigned but thei is the allowed value
let password; //may be user or admin only
// Error username="odama"
//----------------------------------------------------------------
//functions
// Return function
const add = (a, b) => {
    return a + b;
};
//void function
const addWithoutReturn = (a, b) => {
    console.log(a + b);
};
let func = function (a, b) {
    return a * b;
};
let multiply = function (a, b) {
    return a + b;
};
//--------------------------------------------------------------------
//optinal parameter
let addThree = function (a, b, c) {
    if (c !== undefined)
        return a + b + c;
    return a + b;
};
//default parameter
let addThreeDefault = function (a, b, c = 2) {
    return a + b + c;
};
//Reset parameter
const resetFunc = (...num) => {
    return num.reduce((prev, cur) => prev + cur);
};
console.log(resetFunc(1, 2, 3, 4, 5, 6));
//Function
