import Product from "../models/product.model.js";

// Get all product
export const getProducts = async(req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json({success:true, data: products});
    }catch(error){
        console.error("error in fetching products: ", error.message);
        res.status(500).json({success:false, message: "Server Error"});
    }
}

// Add a product
export const addProduct = async(req, res)=>{
    const product = req.body;
    console.log(product);
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({
            success: false,
            message: "Please provide all fields"
        });
    }
    
    try{
        const newProduct = new Product(product);
        await newProduct.save();
        res.status(201).json({
            success: true, 
            data: newProduct
        });
    }catch(error){
        console.error("Error in creating product", error.message);
        res.status(500).json({success:false, message: "Server error"});
    }
}


// Update a product 
export const updateProduct = async(req,res)=>{
    const {id} = req.params;
    const product = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid Product Id"});
    }

    try{
        const updateProduct = await Product.findByIdAndUpdate(id, product, {new:true});
        res.status(200).json({success:true, data: updateProduct});
    }catch(error){
        res.status(500).json({success:false, message:"Server Error"});
    }
}

// Delete a product
export const deleteProduct = async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid Product Id"});
    }
    
    try{
        const response = await Product.findByIdAndDelete(id);
        if(!response){
            res.status(404).json({success:false, message: "Product not found"});
        }
        res.status(200).json({success: true, message: "Product deleted"});
    }catch(error){
        res.status(500).json({success:false, message: "Server Error"});
    }
}