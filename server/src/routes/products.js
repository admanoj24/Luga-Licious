import { Router } from "express";
import Product from "../models/products.js";

const productRouter = Router();

productRouter.post("/product", async (req, res) => {
  const existingProduct = await Product.findOne({ name: req.body.name });
  if (existingProduct) return res.send("Product with this name already exists");

  await Product.create(req.body);
  return res.send("Product added successfully");
});

export default productRouter;
