// TODO: Remove Dummy user and Dummy Message

export type DummyUser = {
  username: string
  messages: DummyMessage[]
  sameUser: boolean
}

export type User = {
  id: number
  token: string
  username: string
  firstName: string
  lastName: string
  email: string
  password: string
}

export type DummyMessage = {
  body: string
  createdAt: Date
}

export type AppStateType = {
  user: User | null
  token:string
}
