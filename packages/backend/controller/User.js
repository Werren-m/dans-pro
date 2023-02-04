const { User } = require('../models')
const { decryptPwd } = require('../helpers/bcrypt') 
const { tokenGenerator } = require('../helpers/jwt')

class UserController {
  static async register(req, res, next) {
    try {
      const { email, username, password, firstName, lastName } = req.body
      const found = await User.findOne({ where: { username } })
      if (found) {
        next({ message: 'Username is already registered' })
      }

      const user = await User.create({
        email,
        username,
        password,
        firstName,
        lastName,
      })

      if (user) {
        const token = tokenGenerator(user)
        res.status(200).json(token)
      } else {
        next({ message: 'There is somethiong wrong with the input' })
      }

    } catch (err) {
      next(err)
    }
  }

  static async login(req,res,next){
    const { username, password } = req.body

    try{
      const found = await User.findOne({ where: { username } })

      if (found) {
        if (decryptPwd(password, found.password)){
          const token = tokenGenerator(found)
          res.status(200).json({ token })
        } else {
          next({message: `invalid password`})
        }                                
      } else {
        next({message: "Username not found"})
      }
    } catch(err){
        next(err)
    }     
  }
}

module.exports = UserController