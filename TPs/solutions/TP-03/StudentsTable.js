import React from 'react';
import {Table} from 'react-bootstrap';

const StudentsTable = ({students, selectStudent}) => {
    const style = {
        margin: 'auto',
        marginTop: '20px',
        width: '80%'
    };
    return (
        <Table striped bordered condensed hover style={style}>
            <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
            </thead>
            <tbody>
            {
                students.map(student => (
                    <tr key={student.id} onClick={() => selectStudent(student)}>
                        <td>{student.id}</td>
                        <td>{student.firstname}</td>
                        <td>{student.lastname}</td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    )
};

export default StudentsTable;