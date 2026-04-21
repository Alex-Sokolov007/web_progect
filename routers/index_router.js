import { Router } from "express";
import Index_controler from "../controllers/index_controlers.js";

const test_router = new Router()

// test_router.post("/", Index_controler.post1)

test_router.get("/", Index_controler.rendering_page)

// test_router.put("/", (req, res) =>{
//     console.log("пут запрос")
// })
// test_router.get('/:id', Index_controler.get1)
// test_router.delete("/:id", (req, res) =>{
//     console.log("делит запрос")
// })

export default test_router