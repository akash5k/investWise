import bcrypt from "bcryptjs"

const matchPassword = async (enteredPassword, password) => {
  return await bcrypt.compare(enteredPassword, password)
}

const encrypt = async (password) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

export { matchPassword, encrypt }
