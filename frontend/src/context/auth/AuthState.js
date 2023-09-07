import AuthContext from "./authContext"

import { useState } from "react"

const AuthState = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  })

  // TODO
  const register = () => {}

  // TODO
  const login = () => {}

  // TODO
  const loadUser = () => {}

  // TODO
  const logout = () => {}

  // TODO
  const clearErrors = () => {}
  return (
    <AuthContext.Provider
      value={{
        token: auth.token,
        isAuthenticated: auth.isAuthenticated,
        loading: auth.loading,
        user: auth.user,
        error: auth.error,
        register,
        login,
        loadUser,
        logout,
        clearErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthState
