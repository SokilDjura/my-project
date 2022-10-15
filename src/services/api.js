import axios from 'axios'

const HTTP = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
export default HTTP