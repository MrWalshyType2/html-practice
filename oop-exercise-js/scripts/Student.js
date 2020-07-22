import Person from './Person.js'

class Student extends Person {
    constructor(name, gender, age, interests, bio, greeting) {
        super(name, gender, age, interests, bio, greeting);
    }

    getType() {
        return "I am a student.";
    }
}

export default Student;