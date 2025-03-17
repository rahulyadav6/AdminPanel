import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";
import { addProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts)

router.post("/", addProduct)

router.put("/:id", updateProduct)

router.delete("/:id", deleteProduct)


export default router;