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

const findFollowByIDs = async (req, res) => {
  const fid = req.params.fid;
  const lid = req.params.lid;
  const follow = await followsDao.findFollowByIDs(fid, lid);
  res.json(follow);
}

export default (app) => {
  app.get('/api/follows/followers/:fid', findFollowsByFollowerID);
  app.get('/api/follows/leaders/:lid', findFollowsByLeaderID);
  app.get('/api/follows/follower/:fid/leader/:lid', findFollowByIDs);
  app.post('/api/follows', createFollow)
};