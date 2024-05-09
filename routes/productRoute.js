const express = require('express')
const router = express.Router()
const Product = require("../models/products");


const {getAllProducts, getIndividualProduct, deleteIndividualProduct,getSortedProducts } = require("../controller/productController")
const upload = require('../utils/img')

//get all product frm db
router.get("/product", getAllProducts)

//get product of particular id
router.get("/product/:id", getIndividualProduct)

//get sorted products
router.get("/product/:category/:company", getSortedProducts)


//posting a new product
router.post("/product", upload.single("image"), async(req, res) => {
    
    let image = req.file.filename
    const {category, company, itemName, itemCode, description, purPrice, quality, selPrice} = req.body
    try{
        const newProduct = new Product({
            category,
            company,
            itemName,
            image, itemCode,
            description,
            purPrice,
            quality, selPrice
        })
        await newProduct.save()
        console.log(newProduct)
        if (newProduct) {
            res.status(201).json({ message: 'Product added successfully' });
        } else {
            res.status(500).json({ error: 'Failed to add new Product' });
        }
    }
    catch (error){
    console.log(error);
    res.status(404).json({ error: 'Sorry! something went wrong' });
    }
})

//deleting and individual product
router.delete('/product/:id',deleteIndividualProduct )


module.exports = router