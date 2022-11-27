import followsModel from "./follows-model.js";

export const findFollowsByFollowerID = (followerID) => followsModel.find({followerID: followerID}).sort({time: "desc"});
export const findFollowsByLeaderID = (leaderID) => followsModel.find({leaderID: leaderID}).sort({time: "desc"});
// export const findFriendsByProfileID = (profileID) => {
  // const followersFollow = findFollowsByLeaderID(profileID); // people who follow this person
  // const followersID = followersFollow.map(follow => follow.followerID);
  // const leadersFollow = findFollowsByFollowerID(profileID); // people who are followed by this person
  // const leadersID = leadersFollow.map(follow => follow.leaderID);
  // // within the followers array, find whose followerID is within this person's leadersID
  // return followersID.filter(id => leadersID.contains(id)); // only ids of the friends
  // let output = [];
  // const followersID = followsModel.find({leaderID: profileID}, {followerID: 1});
  // const leadersID = followsModel.find({followerID: profileID}, {leaderID: 1});
  // // within the followers array, find whose followerID is within this person's leadersID
  // return followersID.filter(id => leadersID.contains(id)); // only ids of the friends
// }