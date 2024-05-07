require("dotenv").config()

const mongo_uri = process.env.MONGO_URI
console.log(mongo_uri)


const mongoose = require("mongoose")
const connectDB = async () => {
    try{
        await mongoose.connect(mongo_uri, {
            useNewUrlParser: true,            
            useUnifiedTopology: true
        });
        console.log("MongoDB Connection Successfull")
    } catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB