import { configureStore } from '@reduxjs/toolkit'
import appReducer from './reducers/app'
import conversationSlice from './reducers/conversation'
const store = configureStore({
  reducer: {
    app: appReducer,
    conversation: conversationSlice
  },
})

export type RootState = ReturnType<typeof store.getState>

export { store }