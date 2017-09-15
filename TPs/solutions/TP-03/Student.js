class Student {
    static NULL = new Student(0, '', '', []);

    constructor(id, lastname, firstname, grades) {
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.grades = grades;
    };

}

export default Student;