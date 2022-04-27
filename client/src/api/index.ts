import axios from 'axios'
import { LoginRequest, User, UserRequest } from '../types'

// export const URL = 'http://localhost:8181'
export const URL = window.location.origin.toString()

const api = axios.create({
  baseURL: URL,
})

export const signUpAPI = async (user: UserRequest): Promise<User> => {
  const response = await api.post('/auth/signup', user)
  return response.data
}

export const signInAPI = async (user: LoginRequest): Promise<User> => {
  const response = await api.post('/auth/login', user)
  return response.data
}

export const meAPI = async (token: string): Promise<User> => {
  const response = await api.get('/auth/me', {
    headers: {
      Authorization: token,
    },
  })
  return response.data
}
