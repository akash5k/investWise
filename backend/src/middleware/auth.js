import jwt from "jsonwebtoken"
import prisma from "../utils/prisma"

const protect = async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await prisma.user.findUnique({
        where: {
          id: decoded.id,
        },
        select: {
          id: true,
          email: true,
        },
      })

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
