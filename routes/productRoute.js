const express = require('express')
const router = express.Router()

const {getAllProducts, postProduct, getIndividualProduct, deleteIndividualProduct,getSortedProducts } = require("../controller/productController")

//get all product frm db
router.get("/product", getAllProducts)

//get product of particular id
router.get("/product/:id", getIndividualProduct)

//get sorted products
router.get("/product/:category/:company", getSortedProducts)


//posting a new product
router.post("/product", postProduct)

//deleting and individual product
router.delete('/product/:id',deleteIndividualProduct )


module.exports = router