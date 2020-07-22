class Person {
    constructor(forename, surname, age) {
        this.forename = forename;
        this.surname = surname;
        this.age = age || 0;
    }

    toString() {
        return console.log(JSON.stringify(this));
    }
}

export default Person;