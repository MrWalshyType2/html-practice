import PersonBuilder from "./PersonBuilder.js";

((global) => {
  const p1 = new PersonBuilder()
    .setForename("Fred")
    .setSurname("Perry")
    .setAge(21)
    .build();
  console.log(p1);
})(window);
