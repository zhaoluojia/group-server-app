import * as advertisementDao from './advertisements-dao.js';

const findAllAdvertisementsByOwnerID = async (req, res) => {
  const oid = req.params.oid;
  const ads = await advertisementDao.findAllAdvertisementsByOwnerID(oid);
  res.json(ads);
};

const deleteAdvertisementByID = async (req, res) => {
  const aid = req.params.aid;
  const status = await advertisementDao.deleteAdvertisementByID(aid);
  res.send(status);
};

const updateAdvertisementByID = async (req, res) => {
  const aid = req.params.aid;
  const newAds = req.body;
  const status = await advertisementDao.updateAdvertisementByID(aid, newAds);
  res.send(status);
};

const findAllAdvertisements = async (req, res) => {
  const ads = await advertisementDao.findAllAdvertisements();
  res.json(ads);
};

const findAdvertisementByID = async (req, res) => {
  const aid = req.params.aid;
  const ads = await advertisementDao.findAdvertisementByID(aid);
  res.json(ads);
};

const createAdvertisement = async (req, res) => {
  const newAd = req.body;
  newAd.postedDate = new Date();
  const insertedAd = await advertisementDao.createAdvertisement(newAd);
  res.json(insertedAd);
};

export default (app) => {
  app.get('/api/advertisements', findAllAdvertisements);
  app.get('/api/advertisements/owners/:oid', findAllAdvertisementsByOwnerID);
  app.get('/api/advertisements/:aid', findAdvertisementByID);
  app.post('/api/advertisements', createAdvertisement);
  app.put('/api/advertisements/:aid', updateAdvertisementByID);
  app.delete('/api/advertisements/:aid', deleteAdvertisementByID);
}