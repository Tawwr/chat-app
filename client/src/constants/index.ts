export const BASE_URL = 'http://localhost:7171'

export const LOCAL_STORAGE_TOKEN_NAME = 'chat-auth-token'
export const localStorageToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME) || ''
