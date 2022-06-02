import { useQuery } from 'react-query'
import { IProp } from './type'

const Example = (props: IProp): JSX.Element => {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('http://localhost:3001/api/user/thanhnd').then((res) => res.json()),
  )

  if (isLoading) return <>Loading...</>

  if (error) return <>An error has occurred: {JSON.stringify(error)}</>

  return (
    <div>
      <h1 className='p-10'>{data.id}</h1>
      <p>{data.username}</p>
      <strong>👀 {data.age}</strong>
    </div>
  )
}

export default Example
