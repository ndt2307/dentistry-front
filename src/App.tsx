import './App.css'
import Provider from './@dentistry/providers'
import { useQuery } from 'react-query'
import Example from './@dentistry/components/Example'

function App() {
  return (
    <Provider>
      <Example />
    </Provider>
  )
}

export default App
