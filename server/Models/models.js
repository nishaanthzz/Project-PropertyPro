const mongoose = require('mongoose');
const nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});
const ForSaleSchema=new mongoose.Schema({
    

    name: nameSchema,
    phone: { type:String},
    email : { type:String},
    type: { type:String,enum: ['Residential','Commmerical']},
    bhk: { type:Number},
    address: { type: String},
    locality: { type:String},
    city: { type: String},
    state: { type: String}, 
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
module.exports= ForSaleModel;