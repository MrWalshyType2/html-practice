let darthVader = {
    allegiance: "Empire",
    weapon: "Lightsabre",
    sith: true
}

console.log(darthVader);

console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a Sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${!darthVader.sith}`);

myArray = ["hello", "everyone"];
console.log(myArray.length);
myArray.push(",", "how", "do");
console.log(myArray.length);
myArray.shift();

for (val of myArray) {
    console.log(val);
}