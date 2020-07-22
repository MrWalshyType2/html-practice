((global) => {
  let myArray = [1, 2, 3, 4, 5];
  // myArray is 'destructured' into a, b, c, d, and e
  let [a, b, c, d, e] = myArray;
  console.log(a); // 1
  console.log(e); // 5

  // Spread operator
  myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let [x, y, ...rest] = myArray;
  console.log(x, y);
  console.log(rest);

  // Values can be skipped with a comma
  let [r, s, , ...rest2] = myArray;
  console.log(r, s);
  console.log(rest2);

  // Object destructuring
  const p1 = {
    first: "Bob",
    last: "Freddy",
    country: "UK",
  };
  let { first, last } = p1;
  console.log(`My name is ${first} ${last}`);

  // Default values can also be assigned to a variable as opposed
  // to showing undefined
  let { f, l, gender = "Male" } = p1;
  console.log(`My name is ${first} ${last} and I am a ${gender}`);

  // Default values for Arrays
  const rgb = [200, 220];
  let [red = 255, green, blue = 255] = rgb;
  console.log(`R: ${red}, G: ${green}, B: ${blue}`);

  // Nested object destructuring
  const student = {
    name: "John Doe",
    age: 16,
    scores: { maths: 74, english: 63 },
  };
  let {
    name,
    scores: { maths, science = 50 },
  } = student;
  console.log(`${name} scored ${maths} in Maths and ${science} in Science.`);

  // Nested array destructuring
  const color = ["#FF00FF", [255, 0, 255], "rgb(255, 0, 255)"];
  const [hex, [re, gr, bl]] = color;
  console.log(hex, re, gr, bl);

  // Swapping values traditional
  //   let width = 300;
  //   let height = 400;
  //   const landscape = true;

  //   console.log(`${width} x ${height}`);
  //   //output:300 x 400

  //   if (landscape) {
  //     // An extra variable is needed to copy initial width to
  //     let initialWidth = width;
  //     // Swap the variables
  //     width = height;
  //     // height is assigned the copied width value
  //     height = initialWidth;
  //     console.log(`${width} x ${height}`);
  //     //output 400 x 300
  //   }

  // Swapping values short
  let width = 300;
  let height = 400;
  const landscape = true;

  console.log(`${width} x ${height}`);
  //output :300 x 400
  if (landscape) {
    // Swap the variables
    [width, height] = [height, width];
    console.log(`${width} x ${height}`);
    //output: 400 x 300

    // Using different variable names
    const pers = {
      name: "Isaac Newton",
      country: "UK",
    };
    // Assign default value of 25 to years if age key is undefined
    const { name: fullname, country: place, age: years = 25 } = person;

    // Here I am using ES6 template literals
    console.log(`I am ${fullname} from ${place} and I am ${years} years old.`);
    //output: I am Isaac Mewton from UK and I am 25 years old.'
  }
})(window);
