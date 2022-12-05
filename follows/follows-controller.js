import * as followsDao from './follows-dao.js';

const findFollowsByFollowerID = async (req, res) => {
  const fid = req.params.fid;
  const follows = await followsDao.findFollowsByFollowerID(fid);
  res.json(follows);
};

const findFollowsByLeaderID = async (req, res) => {
  const lid = req.params.lid;
  const follows = await followsDao.findFollowsByLeaderID(lid);
  res.json(follows);
};

const createFollow = async (req, res) => {
  const followInfo = req.body
  const newFollow = await followsDao.createFollow(followInfo)
  res.json(newFollow)
}

export default (app) => {
  app.get('/api/follows/followers/:fid', findFollowsByFollowerID);
  app.get('/api/follows/leaders/:lid', findFollowsByLeaderID);
  app.post('/api/home', createFollow)
};