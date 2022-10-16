import { useEffect, useState } from 'react'
import axios from 'axios'
import StudentFilter from './StudentFilter'
import StudentsTable from './StudentsTable'
import StudentDetails from './StudentDetails'
import Student from './domain/Student'

const filterStudents = (students: ReadonlyArray<Student>, filter: string): ReadonlyArray<Student> => {
  // TODO: retourner une liste filrée des étudiants, plutot que la liste entière
  return students
}

const StudentsApp = () => {
  // TODO créer un state 'students' pour stocker la liste des étudiants
  // TODO créer un state 'filter' pour stocker le filtre (c'est une chaine de caractères)
  // TODO créer un state 'selectedStudent' pour stocker l'étudiant actuellement sélectionné (null par défaut)

  useEffect(() => {
    axios
      .get<ReadonlyArray<Student>>('students.json')
      .then(({ data }) => data.map(d => new Student(d.id, d.lastname, d.firstname, d.grades)))
      .then(fetchedStudents => {
        // TODO: mettre le résultat de la requete dans le state 'students'
      })
  }, [])

  const handleFilterChange = (newFilter: string) => {
    // TODO stocker la nouvelle valeur du filtre dans son state
  }

  const handleSelectStudent = (newSelectedStudent: Student) => {
    // TODO stocker le nouvel étudiant sélectionné dans son state
  }

  return (
    <>
      TODO: Décommenter les composants enfants au fur et à mesure : StudentsTable, StudentFilter puis StudentDetails
      {/*<StudentFilter onChange={handleFilterChange} />*/}
      {/*<StudentsTable students={students} onSelectStudent={handleSelectStudent} />*/}
      {/*<StudentDetails student={selectedStudent} />*/}
    </>
  )
}

export default StudentsApp
