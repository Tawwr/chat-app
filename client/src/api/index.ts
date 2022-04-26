import axios from 'axios'
import { LoginResponse, User } from '../types'

const URL = 'http://localhost:7070'

const api = axios.create({
  baseURL: URL,
})

export const signUpAPI = async (
  user: User
): Promise<User & { token: string }> => {
  const response = await api.post('/auth/signup', user)
  return response.data
}

export const signInAPI = async ({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<LoginResponse> => {
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
