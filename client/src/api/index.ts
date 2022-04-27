import axios from 'axios'
import { BASE_URL, localStorageToken } from '../constants'
import {
  AuthUser, Conversation,
  LoginRequest, User, UserRequest
} from '../types'

const api = axios.create({
  baseURL: BASE_URL,
})

api.defaults.headers.common['Authorization'] = localStorageToken

// AUTH

export const signUpAPI = async (user: UserRequest): Promise<AuthUser> => {
  const response = await api.post('/auth/signup', user)
  return response.data
}

export const signInAPI = async (user: LoginRequest): Promise<AuthUser> => {
  const response = await api.post('/auth/login', user)
  return response.data
}

export const meAPI = async (): Promise<AuthUser> => {
  const response = await api.get('/auth/me')
  return response.data
}

// User
export const usersAPI = async (): Promise<User[]> => {
  const response = await api.get('/user/users')
  return response.data
}

export const userConversationsAPI = async (): Promise<Conversation[]> => {
  const response = await api.get('/user/users')
  return response.data
}

// Conversation

export const createConversationAPI = async (conversation: {
  userIds: string[]
  name?: string
}): Promise<Conversation> => {
  const response = await api.post('/conversation', conversation)
  return response.data
}

export const getConversationByIdAPI = async (
  id: string
): Promise<Conversation> => {
  const response = await api.get(`/${id}`)
  return response.data
}

export const sendMessageAPI = async ({
  conversation,
  body,
}: {
  conversation: Conversation
  body: string
}): Promise<Conversation> => {
  const response = await api.post(`/${conversation.id}`, { body })
  return response.data
}
