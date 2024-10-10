const mongoose=require('mongoose')
const {Schema}=mongoose

const productSchema = new Schema({
    title: {type:String,required:true},
    description: String,
    price: {type:Number,required:true},
    discountPercentage: {type:Number,min:[1,'wroung min rating']},
    rating: {type:Number,min:[0,'wong min rating'],max:[6,'wroung max rating']},
    brand: {type:String},
    category: {type:String,required:true},
    images: [String],
    thumbnail: String
  });

exports.Product = mongoose.model('Product', productSchema);

