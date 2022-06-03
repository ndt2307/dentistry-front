import { getUser } from '../../services/userService'
import { useQuery } from 'react-query'
import ErrorComponent from '../ErrorComponent'
import ProgressSpinner from '../ProgressSpinner'

const Example = (): JSX.Element => {
  const { isLoading, error, data } = useQuery(['getUser', 'thanhnd'], () => getUser('unauthorised'))

  if (isLoading) return <ProgressSpinner />
  if (error) return <ErrorComponent error={error} />

  return (
    <div>
      <h1 className='p-10'>{data.id}</h1>
      <p>{data.username}</p>
      <strong>👀 {data.age}</strong>
    </div>
  )
}

export default Example
