import usersModel from "./users-model.js";

export const createUser = async (user) =>
    await usersModel.create(user)

export const findAllUsers = async () =>
    await usersModel.find().sort({dateJoined: "desc"});

export const findUserById = async (uid) =>
    await usersModel.findById(uid)

export const findByUsername = async (username) =>
    await usersModel.findOne({username})

export const findByCredentials = async ({username, password}) =>
    await usersModel.findOne(
        {username, password},
        {password: false})

export const updateCurrentUserProfileByUserName = async (uname, user) => {
  await usersModel.updateOne({username: uname},{$set: user})
}

export const updateUserFollowerCountByUserID = async (uid, newNumber) => {
  await usersModel.findOneAndUpdate({_id: uid}, {followersCount: newNumber})
}

export const updateUserFollowingCountByUserID = async (uid, newNumber) => {
  await usersModel.findOneAndUpdate({_id: uid}, {followingCount: newNumber})
}