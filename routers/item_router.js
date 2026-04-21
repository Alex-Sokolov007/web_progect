import { Router } from "express";
import Item_controler from "../controllers/item_controlers.js";

const item_router = new Router()

item_router.get("/item/:id", Item_controler.get1)

// item_router.get("/", Item_controler.get_all)

// item_router.put("/", (req, res) =>{
//     console.log("пут запрос")
// })
// item_router.get('/:id', Item_controler.get1)
// item_router.delete("/:id", (req, res) =>{
//     console.log("делит запрос")
// })

export default item_router