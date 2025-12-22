const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  //here listing is wrapper as served in form as listing[title] and etc..
  listing: Joi.object({
    title: Joi.string().trim().required().max(40), // .required because title is required
    description: Joi.string().trim().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().min(0).required(),
    image: Joi.string().allow("", null),
    category: Joi.string()
      .lowercase()
      .valid(
        "trending",
        "rooms",
        "city",
        "mountain",
        "castle",
        "pool",
        "camping",
        "farm",
        "arctic",
        "forest",
        "beach",
        "heritage"
      )
      .required(),
  })
    .required()
    .unknown(false),
});
// The last .required() means:listing must be present
module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    comment: Joi.string().required(),
    rating: Joi.number().min(1).max(5).required(),
  })
    .required()
    .unknown(false),
});
