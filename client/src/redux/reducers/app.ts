import { createSlice } from '@reduxjs/toolkit'
import { localStorageToken } from '../../constants'
import { AppStateType, AuthUser } from '../../types'

const initialState: AppStateType = {
  user: null,
  token: localStorageToken(),
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setToken(state, { payload }: { payload: string }) {
      state.token = payload
    },
    setUser: (state, { payload }: { payload: AuthUser }) => {
      state.user = payload
    },
    signOut: (state) => {
      state.user = null
      state.token = ''
    },
  },
})

export const { setUser, signOut, setToken } = appSlice.actions

export default appSlice.reducer
