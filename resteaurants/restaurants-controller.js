import * as restaurantsDao from './restaurants-dao.js';
import yelp from 'yelp-fusion';

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

// Yelp related search are below
const apiKey = 'xFy8A_Q4TV1AU_eFIvAp2M36xLFgIRTvwQgi2HZE2wF9iZxV1548dIgZ2IER6HqqJptx8iqbQuhcU7xvxFGew7fMMMbY8J3WqMEK79sAvxQgc-bU-EZiKvAQTRZ4Y3Yx';
const client = yelp.client(apiKey);
const findRestaurantsByRequestUsingYF = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  const searchRequest = {
    term: req.params.rname,
    location: req.params.rlocation
  }
  client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody;
    res.json(firstResult);
  }).catch(e => {
    res.json(e);
  });
}

const findRestaurantsByRequestIDUsingYF = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  const yelpID = req.params.yid;
  client.business(yelpID).then(response => {
    const firstResult = response.jsonBody;
    res.json(firstResult);
  }).catch(e => {
    res.json(e);
  });
}

export default (app) => {
  app.get('/api/restaurants/category/:c', findRestaurantsByCategory);
  app.get('/api/restaurants/name/:rName', findRestaurantsByRestaurantName);
  app.get('/api/restaurants/:rid', findRestaurantByRestaurantID);
  app.get('/api/restaurants', findAllRestaurants);
  app.get('/api/restaurants/search/yelpid/:yid', findRestaurantsByRequestIDUsingYF) // YelpFusionAPI
  app.get('/api/restaurants/search/:rname/:rlocation', findRestaurantsByRequestUsingYF); // YelpFusionAPI
  app.get('/api/restaurants/owners/:oid', findRestaurantsByOwnerID);
  app.put('/api/restaurants/disconnect/:rid', disConnectOwnerAndRestaurant);
};