const Product = require("../models/products");
const upload = require("../utils/img");

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}).lean().exec()
        res.status(200).json(products)
    }
    catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"})
    }
}

// const postProduct = async  (req, res) => {
//     const {} = req.body
//     try{
//         const newProduct = new Product(req.body)
//         await newProduct.save()
//         if (newProduct) {
//             res.status(201).json({ message: 'Product added successfully' });
//         } else {
//             res.status(500).json({ error: 'Failed to add new Product' });
//         }
//     }
//     catch (error){
//     console.log(error);
//     res.status(404).json({ error: 'Sorry! something went wrong' });
//     }
// }

const getIndividualProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(201).json(product)
    }
    catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"})
    }
}

//delete Product

const deleteIndividualProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).lean().exec()
        await Product.findByIdAndDelete(product)
        res.status(200).json({message: "Deleted Successfully"})
    }
    catch (error) {
        console.log(error)
    }
}

//get products bifurcated as per category and company
const getSortedProducts = async(req, res) => {
    try{
        const category = req.params.category
        const company = req.params.company

        const data = await Product.find({category: {$eq: category} , company: {$eq: company}})
        res.status(201).json({data: data})
    }
    catch{
        console.error(error);
        res.status(500).json({message: "Server Error"})
    }
    
}

module.exports = {
    getAllProducts,
    getIndividualProduct,
    deleteIndividualProduct,
    getSortedProducts
}