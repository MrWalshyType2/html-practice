// let - block-scoped variable
// const - block-scoped, must be initialised at declaration and unchangeable
// var - function-scoped whose declaration is hoisted

// Rules for names
// START WITH: a-z, _ or $
// CAN INCLUDE DIGITS
// CASE-SENSITIVE
// CANNOT USE RESERVED WORDS/KEYWORDS
// camelCase FOR NAMING

// DATA TYPES
// PRIMITIVE
//  - BOOLEAN (false = 0, true = 1)
//  - NUMBER
//      - Number.NaN or NaN = Not a number
//      - Number.Infinity   = Greatest possible value (but no numeric value)
//      - Number.POSITIVE_INFINITY = Positive infinity
//      - Number.NEGATIVE_INFINITY = Negative infinity
//      - Number.MAX_VALUE/MIN_VALUE = Largest/smallest num in 64-bits
//  - BIGINT
//  - STRING
//  - UNDEFINED
//  - NULL
//  - SYMBOL
// NOT-PRIMITIVE
//  - OBJECT

// PRIMITIVES:
//  - ARE IMMUTABLE
//  - VALUE IS STORED IN THE LOCATION THE VARIABLE ACCESSES
//  - FIXED LENGTH
//  - QUICK TO LOOK UP

// OBJECTS:
//  - COLLECTIONS OF PROPERTIES
//  - VALUE STORED IS A REFERENCE OT THE OBJECT IN MEMORY
//  - ARE MUTABLE

// UNDEFINED:
//  - NEVER BEEN INITIALISED
let age;
console.log(typeof(age)); // undefined

// NULL
//  - EXPLICIT KEYWORD TELLING THE RUNTIME IS IS 'EMPTY'
age = null;
console.log(age); // null

age = 21;
console.log(`My age is ${age}`);

var foo = 1;
function bar() {
    if (!foo) {
        var foo = 10;
    }
    alert(foo);
}
bar(); // 10

var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}

b();
alert(a);