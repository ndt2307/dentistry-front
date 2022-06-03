import './App.css'
import './styles/customize.css'
import { Button } from 'antd'
import Example from './@dentistry/components/Example'
import Provider from './@dentistry/providers'

const App = (): JSX.Element => {
  return (
    <Provider>
      <Button className='but' type='primary'>
        Test
      </Button>
      <Example />
    </Provider>
  )
}

export default App
