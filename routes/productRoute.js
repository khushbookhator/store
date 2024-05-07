const express = require('express')
const router = express.Router()

const {getAllProducts, postProduct, getIndividualProduct, deleteIndividualProduct } = require("../controller/productController")

//get all candidates frm db
router.get("/product", getAllProducts)

//get candidate of particular id
router.get("/product/:id", getIndividualProduct)

//get all earings
//outer.get("/all/:type", getIndividualCandidate)
router.post("/product", postProduct)

router.delete('/product/:id',deleteIndividualProduct )


module.exports = router