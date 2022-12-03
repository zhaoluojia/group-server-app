import mongoose from "mongoose";

const restaurantsSchema = mongoose.Schema({
  name: {type: String, required: true},
  image_url: {type: String},
  category: {type: String},
  url: {type: String},
  price: {type: String},
  display_phone: {type: String},
  owners: {type: [String], required: true}, // could have many owners, so use array here
  yelpID: {
    type: String, unique: true, required: true,
    validate: {
      validator: async function() {
        let item = await this.constructor.findOne({yelpID: this.yelpID})
        return Boolean(!item)
      }
    }

  },
}, {collection: 'restaurants', versionKey: false});

export default restaurantsSchema;