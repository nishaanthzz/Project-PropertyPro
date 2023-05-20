const mongoose = require('mongoose');
const ForSaleSchema=new mongoose.Schema({

    name: String,
    phone: String,
    email : { type:String},
    type: { type:String,enum: ['Residential','Commmerical']},
    bhk: { type:Number},
    address: { type: String},
    locality: { type:String},
    city: { type: String},
    state: String, 
    pincode:{type:String},
    area: { type: Number},
    price: { type: Number},
    persqft: { type: Number},
    description: { type: String},
    postedDate: {type: Date},
    interests: {type: Number},
    imageUrl: { type: String},
});

ForSaleModel = mongoose.model('ForSaleSchema',ForSaleSchema,'ForSale');
module.exports= ForSaleModel