import usersModel from "./users-model.js";

export const createUser = async (user) =>
    await usersModel.create(user)

export const findAllUsers = async () =>
    await usersModel.find()

export const findUserById = async (uid) =>
    await usersModel.findById(uid)

export const findByUsername = async (username) =>
    await usersModel.findOne({username})

export const findByCredentials = async ({username, password}) =>
    await usersModel.findOne(
        {username, password},
        {password: false})