import bcrypt from 'bcrypt'

const encryptPassword = async (password: string, cost: number) => {
  const salt = await bcrypt.genSalt(cost)
  return await bcrypt.hash(password, salt)
}

const comparePassword = async (password: string, passwordToCompare: string) => {
  return await bcrypt.compare(password, passwordToCompare)
}

export { encryptPassword, comparePassword }
