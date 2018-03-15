class Student {
    static NULL;

    constructor(id, lastname, firstname, grades) {
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.grades = grades;
        if (Student.NULL !== undefined) {
            Student.NULL = null;
            Student.NULL = new Student(0, '', '', []);
        }
    };
}

export default Student;