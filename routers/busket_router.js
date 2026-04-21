import { Router } from "express";
import Basket_controler from "../controllers/basket_controlers.js";

const basket_router = new Router()

basket_router.get("/basket/:id", Basket_controler.get1)

export default basket_router