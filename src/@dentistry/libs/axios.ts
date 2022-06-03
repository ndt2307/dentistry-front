import axios from 'axios'

const AUTH_TOKEN = localStorage.getItem('token')

axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.common['Authorization'] = `bearer ${AUTH_TOKEN}`

export default axios
