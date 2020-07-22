class Person {
  constructor(name, gender, age, interests, bio, greeting) {
    this._name = name;
    this._gender = gender;
    this._age = age;
    this._interests = interests;
    this._bio = bio;
    this._greeting = greeting;
  }

  setName(name) {
    this._name = name;
  }

  getName() {
    return this._name;
  }

  setGender(gender) {
    this._gender = gender;
  }

  getGender() {
    return this._gender;
  }

  setAge(age) {
    this._age = age;
  }

  getAge() {
    return this._age;
  }

  setInterests(interests) {
    this._interests = interests;
  }

  getInterests() {
    return this._interests;
  }

  setBio(bio) {
      this._bio = bio;
  }

  getBio() {
      return this._bio;
  }

  setGreeting(greeting) {
      this._greeting = greeting;
  }

  getGreeting() {
      return this._greeting;
  }

  getType() {
      return "I am a person.";
  }
}

export default Person;