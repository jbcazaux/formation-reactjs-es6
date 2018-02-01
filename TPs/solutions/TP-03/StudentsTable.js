import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from 'material-ui';

const StudentsTable = ({students, selectStudent}) => {
    const style = {
        margin: 'auto',
        marginTop: '20px',
        width: '80%'
    };
    return (
        <Table style={style}>
            <TableHead>
            <TableRow>
                <TableCell>#</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {
                students.map(student => (
                    <TableRow key={student.id} onClick={() => selectStudent(student)}>
                        <TableCell>{student.id}</TableCell>
                        <TableCell>{student.firstname}</TableCell>
                        <TableCell>{student.lastname}</TableCell>
                    </TableRow>
                ))
            }
            </TableBody>
        </Table>
    )
};

export default StudentsTable;