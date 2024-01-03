import { Router, Request, Response } from 'express'
import { verifyAdmin, verifyUser } from '../../utils/auth'
import { User } from '../../models'

const router = Router()
// get all users, api/users/
router.get('/:number', verifyAdmin, async (req: Request, res: Response) => {
  try {
    const params: number = parseInt(req.params.number)
    const userData = params
      ? // show numbers of users equal to params value
        await User.find().limit(params)
      : //  show all users
        await User.find()
    res.status(200).json(userData)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

// get one user, api/users/id/:id
router.get('/id/:id', verifyAdmin, async (req, res) => {
  try {
    const userData = await User.findById(req.params.id).select('-password')
    if (!userData) {
      return res.status(404).json({ message: 'No user with that ID' })
    } else res.status(200).json(userData)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

// delete user, api/users/:id
router.delete('/:id', verifyAdmin, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndRemove(req.params.id)
    if (!deletedUser) {
      return res.status(404).json({ message: 'No user with that ID' })
    } else res.status(200).json(deletedUser)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

// update user infor, api/users/:id
router.put('/:id', verifyUser, async (req, res) => {
  try {
    const userData = await User.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { runValidators: true, new: true }
    )
    if (!userData) {
      res.status(404).json({ message: 'No user with that ID' })
    } else res.status(200).json(userData)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router
