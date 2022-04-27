import jwt from 'jsonwebtoken'
import { getUserByEmail } from '../utils'

export const isAuthenticated = (req, res, next) => {
  try {
    const token = req.headers.authorization
    if (!token) {
      return res.status(401).json({
        message: 'No token provided',
      })
    }
    jwt.verify(token, process.env.HASHING_KEY, async (err, token) => {
      if (err) {
        return res.status(401).json({
          message: 'Invalid token',
        })
      }
      // check if token is expired
      if (token.exp < Date.now() / 1000) {
        return res.status(401).json({
          message: 'Token expired',
        })
      }

      const user = await getUserByEmail(token.email)
      if (!user) {
        return res.status(404).json({
          message: 'User not found',
        });
      }
      req.email = token.email
      next()
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
    })
  }
}