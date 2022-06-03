import axios from 'axios'
import { UseQueryResult, useQuery } from 'react-query'

interface User {
  id: string
  username: string
  age: number
}

export const getUser = (username: string): Promise<User> =>
  axios.get<User>(`${process.env.REACT_APP_API_URL}/api/user/${username}`).then((res) => res.data)

export const useUserQuery = (username: string): UseQueryResult<User, unknown> => {
  return useQuery(['getUser', username], () => getUser(username))
}
