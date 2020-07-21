let str1 = "JS Programming!"

console.log("Hello world!");
// window.alert("Heyya");
document.write("Lets do some JS");

console.log(str1);
console.info(str1);
console.warn(str1);
console.error(str1);

// Variables can be declared with 'var' or 'let'
let car = "Ford";
var someObj = { str: "Nearly der, nearly der...", id: 34232 }
console.info("The first car was a", car, ". The object is:", someObj);
console.log(someObj.str);

// Console logging can be grouped:
console.log("Level 1.");
console.group("First group.");
console.log("In the first group.");
console.log("Also in the first group.");

console.group("Second group.");
console.log("In the second group.");
console.warn("Still in the second group.");
console.groupEnd();

console.warn("Back in the first group");
console.groupEnd();
console.debug("Back to level 1/outer level.");