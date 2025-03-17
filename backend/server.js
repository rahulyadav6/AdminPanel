import express from "express";
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(5000, ()=>{
    console.log("Server started at https://localhost:" + PORT);   
    connectDB();
})