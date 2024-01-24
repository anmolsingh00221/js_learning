console.log("Scoping in html");


/*
//block scope
let age = 12;

if (age > 18) {
    let userMassage = "You can drive";
    console.log(userMassage);
}else{
    let userMassage = "use a Bicycle";
    console.log(userMassage);
}

// Notes 
console.log("In Block scopng : you can not access variable outside the {}.");
*/


/*//Global scope
let age = 12;
let userMassage;
if (age > 18) {
    userMassage = "You can drive";
} else {
    userMassage = "use a Bicycle";
}
console.log(userMassage);

// Notes 
console.log("In Global Scoping You can access varibable outside the code.");
*/

//Use of Let and Var
// 1. let 
// let age = 12;
// let userMassage;
// if (age > 18) {
//     let userMassage = "You can drive"; //this is redefine variable
//     console.log(userMassage);
// } else {
//     let userMassage = "use a Bicycle"; //this is redefine variable
//     console.log(userMassage);
// }
// console.log(userMassage);

// console.log("Using let : you can redefine same varibale because let follow scoping.");

// 2. var
let age = 12;
var userMassage;

if (age > 18) {
    var userMassage = "You can drive";
    console.log(userMassage);
} else {
    var userMassage = "use a Bicycle";
    console.log(userMassage);
}

console.log(userMassage);
console.log("Using var : you can not redefine same varibale because var does not follow scoping.");


