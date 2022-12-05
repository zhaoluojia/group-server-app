import followsModel from "./follows-model.js";

export const findFollowsByFollowerID = (followerID) => followsModel.find({followerID: followerID}).sort({time: "desc"});
export const findFollowsByLeaderID = (leaderID) => followsModel.find({leaderID: leaderID}).sort({time: "desc"});
export const createFollow = async (followInfo) => await followsModel.create(followInfo)
