// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken'
import 'dotenv/config'
const secret = process.env.JSON_SECRET
const expiration = '2h'

// verify user thru token
export function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.status(401).json('unauthenticated')

  // if token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
  try {
    // verify user token
    const { data } = jwt.verify(token, secret)
    req.user = data
    next()
  } catch {
    res.status(403).json('invalid token')
  }
}

export function verifyUser(req, res, next) {
  this.verifyToken(req, res, () => {
    // compare current user id and user id from request
    if (req.user._id === !req.params.id)
      return res.status(403).json('unauthorised action')

    next()
  })
}

export function verifyAdmin(req, res, next) {
  this.verifyToken(req, res, () => {
    // check if user is admin
    if (!req.user.isAdmin) return res.status(403).json('unauthorised action')

    next()
  })
}

export function signToken(userData) {
  const payload = userData
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration })
}
