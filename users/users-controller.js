import * as dao from './users-dao.js';
import {findByCredentials} from "./users-dao.js";

let currentUser = null

const UsersController = (app) => {
  const findUserByID = async (req, res) => {
    const uid = req.params.uid;
    const user = await dao.findUserById(uid);
    res.json(user)
  };

  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers()
    res.json(users)
  }

  const register = async (req, res) => {
    const user = req.body
    const existingUser = await dao.findByUsername(user.username)
    if (existingUser) {
      res.sendStatus(403)
      return
    }
    const currentUser = await dao.createUser(user)
    req.session['currentUser'] = currentUser
    res.json(currentUser)
  }

  const login = async (req, res) => {
    const credentials = req.body
    const existingUser = await findByCredentials(credentials.username, credentials.password)
    if (existingUser) {
      req.session['currentUser'] = existingUser
      res.json(existingUser)
      return
    }
    res.sendStatus(403)
  }

  const profile = async (req, res) => {
    if (currentUser) {
      res.json(currentUser)
      return
    }
    res.sendStatus(403)
  }

  const logout = (req, res) => {
    currentUser = null
    res.sendStatus(200)
  }

  app.get('/api/users', findAllUsers)
  app.get('/api/users/:uid', findUserByID)

  app.post('/api/register', register)
  app.post('/login', login)
  app.post('/profile', profile)
  app.post('/logout', logout)
}

export default UsersController