import { Router } from "express";
import Basket_controler from "../controllers/basket_controlers.js";

const basket_router = new Router()

basket_router.get("/basket/:id", Basket_controler.get1)
basket_router.post("/basket/:id", Basket_controler.new_product_in_busket)


export default basket_router