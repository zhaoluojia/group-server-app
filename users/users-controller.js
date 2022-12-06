import * as dao from './users-dao.js';

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
    const existingUser = await dao.findByCredentials(credentials)
    if (existingUser) {
      req.session['currentUser'] = existingUser
      res.json(existingUser)
      return
    }
    res.sendStatus(403)
  }

  const profile = (req, res) => {
    if (req.session['currentUser']) {
      res.send(req.session['currentUser'])
    } else {
      res.sendStatus(403)
    }
  }

  const logout = (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  }

  const updateCurrentUserProfileByUserName = async (req, res) => {
    const newProfile = req.body;
    const uname = req.params.uname;
    const status = await dao.updateCurrentUserProfileByUserName(uname, newProfile);
    res.send(status)
  }

  const increaseUserFollowerCountByUserID = async (req, res) => {
    const uid = req.params.uid;
    const user = await dao.findUserById(uid);
    const status = await dao.updateUserFollowerCountByUserID(uid, user.followersCount + 1);
    res.send(status)
  }

  const increaseUserFollowingCountByUserID = async (req, res) => {
    const uid = req.params.uid;
    const user = await dao.findUserById(uid);
    const status = await dao.updateUserFollowingCountByUserID(uid, user.followingCount + 1);
    res.send(status)
  }

  app.get('/api/users', findAllUsers)
  app.get('/api/users/:uid', findUserByID)

  app.post('/api/register', register)
  app.post('/api/login', login)
  app.post('/api/profile', profile)
  app.post('/api/logout', logout)

  app.put('/api/users/username/:uname', updateCurrentUserProfileByUserName)
  app.put('/api/users/followercount/:uid', increaseUserFollowerCountByUserID)
  app.put('/api/users/followingcount/:uid', increaseUserFollowingCountByUserID)

}

export default UsersController