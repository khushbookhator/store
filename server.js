require("dotenv").config()
var cors = require('cors')


const express = require("express")

const connectDB = require("./config/db")
const productRoute = require("./routes/productRoute")

connectDB()

const app = express()
app.use(express.static('public'))

app.use(express.json());
app.use(cors())

app.use("/api", productRoute)



const port = process.env.PORT || 1107

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})