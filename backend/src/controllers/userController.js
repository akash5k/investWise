import prisma from "../utils/prisma.js"
import { matchPassword, encrypt } from "../utils/auth.js"
import generateToken from "../utils/generateToken.js"

// auth user
const authUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })
    if (user && (await matchPassword(password, user.password))) {
      res.status(200).json({
        id: user.id,
        username: user.username,
        email: user.email,
        token: generateToken(user.id),
      })
    }
  } catch (err) {
    res.status(401)
    throw new Error("Invalid email or password")
  }
}

// register user
const registerUser = async (req, res, next) => {
  const { username, email, password } = req.body

  try {
    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (userExists) {
      res.status(400)
      next(new Error("User already exists"))
    }
    const encrptedPassword = await encrypt(password)

    const user = await prisma.user.create({
      data: { username, email, password: encrptedPassword },
    })

    if (user) {
      res.status(201).json({
        id: user.id,
        username: user.username,
        email: user.email,
        token: generateToken(user.id),
      })
    }
  } catch (err) {
    res.status(400)
    next(new Error("Invalid user data"))
  }
}

// Get user profile
const getUserProfile = async (req, res) => {}

export { authUser, registerUser, getUserProfile }
