import Person from './Person.js'

class Teacher extends Person {
    constructor(name, gender, age, interests, bio, greeting) {
        super(name, gender, age, interests, bio, greeting);
    }

    getType() {
        return "I am a teacher.";
    }
}

export default Teacher;