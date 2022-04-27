export type DummyUser = {
  username: string
  messages: DummyMessage[]
  sameUser: boolean
}

export type DummyMessage = {
  body: string
  createdAt: Date
}

export interface User extends UserRequest {
  id: string
  token: string
}

export interface UserRequest {
  username: string
  email: string
  firstName: string
  lastName: string
  password: string
}

export type LoginRequest = {
  email: string
  password: string
}

export type AppStateType = {
  token: string
  user: User | null
}
