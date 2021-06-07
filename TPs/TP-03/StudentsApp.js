import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StudentFilter from './StudentFilter'
import StudentsTable from './StudentsTable'
import StudentDetails from './StudentDetails'
import Student from './Student'

const filterStudents = (students, filter) => {
  // TODO: retourner une liste filrée des étudiants, plutot que la liste entière
  return students
}

const StudentsApp = () => {
  // TODO créer un state pour stocker la liste des étudiants
  // TODO créer un state pour stocker le filtre (c'est une chaine de caractères)
  // TODO créer un state pour stocker l'étudiant actuellement sélectionné (null par défaut)

  useEffect(() => {
    axios.get('students.json').then(({ data }) => {
      // TODO: mettre le résultat de la requete dans le state 'students'
    })
  }, [])

  const handleFilterChange = newFilter => {
    // TODO stocker la nouvelle valeur du filtre
  }

  const handleSelectStudent = newSelectedStudent => {
    // TODO stocker le nouvel étudiant sélectionné
  }

  return (
    <>
      TODO: Décommenter les composants enfants au fur et à mesure
      <StudentFilter onChange={handleFilterChange} />
      <StudentsTable students={filterStudents(students, filter)} onSelectStudent={handleSelectStudent} />
      <StudentDetails student={selectedStudent} />
    </>
  )
}

export default StudentsApp
