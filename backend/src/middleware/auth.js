import jwt from "jsonwebtoken"

const protect = async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      const user = { id: decoded.id }
      req.user = user

      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      next(new Error("Not authorized, token failed"))
    }
  }
  if (!token) {
    res.status(401)
    next(new Error("Not Authorized, no token"))
  }
}

export { protect }
