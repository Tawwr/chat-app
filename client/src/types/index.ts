export type DummyUser = {
  username: string
  messages: DummyMessage[]
  sameUser: boolean
}

export type DummyMessage = {
  body: string
  createdAt: Date
}

// API TYPES
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

// ENTITY TYPES
interface BaseEntity {
  id: number
  createdAt: Date
  updatedAt: Date
}

export interface Message extends BaseEntity {
  body: string;
  string: User;
  conversation: Conversation
}

export interface Conversation extends BaseEntity {
  name: string;
  users: User[];
  messages: Message[]
}
export interface AuthUser extends BaseEntity , UserRequest {
  token: string
}

export interface User extends BaseEntity , UserRequest {
  messages: Message[]
  conversations: Conversation[]
}


// STATE TYPES
export type AppStateType = {
  token: string
  user: AuthUser | null
}
