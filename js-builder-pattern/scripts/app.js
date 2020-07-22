import PersonBuilder from "./PersonBuilder.js";

((global) => {
  const p1 = new PersonBuilder()
    .setForename("Fred")
    .setSurname("Perry")
    .setAge(21)
    .build();

  const p2 = new PersonBuilder().setAge(30).build();
  console.log(p1);
  console.log(p2);
})(window);
