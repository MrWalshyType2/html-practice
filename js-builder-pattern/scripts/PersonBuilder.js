import Person from './Person.js';

class PersonBuilder {
    constructor() {

    }

    setForename(forename) {
        this.forename = forename;
        return this;
    }

    setSurname(surname) {
        this.surname = surname;
        return this;
    }

    setAge(age) {
        this.age = age || 0;
        return this;
    }

    build() {
        return new Person(this.forename, this.surname, this.age);
    }
}

export default PersonBuilder;