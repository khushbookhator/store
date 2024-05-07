const mongoose = require("mongoose")



const productSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: false
    },
    image : {
        type: String,
        required: false
    },
    itemCode: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: false
    },
    purPrice: {
        type: Number,
        required: false
    },
    quality: {
        type: Number,
        required: false
    },
    selPrice: {
        type: Number,
        required: false
    }

})

const Product = mongoose.model("product", productSchema);

module.exports = Product