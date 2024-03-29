import { useParams } from 'react-router-dom'

const UserDetails = () => {
  const { name } = useParams()

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