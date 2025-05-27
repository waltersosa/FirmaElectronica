import { createContext } from 'react'

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  toggleRegister: () => {},
})

export default AuthContext