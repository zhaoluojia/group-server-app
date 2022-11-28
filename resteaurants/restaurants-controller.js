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

const findRestaurantsByRestaurantName = async (req, res) => {
  const rName = req.params.name;
  const restaurant = await restaurantsDao.findRestaurantsByRestaurantName(rName);
  res.json(restaurant);
}

const findRestaurantsByCategory = async (req, res) => {
  const c = req.params.c;
  const restaurant = await restaurantsDao.findRestaurantsByCategory(c);
  res.json(restaurant);
}

export default (app) => {
  app.get('/api/restaurants/category/:c', findRestaurantsByCategory);
  app.get('/api/restaurants/name/:rName', findRestaurantsByRestaurantName);
  app.get('/api/restaurants/:rid', findRestaurantByRestaurantID);
  app.get('/api/restaurants', findAllRestaurants);
  app.get('/api/restaurants/owners/:oid', findRestaurantsByOwnerID);
  app.put('/api/restaurants/disconnect/:rid', disConnectOwnerAndRestaurant);
};