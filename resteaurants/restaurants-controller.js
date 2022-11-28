import * as restaurantsDao from './restaurants-dao.js';

const findAllRestaurants = async (req, res) => {
  const restaurants = await restaurantsDao.findAllRestaurants();
  res.json(restaurants);
};

const findRestaurantByRestaurantID = async (req, res) => {
  const rid = req.params.rid;
  const restaurant = await restaurantsDao.findRestaurantByRestaurantID(rid);
  res.json(restaurant);
};

const findRestaurantsByOwnerID = async (req, res) => {
  const oid = req.params.oid;
  const restaurant = await restaurantsDao.findRestaurantsByOwnerID(oid);
  res.json(restaurant);
};

const disConnectOwnerAndRestaurant = async (req, res) => {
  const rid = req.params.rid;
  const ownerID = req.body;
  const status = await restaurantsDao.disConnectOwnerAndRestaurant(ownerID, rid);
  res.send(status);
}

export default (app) => {
  app.get('/api/restaurants/:rid', findRestaurantByRestaurantID);
  app.get('/api/restaurants', findAllRestaurants);
  app.get('/api/restaurants/owners/:oid', findRestaurantsByOwnerID);
  app.put('/api/restaurants/disconnect/:rid', disConnectOwnerAndRestaurant);
};