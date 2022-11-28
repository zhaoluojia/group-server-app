import restaurantsModel from "./restaurants-model.js";

export const findAllRestaurants = () => restaurantsModel.find();
export const findRestaurantByRestaurantID = (rid) => restaurantsModel.findById(rid);
export const findRestaurantsByOwnerID = (oid) => restaurantsModel.find({owners: {$in: [oid, "$owners"]}});
export const disConnectOwnerAndRestaurant = (ownerList, rid) => restaurantsModel.updateOne({_id: rid}, {$set: {owners: ownerList}});