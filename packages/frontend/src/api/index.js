import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 20000,
})

export const setToken = () => {
  api.defaults.headers.token = localStorage.getItem('token') 
}

export const login = (request) => api.post('/login', request)
export const signup = (request) => api.post('/register', request)
export const getJobList = (request) => api.get('/joblist', request)
export const getJobDetail = (id) => api.get(`/jobDetail/${id}`)