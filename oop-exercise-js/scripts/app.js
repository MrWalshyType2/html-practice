import Person from './Person.js';
import Teacher from './Teacher.js';
import Student from './Student.js';

((global) => {
  let p1 = new Person(
    "Fred",
    "Male",
    30,
    "Ski, Football",
    "A person who is a person.",
    "Whacka do!"
  );
  let t1 = new Teacher(
      "Bob",
      "Female",
      27,
      "Programming",
      "A teacher who is a teacher.",
      "Salutations!"
  )
  let s1 = new Student(
    "Grognak",
    "Male",
    270,
    "Fighting",
    "A student who likes to fight.",
    "Grrrr!"
)
  console.log(p1.getType());
  console.log(t1.getType());
  console.log(s1.getType());
})(window);
