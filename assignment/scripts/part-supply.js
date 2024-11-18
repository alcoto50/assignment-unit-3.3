console.log('****** Part Supply *******');
// ***** REQUIRED FEATURES *********************************************
// For each question, be sure to use console.log statements to ensure that
// your code does what you expect!

// 1. Create a variable called 'partsNeeded' with a value of the number 40.
let partsNeeded = 40;
console.log('Parts needed: 40');


// 2. Create a variable called 'supplyChanges' whose value is an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11.
let supplyChangesArray= [3, 5, -6, 0, 7, 11];
console.log('Supply changes: 3,5,-6,0,7,11');


// 3. Create a variable called 'secondItem' and assign it the value of the second
//    item in the 'supplyChanges' array.
let secondItem = [1];
console.log('access the second value of supplyChangesArray:5');

// 4. The last value in the 'supplyChanges' array was added by mistake.
//    Remove it from the array and store it inside a new variable called 'removedItem'.
 removeItem = supplyChangesArray.push(5);
 let removedItem =11;
console.log('Remove the last value from supplyChangesArray: 11');

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
let supplyChanges = supplyChangesArray.push
console.log('Add the value 25 into supplyChangesArray: 25');


// 6. Create three new variables named 'positives', 'negatives', and
//    'zeroes' whose values are empty arrays. Then, write a for loop
//    that loops through the 'supplyChanges' array. For each iteration of
//    the loop:
//      - If the value is a positive number, push it into the 'positives' array.
//      - If the value is a negative number, push it into the 'negatives' array.
//      - If the value is a zero, push it into the 'zeroes' array.

let positives = [];
let negatives = [];
let zeroes = [];

for (let i = 0; i < supplyChangesArray.length; i++) {
  if (supplyChangesArray[i] > 0) {
    positives.push(supplyChangesArray[i]);
  } else if (supplyChangesArray[i] < 0) {
    negatives.push(supplyChangesArray[i]);
  } else {
    zeroes.push(supplyChangesArray[i]);
  }
}

console.log('Looping through supplyChanges to populate arrays with positive, negative, and zero values:', positives, negatives, zeroes);




// ***** STRETCH GOALS *********************************************
// 7. Rewrite the 'for' loop from #6 as a 'for...of' loop. Instead of 'positives',
let stretchPositives = [];
let stretchNegatives = [];
let stretchZeroes = [];

for (let value of supplyChangesArray) {
  if (value > 0) {
    stretchPositives.push(value);
  } else if (value < 0) {
    stretchNegatives.push(value);
  } else {
    stretchZeroes.push(value);
  }
}

console.log('Looping through supplyChanges to populate more arrays with positive, negative, and zero values:', stretchPositives, stretchNegatives, stretchZeroes);
//    'negatives', and 'zeroes', create three new arrays named 'stretchPositives',
for (let value of supplyChangesArray) {
  if (value > 0) {
    stretchPositives.push(value); 
  } else if (value < 0) {
    stretchNegatives.push(value);
  } else {
    stretchZeroes.push(value);
  }
}

console.log('Looping through supplyChanges to populate more arrays with positive, negative, and zero values:', stretchPositives, stretchNegatives, stretchZeroes);
  if (supplyChangesArray = 0) {
    strerchZeroes = supplyChangesArray.push();
  }
console.log('Looping through supplyChanges to populate more arrays with positive, negative, and zero values:');
for (let i = 0; i < supplyChangesArray.length; i++) {
  totalParts += supplyChangesArray[i];
}

// 8. Create a variable called 'totalParts' and assign it a value of 0.
//    Then, write a loop that adds each value of the 'supplyChanges'
//    array to the 'totalParts' variable.
let totalParts = 0;
for (let i = 0; i < supplyChanges.length; i++){
  totalParts += supplyChanges[1];
console.log('Looping through supplyChanges to calculate the sum:');
}

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. There are 572
//    parts in total, and each box holds 7 parts.
//    Create two variables:
//      1. 'parts': Set its value to 572
//      2. 'boxesFilled': This variable should be assigned the result of dividing 'parts' by 7.
let parts = 572;
let boxesFilled = Math.floor(parts / 7);
let leftoverParts = parts % 7;

console.log('Total parts:', parts);
console.log('Boxes filled:', boxesFilled);
console.log('Leftover parts:', leftoverParts);


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    partsNeeded: typeof partsNeeded !== 'undefined' ? partsNeeded : undefined,
    supplyChanges: typeof supplyChanges !== 'undefined' ? supplyChanges : undefined,
    secondItem: typeof secondItem !== 'undefined' ? secondItem : undefined,
    removedItem: typeof removedItem !== 'undefined' ? removedItem : undefined,
    positives: typeof positives !== 'undefined' ? positives : undefined,
    negatives: typeof negatives !== 'undefined' ? negatives : undefined,
    zeroes: typeof zeroes !== 'undefined' ? zeroes : undefined,
    stretchPositives: typeof stretchPositives !== 'undefined' ? stretchPositives : undefined,
    stretchNegatives: typeof stretchNegatives !== 'undefined' ? stretchNegatives : undefined,
    stretchZeroes: typeof stretchZeroes !== 'undefined' ? stretchZeroes : undefined,
    totalParts: typeof totalParts !== 'undefined' ? totalParts : undefined,
    parts: typeof parts !== 'undefined' ? parts : undefined,
    boxesFilled: typeof boxesFilled !== 'undefined' ? boxesFilled : undefined,
  }
} catch (e) {
  // Do nothing
}
