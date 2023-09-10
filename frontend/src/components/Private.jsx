import React, { useContext, useEffect } from "react"
import AuthContext from "../context/auth/authContext"
import { useNavigate } from "react-router-dom"

const Private = (props) => {
  const authContext = useContext(AuthContext)
  const { isAuthenticated } = authContext
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      console.log(isAuthenticated)
      navigate("/")
    }
  }, [isAuthenticated])
  return <>{props.component}</>
}

export default Private
