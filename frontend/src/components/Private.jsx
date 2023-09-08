import React, { useContext, useEffect } from "react"
import AuthContext from "../context/auth/authContext"
import { useNavigate } from "react-router-dom"

const Private = (props) => {
  const authContext = useContext(AuthContext)
  const { isAuthenticated } = authContext
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/")
    }
  }, [isAuthenticated])
  return <>{props.chilren}</>
}

export default Private
