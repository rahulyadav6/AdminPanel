import express from "express";
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/api/products", async(req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json({success:true, data: products});
    }catch(error){
        console.error("error in fetching products: ", error.message);
        res.status(500).json({success:false, message: "Server Error"});
    }
})

app.post("/api/products", async(req, res)=>{
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
})

app.put("/api/products/:id", async(req,res)=>{
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
})

app.delete("/api/products/:id", async(req,res)=>{
    const {id} = req.params;
    try{
        const response = await Product.findByIdAndDelete(id);
        if(!response){
            res.status(404).json({success:false, message: "Product not found"});
        }
        res.status(200).json({success: true, message: "Product deleted"});
    }catch(error){
        res.status(404).json({success:false, message: "Product not found"});
    }
})

app.listen(5000, ()=>{
    console.log("Server started at https://localhost:5000");   
    connectDB();
})