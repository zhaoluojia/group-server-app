import advertisementsModel from "./advertisements-model.js";

export const findAllAdvertisementsByOwnerID = (oid) => advertisementsModel.find({ownerID: oid}).sort({postedDate: "desc"});
export const findAllAdvertisements = () => advertisementsModel.find().sort({postedDate: "desc"});
export const findAdvertisementByID = (aid) => advertisementsModel.findById(aid).sort({postedDate: "desc"});
export const createAdvertisement = (ad) => advertisementsModel.create(ad);
export const deleteAdvertisementByID = (aid) => advertisementsModel.findByIdAndDelete(aid);
export const updateAdvertisementByID = (aid, content) => advertisementsModel.updateOne({_id: aid}, {$set: content});