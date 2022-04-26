import axios from 'axios'
import { User } from '../types'

export const URL = 'http://localhost:8181'

const api = axios.create({
  baseURL: URL,
})

export const signUpAPI = async (
  user:  {
    email: string
    password: string
    username: string
    firstName: string
  lastName: string
  }
): Promise<User> => {
  const response = await api.post('/auth/signup', user)
  return response.data
}

export const signInAPI = async ({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<User> => {
    const response = await api.post('/auth/login', { email, password })
    return response.data
  
}

export const meAPI = async (token: string): Promise<User> => {
  const response = await api.get('/auth/me', {
    headers: {
      Authorization: token,
    },
  })
  return response.data.user
}
