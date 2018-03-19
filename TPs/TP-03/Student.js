class Student {

    constructor(id, lastname, firstname, grades) {
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.grades = grades;
    };

    static NULL = new Student(10, '', '', []);

}

export default Student;
