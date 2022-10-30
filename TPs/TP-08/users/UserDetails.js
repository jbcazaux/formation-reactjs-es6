import { useParams } from 'react-router-dom'
import React from 'react'

const UserDetails = () => {
  const name = 'name' // TODO: Récupérer le nom
  return (
    <div>
      <h3>
        Details of <b>{name}</b>
      </h3>
      <img src={'/' + name + '.jpeg'} alt={name} />
    </div>
  )
}

export default UserDetails
