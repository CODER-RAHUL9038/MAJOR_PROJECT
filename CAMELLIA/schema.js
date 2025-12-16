const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  //here listing is wrapper as served in form as listing[title] and etc..
  listing: Joi.object({
    title: Joi.string().trim().required(), // .required because title is required
    description: Joi.string().trim().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().min(0).required(),
    image: Joi.string().allow("", null),
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
