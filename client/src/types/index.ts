export type User = {
  username: string
  messages: Message[]
  sameUser: boolean
}

export type Message = {
  body: string
    createdAt: Date
}

export type LoginResponse = {
  accessToken: string
  error?: string
}

export type AppStateType = {
  user: User | null
  token: string
}
