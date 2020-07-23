(() => {
  // HFOs take a function as an arg, or return a function

  // First order function (does not take a function arg or return a function)
  // const censor = words => {
  //     const filtered = [];

  //     for (let i = 0; i < words.length; i++) {
  //         const word = words[i];
  //         if (word.length !== 4) filtered.push(word);
  //     }
  //     return filtered;
  // }

  // HFO
  const reduce = (reducer, initial, arr) => {
    // reducer param is a function
    let acc = initial;

    for (let i = 0; i < arr.length; i++) {
      acc = reducer(acc, arr[i]);
    }
    return acc;
  };

  // The fn function here is a 'predicate', a func returing a boolean
  const filter = (fn, arr) =>
    reduce((acc, curr) => (fn(curr) ? acc.concat([curr]) : acc), [], arr);
  const censor = (words) => filter((word) => word.length !== 4, words);
  const startsWithS = (words) => filter((word) => word.startsWith("s"), words);

  console.log(censor(["Zonk", "Army", "Shout", "Sun"]));

  // Exercise
  let grades = [
    { name: "John", grade: 8, sex: "M" },
    { name: "Sarah", grade: 12, sex: "F" },
    { name: "Bob", grade: 16, sex: "M" },
    { name: "Johnny", grade: 2, sex: "M" },
    { name: "Cyrus", grade: 4, sex: "M" },
    { name: "Paula", grade: 18, sex: "F" },
    { name: "Jeff", grade: 5, sex: "M" },
    { name: "Jennifer", grade: 13, sex: "F" },
    { name: "Courtney", grade: 15, sex: "F" },
    { name: "Jane", grade: 9, sex: "F" },
  ];

  let isBoy = (student) => student.sex === "M";
  let isGirl = (student) => student.sex === "F";

  let getBoys = (grades) => grades.filter(isBoy);
  let getGirls = (grades) => grades.filter(isGirl);

  let average = (grades) =>
    grades.reduce((acc, curr) => {
      acc + curr.grade;
    }, 0) / grades.length;

  let maxGrade = (grades) =>
    Math.max(...grades.map((student) => student.grade));
  let minGrade = (grades) =>
    Math.min(...grades.map((student) => student.grade));

  let classRoomAverage = average(grades);
  let boysAverage = average(getBoys(grades));
  let girlsAverage = average(getGirls(grades));

  let highestGrade = maxGrade(grades);
  let lowestGrade = minGrade(grades);
  let highestGradeOfBoys = maxGrade(getBoys(grades));
  let highestGradeOfGirls = maxGrade(getGirls(grades));
  let lowestGradeOfBoys = minGrade(getBoys(grades));
  let lowestGradeOfGirls = minGrade(getGirls(grades));
})(window);
