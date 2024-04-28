const mongoose=require("mongoose");
const productSchema = new mongoose.Schema({
  
    productName: String,
    brandName: String,
    price: Number,
    ratings: Number,
    category:String,
    images: String
  });
module.exports=mongoose.model('Product', productSchema,'Product');