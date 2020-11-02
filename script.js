// * 1. convert the function below to a curried function
// * 20 points
function saleTime(item, price, discount){
    let finalPrice = (price*discount).toFixed(2);
    return `I purchased an ${item} for $${finalPrice}`;
}
console.log(saleTime("sweater",10.99,.5));

let animaltype = "mongoose";
let animalName = "Sam";

// * 2. Convert the code below to a pure function
// * 10 points
function anAnimalFriend(){
    console.log(`I know a ${animaltype} named ${animalName}`);
}
anAnimalFriend();

// * 3. Write a pure function returns an array of 6 numbers between 1 and 49
// * 30 points

/** 
 * * 4. Tricky question: Build a function that discounts items.  Use currying to turn it into 
 * * 3 different functions for discounting by different amounts.
 * * 40 points
 */ 