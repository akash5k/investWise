import fetcher from "../../utils/fetcher"
import AuthContext from "./authContext"

import { useState } from "react"

const AuthState = ({ children }) => {
  const User = JSON.parse(localStorage.getItem("userInfo")) || null
  const Token = User?.token || null
  const [auth, setAuth] = useState({
    user: User,
    isAuthenticated: Token ? true : false,
    loading: User ? false : true,
    error: null,
  })
  console.log(auth)
  // TODO
  const register = async (formData) => {
    // username email and password

    const data = await fetcher("/users/register", "POST", {}, formData)

    localStorage.setItem("userInfo", JSON.stringify(data.data))
    setAuth({
      ...auth,
      isAuthenticated: true,
      user: JSON.parse(localStorage.getItem("userInfo")),
      loading: false,
    })
  }

  // TODO
  const login = async (formData) => {
    // we get email and password

    const data = await fetcher("/users/login", "POST", {}, formData)
    if (data.error) {
      setAuth({ ...auth, error: data.error })
      return
    }
    localStorage.setItem("userInfo", JSON.stringify(data))
    setAuth({
      ...auth,
      isAuthenticated: true,
      user: JSON.parse(localStorage.getItem("userInfo")),
      loading: false,
    })
  }

  // TODO
  const loadUser = () => {
    const user = localStorage.getItem("userInfo") || {}
  }

  // TODO
  const logout = () => {
    localStorage.removeItem("userInfo")
    setAuth({ ...auth, isAuthenticated: false })
  }

  // TODO
  const clearErrors = () => {
    setAuth({ ...auth, error: null })
  }
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
