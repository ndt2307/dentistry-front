import Example from '../components/Example'
import Router from './router'

const DoctorRouters = {
  doctorLogin: {
    description: 'Example',
    notProtected: true,
    path: Router.example,
    exact: true,
    component: Example,
  },
}

export default DoctorRouters
